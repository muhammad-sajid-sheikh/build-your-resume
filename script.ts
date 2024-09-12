const button = document.getElementById("toggle-skills");
const skills = document.getElementById("skills");
button.addEventListener("click", function () {
    if (skills.style.display === "none") {
        skills.style.display = "block";
    }
    else {
        skills.style.display = "none";
    }
});


const form = document.getElementById('resumeform');
const resumeOutput = document.getElementById('resumeOutput');



form.addEventListener('submit', function(event) {
    event.preventDefault();

    // information form
    const name = document.getElementById('name').value;
    const fname = document.getElementById('f.name').value;
    const phone = document.getElementById('phone').value
    const email = document.getElementById('email').value;
    const cnic = document.getElementById('cnic').value;
    
    
    // education form

    const higherEducation = document.getElementById("highereducation").value;
    const uniCollage = document.getElementById("university").value;

    // skill form

    const skill1 = document.getElementById('skill1').value;
    const skill2 = document.getElementById('skill2').value
    const skill3 = document.getElementById('skill3').value;
    const skill4 = document.getElementById('skill4')?.value;
    const skill5 = document.getElementById('skill5')?.value;
    const skill6 = document.getElementById('skill6')?.value;
    // experience form
    const experience1 = document.getElementById('workexper1').value;
    const designation1 = document.getElementById('role1').value
    const experience2 = document.getElementById('workexper2').value;
    const designation2 = document.getElementById('role2').value;


// certification form
    const certification1 = document.getElementById('certification1').value
    const institute1 = document.getElementById('institute1').value;
    const certification2 = document.getElementById('certification2').value;
    const institute2 = document.getElementById('institute2').value;
    const certification3 = document.getElementById('certification3').value;
    const institute3 = document.getElementById('institute3').value;
    const certification4 = document.getElementById('certification4').value;
    const institute4 = document.getElementById('institute4').value;

// information 
    document.getElementById('resumename').innerText = name;
    document.getElementById('resumefname').innerText = fname;
    document.getElementById('resumephone').innerText = phone;
    document.getElementById('resumeemail').innerText = email;
    document.getElementById('resumecnic').innerText = cnic;
    

    // education
    document.getElementById("resumeeducation").innerHTML = higherEducation;
    document.getElementById("resumecollage").innerText = uniCollage

// skill
    document.getElementById('resumeskill1').innerText = skill1;
    document.getElementById('resumeskill2').innerText = skill2;
    document.getElementById('resumeskill3').innerText = skill3;
    document.getElementById('resumeskill4').innerText = skill4;
    document.getElementById('resumeskill5').innerText = skill5;
    document.getElementById('resumeskill6').innerText = skill6;


    // experience

    document.getElementById('workex1').innerText = experience1;
    document.getElementById('desig1').innerText = designation1;
    document.getElementById('workex2').innerText = experience2;
    document.getElementById('desig2').innerText = designation2;


    // certification
    document.getElementById('resumecertificate1').innerText = certification1;
    document.getElementById('resumeinstitute1').innerText = institute1;
    document.getElementById('resumecertificate2').innerText = certification2;
    document.getElementById('resumeinstitute2').innerText = institute2;
    document.getElementById('resumecertificate3').innerText = certification3;
    document.getElementById('resumeinstitute3').innerText = institute3;
    document.getElementById('resumecertificate4').innerText = certification4;
    document.getElementById('resumeinstitute4').innerText = institute4;

    resumeOutput.style.display = 'block';

});


const fileInput = document.getElementById('fileInput');
const imagePreview = document.getElementById('imagePreview');

// Add an event listener to the file input element
fileInput.addEventListener('change', function() {
    const file = fileInput.files[0];

    // Check if a file was selected
    if (file) {
        // Create a FileReader to read the file
        const reader = new FileReader();

        // Set up a callback to run when the file is read
        reader.onload = function(e) {
            // Set the src of the image to the file's data URL
            imagePreview.src = e.target.result;
        };

        // Read the file as a data URL
        reader.readAsDataURL(file);
    }
});

document.getElementById('pdfButton').addEventListener('click', function() {
    const element = document.getElementById('resume-container');
    html2pdf(element);
});
