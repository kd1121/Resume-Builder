function addNewWEField() {
    // console.log("Adding New Field");
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder", "Enter Here");

    let weOb = document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");

    weOb.parentNode.insertBefore(newNode, weAddButtonOb);
}

function addNewAQField() {

    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("aqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter Here");

    let aqOb = document.getElementById("aq");
    let aqAddButtonOb = document.getElementById("aqAddButton");

    aqOb.parentNode.insertBefore(newNode, aqAddButtonOb)
}

// generating CV...

function generateCV() {
    
    let nameField = document.getElementById("nameField").value;

    let nameTemp1 = document.getElementById("nameTemp1");

    nameTemp1.innerHTML = nameField;

    // direct...

    document.getElementById("nameTemp2").innerHTML =  nameField;

    // contact

    document.getElementById("contactTemp").innerHTML = document.getElementById("contactField").value;

    // adrdess

    document.getElementById("addressTemp").innerHTML = document.getElementById("addressField").value;

    // Imp Links

    document.getElementById("fbTemp").innerHTML = document.getElementById("fbField").value;
    document.getElementById("igTemp").innerHTML = document.getElementById("igField").value;
    document.getElementById("ghTemp").innerHTML = document.getElementById("ghField").value;
    document.getElementById("linTemp").innerHTML = document.getElementById("linField").value;

    // objective

    document.getElementById("objTemp").innerHTML = document.getElementById("objField").value;

    // WE

    let wes = document.getElementsByClassName("weField");

    let str = "";

    for(let e of wes)
    {
        str = str +  `<li> ${e.value} </li>`;
    }

    document.getElementById("weTemp").innerHTML = str;

    // AQ

    let aqs = document.getElementsByClassName("aqField");

    let str1 = "";

    for(let e of wes)
    {
        str1 = str1 +  `<li> ${e.value} </li>`;
    }

    document.getElementById("aqTemp").innerHTML = str1;


    document.getElementById("cv-form").style.display = "none";
    document.getElementById("cv-template").style.display = "block";

}

// printing CV...
function printCV() {
    window.print();
}