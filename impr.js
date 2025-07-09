document.getElementById('analyzeBtn').addEventListener('click', () => {
  const fileInput = document.getElementById('resumeUpload');
  const file = fileInput.files[0];
  if (!file) return alert("Please upload a resume file.");

  const reader = new FileReader();

  if (file.type === "application/pdf") {
    const fileReader = new FileReader();
    fileReader.onload = async function () {
      const typedarray = new Uint8Array(this.result);
      const pdf = await pdfjsLib.getDocument(typedarray).promise;
      let fullText = "";

      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const content = await page.getTextContent();
        const strings = content.items.map(item => item.str).join(" ");
        fullText += strings + "\n";
      }

      analyzeText(fullText);
    };
    fileReader.readAsArrayBuffer(file);
  } else {
    reader.onload = function (e) {
      const text = e.target.result;
      analyzeText(text);
    };
    reader.readAsText(file);
  }
});

async function analyzeText(text) {
  const cleanedText = text.slice(0, 3000); // limit for free API
  const res = await fetch("https://api.languagetoolplus.com/v2/check", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: new URLSearchParams({
      language: "en-US",
      text: cleanedText
    })
  });

  const data = await res.json();
  displayMistakes(data);
}

function displayMistakes(data) {
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "<h3>Detected Mistakes:</h3>";

  if (data.matches.length === 0) {
    resultDiv.innerHTML += "<p>No grammar or style issues found ✅</p>";
    return;
  }

  data.matches.forEach((match, index) => {
    const item = document.createElement("div");
    item.classList.add("error-item");

    item.innerHTML = `
      <strong>Error ${index + 1}:</strong> ${match.message}<br/>
      <em>Context:</em> ${match.context.text}<br/>
      <strong>Suggestion:</strong> ${match.replacements.map(r => r.value).join(", ") || "None"}
      <hr/>
    `;
    resultDiv.appendChild(item);
  });
}
