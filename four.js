function addone() {
  const container = document.getElementById("ach-container");
  const input = document.createElement("input");
  input.type = "text";
  input.className = "achieve";
  input.placeholder = "Enter your achievement";
  
  container.appendChild(input); 
}

function subone(){
  const cont=document.getElementById("ach-container");
  if(cont.children.length>1){
    cont.removeChild(cont.lastChild);
  }
  else{
    alert("One description is required");
  }
}

function saveAchievements() {
  const inputs = document.querySelectorAll(".achieve");
  const achievements = [];

  inputs.forEach(input => {
    if (input.value.trim() !== "") {
      achievements.push(input.value.trim());
    }
  });

  if (achievements.length === 0) {
    alert("Please enter at least one achievement.");
    event.preventDefault(); // Prevents navigation
    return;
  }

  // Save to localStorage
  localStorage.setItem("achievements", JSON.stringify(achievements));
}
