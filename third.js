
let projects=[];

function addDescription(){

    
    const descContainer=document.getElementById("desc-container");
    const input=document.createElement("input");
    input.type="text";
    input.placeholder=`Enter description ${descContainer.children.length+1}`
    input.className="desc-input";
    descContainer.appendChild(input);
}

function remDescription(){
    const descContainer=document.getElementById("desc-container");
    if(descContainer.children.length>1){
        descContainer.removeChild(descContainer.lastChild);
    }
    else{
        alert("atleast one description is needed");
    }
}

function addProject(){

     //for storing for new project save prev enterentered fileds.


    const title=document.getElementById("title").value.trim();
    const stack=document.getElementById("stack").value.trim();
    const descInputs=document.querySelectorAll(".desc-input");

    const descriptions=[];//array to store values of title,stack,descinputs.
    descInputs.forEach(inp=>{
        if(inp.value.trim()!=="") 
        descriptions.push(inp.value.trim());
    });
    if(!title||!stack||descriptions.length===0){
        alert("Please fill out fields before saving.");
        return;
    }

    const project ={
        title,
        stack,
        descriptions   //to store descriptions array we given logic above.
    };
    projects.push(project);
     // ✅ Save to localStorage
    localStorage.setItem("projectData", JSON.stringify(projects));

    //clear fileds
    document.getElementById("title").value="";
    document.getElementById("stack").value="";
    const descContainer=document.getElementById("desc-container");
    descContainer.innerHTML="";

}