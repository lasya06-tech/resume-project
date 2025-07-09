function saveInfo() {
  const fname = document.getElementById("fname").value.trim();
  const lname = document.getElementById("lname").value.trim();
  const roll = document.getElementById("roll").value.trim();
  const branch = document.getElementById("branch").value.trim();
  const mobile = document.getElementById("mob").value.trim();
  const email = document.getElementById("mai").value.trim();
  const github = document.getElementById("git").value.trim();
  const linkedin = document.getElementById("linke").value.trim();

  // Basic validation
  if (!fname || !lname || !roll || !branch || !mobile || !email) {
    alert("Please fill in all required fields.");
    return;
  }

  const basicInfo = {
    fname,
    lname,
    roll,
    branch,
    mobile,
    email,
    github,
    linkedin
  };

  localStorage.setItem("basicInfo", JSON.stringify(basicInfo));

  // Alert and redirect
  alert("Information saved successfully!");
  window.location.href = "second.html";
}
