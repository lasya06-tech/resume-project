function addskillsec(){
const cname=document.getElementById("cname").value.trim();
const cyear=document.getElementById("cyear").value.trim();


const cprovid=document.getElementById("cprovid").value.trim();
const cverify=document.getElementById("veriflink").value.trim();


if(!cname||!cyear||!cprovid||!cverify){
    alert("Please fill in all fileds");
    return;
}

//store all in array
const certi={
    cname:cname,
    cyear:cyear,
    cprovid:cprovid,
    cverify:cverify
}
//get existing array
const existing=JSON.parse(localStorage.getItem("certi"))||[];
existing.push(certi);

// ✅ Save updated array to localStorage
    localStorage.setItem("certi", JSON.stringify(existing));
//clear fields
  document.getElementById("cname").value = "";
  document.getElementById("cyear").value = "";
  document.getElementById("cprovid").value = "";
  document.getElementById("veriflink").value = "";

  alert("Certification added!");
}

