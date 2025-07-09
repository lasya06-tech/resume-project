function addSummaryItem() {
  const container = document.getElementById("summary-container");

  const input = document.createElement("input");
  input.type = "text";
  input.className = "summary-point";
  input.placeholder = "Enter summary point...";

  container.appendChild(input);
}

function subSummaryItem() {
  const container = document.getElementById("summary-container");
  const inputs = container.getElementsByClassName("summary-point");

  if (inputs.length > 1) {
    container.removeChild(inputs[inputs.length - 1]);
  } else {
    alert("At least one summary point is required.");
  }
}

function saveSummary() {
  const inputs = document.querySelectorAll(".summary-point");
  const summaries = [];

  inputs.forEach(input => {
    const value = input.value.trim();
    if (value !== "") {
      summaries.push(value);
    }
  });

  if (summaries.length === 0) {
    alert("Please enter at least one summary point.");
    return;
  }

  localStorage.setItem("summary", JSON.stringify(summaries));
  alert("Summary saved successfully!");
}
