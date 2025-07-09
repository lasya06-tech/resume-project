let experienceArray = []; // always empty when page loads
function addExperienceInput()
{
    const titl=document.getElementById("exp-title").value.trim();
    const expcom=document.getElementById("exp-company").value.trim();
    const expdura=document.getElementById("exp-duration").value.trim();
    const expdesc=document.getElementById("exp-desc").value.trim();
    if(!titl||!expcom||!expdura||!expdesc){
        alert("Please fill all the required fields");
        return;
    }

    const project={
        titl,
        expcom,
        expdura,
        expdesc
    }
    experienceArray.push(project);

    //save items.
    localStorage.setItem("experiencedata",JSON.stringify(experienceArray));

    //clear fields.
    document.getElementById("exp-title").value="";
    document.getElementById("exp-company").value="";
    document.getElementById("exp-duration").value="";
    document.getElementById("exp-desc").value="";

    alert("Experience added!");
   
}