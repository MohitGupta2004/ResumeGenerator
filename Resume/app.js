function generateResume() {
    let name = document.getElementById("nameField").value;
    let namet1 = document.getElementById("namet1");
    namet1.innerHTML = name;

    let job = document.getElementById("JobRoleField").value;
    let jobt1 = document.getElementById("jobt1");
    jobt1.innerHTML = job;


    let contact = document.getElementById("contactField").value;
    let contact1 = document.getElementById("contact1");
    contact1.innerHTML = contact;


    let address = document.getElementById("AddressField").value;
    let address1 = document.getElementById("addresst1");
    address1.innerHTML = address;

    let linkedIN = document.getElementById("LinkedInField").value;
    let linked = document.getElementById("link1");
    linked.innerHTML = linkedIN;


    let github = document.getElementById("GitHubField").value;
    let git = document.getElementById("link2");
    git.innerHTML = github;


    let email = document.getElementById("exampleInputEmail1").value;
    let email1 = document.getElementById("link3");
    email1.innerHTML = email;


    let objField = document.getElementById("ObjectiveField").value;
    let obj1 = document.getElementById("objt1");
    obj1.innerHTML = objField;


    let wes = document.getElementById("ExpField1").value;
    let west = document.getElementById("Exp1");
    west.innerHTML = wes;

    let wes1 = document.getElementById("ExpField2").value;
    let west1 = document.getElementById("Exp2")
    west1.innerHTML = wes1;



    let aq = document.getElementById("EduField1").value;
    let aqt = document.getElementById("Edu1")
    aqt.innerHTML = aq;

    let aq1 = document.getElementById("EduField2").value;
    let aqt1 = document.getElementById("Edu2")
    aqt1.innerHTML = aq;

    let aq2 = document.getElementById("EduField3").value;
    let aqt2 = document.getElementById("Edu3")
    aqt2.innerHTML = aq2;



    let skills = document.getElementById("skillField1").value;
    let skillst = document.getElementById("skill1")
    skillst.innerHTML = skills;

    let skills1 = document.getElementById("skillField2").value;
    let skillst1 = document.getElementById("skill2")
    skillst1.innerHTML = skills1;

    let skills2 = document.getElementById("skillField3").value;
    let skillst2 = document.getElementById("skill3")
    skillst2.innerHTML = skills2;

    let skills3 = document.getElementById("skillField4").value;
    let skillst3 = document.getElementById("skill4")
    skillst3.innerHTML = skills3;



    let hob = document.getElementById("HobbiesField1").value;
    let hobt = document.getElementById("Hobbies1")
    hobt.innerHTML = hob;

    let hob1 = document.getElementById("HobbiesField2").value;
    let hobt1 = document.getElementById("Hobbies2")
    hobt1.innerHTML = hob1;

    let hob2 = document.getElementById("HobbiesField3").value;
    let hobt2 = document.getElementById("Hobbies3")
    hobt2.innerHTML = hob2;

    document.getElementById("Resume-Form").style.display = "none";
   // document.getElementById("resume-template").style.display = "block";


   let profilePic = document.getElementById("profile-pic");
    let inputFile = document.getElementById("input-file");
    profilePic.src = URL.createObjectURL(inputFile.files[0]);

}
