function saveEducationInfo() {
    const collegeName = document.getElementById("collegename").value.trim();
    const specialization = document.getElementById("specializ").value.trim();
    const location = document.getElementById("loc").value.trim();
    const duration = document.getElementById("year").value.trim();

    // Basic validation
    if (!collegeName || !specialization || !location || !duration) {
        alert("Please fill in all education fields.");
        return;
    }

    const educationInfo = {
        collegeName,
        specialization,
        location,
        duration
    };

    localStorage.setItem("educationInfo", JSON.stringify(educationInfo));

    alert("Education details saved successfully!");
    window.location.href = "third.html";
}