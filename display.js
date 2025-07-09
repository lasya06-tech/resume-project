window.onload = function () {
  loadBasicInfo();
  loadEducationSection();
  loadProjects();
  loadAchievements();
  loadExperience();
  loadskills();
  loadcertification();
  loadSummary();
};

function hideIfEmpty(sectionId, contentId) {
  const section = document.getElementById(sectionId);
  const content = document.getElementById(contentId);
  if (content && content.innerHTML.trim() === "") {
    section.style.display = "none";
    content.style.display = "none";
  }
}


function loadBasicInfo() {
    const info=JSON.parse(localStorage.getItem("basicInfo"));

    if(!info){
        document.body.innerHTML="<p>No basic infromation found in localstorage.<p>";
        return;
    }

    const leftDiv=document.getElementById("left-info");
    const rightdiv=document.getElementById("right-info");

    leftDiv.innerHTML=`
    <h2>${info.fname} ${info.lname}</h2>
     <p>Roll No.: ${info.roll}</p>
    <p>${info.branch}</p>
  `;
  rightdiv.innerHTML=`
    <p>Phone: ${info.mobile}</p>
    <p>GitHub: <a href="${info.github}" target="_blank">${info.github}</a></p>
    <p>LinkedIn: <a href="${info.linkedin}" target="_blank">${info.linkedin}</a></p>
    <p>Email: ${info.email}</p>
  `;


}

function loadEducationSection() {
  const edu = JSON.parse(localStorage.getItem("educationInfo"));
  if (!edu) return hideIfEmpty("education-title", "education-entry");

  const container = document.getElementById("education-entry");

  container.innerHTML = `
    <div class="education-left">
      <p><strong>• ${edu.collegeName}</strong></p>
      <p><em>${edu.specialization}</em></p>
    </div>
    <div class="education-right">
       <p><em>${edu.location} | ${edu.duration}</em></p>
    </div>
  `;
}

function loadProjects() {
  const projectData = JSON.parse(localStorage.getItem("projectData")) || [];
  const container = document.getElementById("projects-container");

  
  // ✅ CLEAR old displayed entries
  container.innerHTML = "";

  if (projectData.length === 0) return hideIfEmpty("projects-title", "projects-container");

  projectData.forEach(proj => {
    const projDiv = document.createElement("div");
    projDiv.className = "project-entry";

    const descList = proj.descriptions.map(desc => `<li>${desc}</li>`).join("");

    projDiv.innerHTML = `
      <p><strong>• ${proj.title}</strong></p>
      <em>${proj.stack}</em>
      <ul>${descList}</ul>
    `;

    container.appendChild(projDiv);
  });

}

function loadAchievements(){
  const data=JSON.parse(localStorage.getItem("achievements"))||[];
  if (data.length === 0) return hideIfEmpty("achievements-title", "achievements-container");

  const container=document.getElementById("achievements-container");
  const list=document.createElement("ul");
  data.forEach(item=>{
    const li=document.createElement("li");
    li.textContent=item;
    list.append(li);
  });
  container.appendChild(list);   //single so we used this.

}

function loadExperience(){
  const expdata=JSON.parse(localStorage.getItem("experiencedata"))||[];
  if (expdata.length === 0) return hideIfEmpty("experience-title", "experience-container");
  const container = document.getElementById("experience-container");
  expdata.forEach((item)=>{
    const li = document.createElement("li"); 
    li.innerHTML = `<strong>${item.titl}</strong> at <em>${item.expcom}</em> 
    (${item.expdura})<br>${item.expdesc}`;
    container.appendChild(li);    //this is array so we used this.
  }); 
}

function loadskills(){
  const skills = JSON.parse(localStorage.getItem("skills")) || [];
  const container = document.getElementById("skills-container"); // ✅ keep this as is

 if (skills.length === 0) return hideIfEmpty("skills-title", "skills-container");

  skills.forEach(skill => {
    const section = document.createElement("div");
    section.classList.add("skill-line");  // ✅ just add class — don't reassign container

    section.innerHTML=`<strong>${skill.heading}:</strong> ${skill.items}`;
    container.appendChild(section);
  });
}

function loadcertification(){
  const cerdata=JSON.parse(localStorage.getItem("certi"))||[];
  
  if (cerdata.length === 0) {
  hideIfEmpty("certification-title", "left-infos");
  hideIfEmpty("certification-title", "right-infos");
  return;
}

  const leftdiv=document.getElementById("left-infos");
  const rightdiv=document.getElementById("right-infos");

  leftdiv.innerHTML="";
  rightdiv.innerHTML="";
  cerdata.forEach(certification=>{

    const right = document.createElement("div");
    right.innerHTML = `
      <p> ${certification.cprovid}</p>
      <p><a href="${certification.cverify}" target="_blank">Verify</a></p>

    `;
    rightdiv.appendChild(right);


    const left=document.createElement("div");
     left.innerHTML = `
      <p>${certification.cname}</p>
      <p>${certification.cyear}</p>
    `;
    leftdiv.appendChild(left);
  })
}

  function loadSummary(){
    const summary=JSON.parse(localStorage.getItem("summary"))||[];
    if (summary.length === 0) return hideIfEmpty("summary-title", "Professional-summary");

  const container=document.getElementById("Professional-summary");
  const item=document.createElement("ul");
  summary.forEach(summ=>{
    const list=document.createElement("li");
    list.textContent=summ;
    item.appendChild(list);
  })

  container.append(item);
  }




function downloadPDF() {
  const element = document.getElementById("resume");

  // Wait 500ms to ensure all localStorage data is rendered
  setTimeout(() => {
    const opt = {
      margin:       0.1,
      filename:     'My_Resume.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2, scrollY: 0 }, // Prevents scroll gaps
      jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(element).save();
  }, 500);
}



function resetLocalStorage() {
  const confirmReset = confirm("Are you sure you want to clear all resume data?");
  if (confirmReset) {
    localStorage.clear();
    alert("All data cleared.");
    location.reload();
  }
}



