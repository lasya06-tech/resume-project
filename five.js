function saveskill(){
    const heading=document.getElementById("skill-heading").value.trim();
    const rawItems=document.getElementById("skill-items").value.trim();
    if(!heading||!rawItems){
        alert("Please fill both fields");
        return;
    }
    const formattedItems=rawItems.split(",").map(item=>item.trim()).filter(item=>item!=="").join(", ");
    //This splits the raw input string into an array, using commas as separators.
    //This goes through each item in the array and removes any leading or trailing spaces.
    //This removes empty strings from the array. Useful if the user adds extra commas or spaces.
    //This joins the array back into a single string, adding a proper comma + space between each item.
    const skill={
        heading: heading,
        items: formattedItems
    };
    let skills=JSON.parse(localStorage.getItem("skills"))|| [];
    skills.push(skill); //add new skills to skill array.

     // ✅ Save updated skills array back to localStorage
    localStorage.setItem("skills", JSON.stringify(skills));
    //clear the fileds
    document.getElementById("skill-heading").value="";
    document.getElementById("skill-items").value="";
    alert("Skill section saved!");

}