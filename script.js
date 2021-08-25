function employee(){
    window.location="Destination.html";
}

function onFormSubmit(){

    //event.preventDefault();
    window.location="Destination.html";
    var formData=readFormData();
    insertNewRecord(formData);
    
    //console.log(a);
    //console.log(formData);

    let formData_serialized=JSON.stringify(formData);
    console.log(formData_serialized);

    localStorage.setItem("formData", formData_serialized);

}

function readFormData(){
    var formData={};
    formData["name"]=document.getElementById("name").value;
    formData["email"]=document.getElementById("email").value;
    formData["empno"]=document.getElementById("empno").value;
    /*formData["country"]=document.getElementById("country").value;
    formData["state"]=document.getElementById("state").value;
    formData["city"]=document.getElementById("city").value;*/
    return formData;
}




var a=document.getElementsById("data-name").innerHTML=localStorage.getItem("formData.name");
console.log(a);
document.getElementById("data-email").innerHTML=localStorage.getItem("formData.email");
document.getElementById("data-employee").innerHTML=localStorage.getItem("formData.empno")

function insertNewRecord(data){
    var table=document.getElementById("employeesList").getElementsByTagName('tbody')[0];
    var newRow=table.insertRow(table.length);
    cell1=newRow.insertCell(0);
    cell1.innerHTML=data.name;
    cell2=newRow.insertCell(1);
    cell2.innerHTML=data.email;
    cell3=newRow.insertCell(2);
    cell3.innerHTML=data.empno;
    cell4=newRow.insertCell(3);
    /*cell4.innerHTML=data.country;
    cell5=newRow.insertCell(4);
    cell5.innerHTML=data.state;
    cell6=newRow.insertCell(5);
    cell6.innerHTML=data.city;*/

}