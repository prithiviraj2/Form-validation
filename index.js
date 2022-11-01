

let list = [];

function validateform() {
    let name = document.getElementById("entername").value;
    let number = document.getElementById("enternumber").value;
    let email = document.getElementById("enteremail").value;
    let mailformat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let gender = document.querySelector('input[name="radioget"]:checked');
    let selected = new Array();
    let language = document.getElementById("tbl");
    let lang = language.getElementsByTagName("INPUT");
    let status = document.getElementById("getstatus").value;
    let address = document.getElementById("getaddress").value;

    if (name == "") {
        document.getElementById("alert").innerHTML = "Please enter your name!";
    } else {
        document.getElementById("alert").innerHTML = "";
    }

    if (number.length != 10) {
        document.getElementById("alertnum").innerHTML = "Number must be 10 character!";
    } else if(number.length > 10){
        document.getElementById("alertnum").innerHTML = "Number must be 10 character!";
    }
    else {
        document.getElementById("alertnum").innerHTML = "";
    }

    if (mailformat.test(email)) {
        document.getElementById("alertmail").innerHTML = "";

    } else {
        document.getElementById("alertmail").innerHTML = "You have entered an invalid email address!";
    }

    if (gender) {
        document.getElementById("alertgender").innerHTML = "";
    }
    else {
        document.getElementById("alertgender").innerHTML = "You must select gender!";
    }

    for (let i = 0; i < lang.length; i++) {
        if (lang[i].checked) {
            selected.push(lang[i].value);
        }
    }

    if (selected.length > 0) {
        document.getElementById("alertlang").innerHTML = "";
    } else {
        document.getElementById("alertlang").innerHTML = "you must select your language!";
    }
    if (status == "") {
        document.getElementById("alertstatus").innerHTML = "You must select status!";
    } else {
        document.getElementById("alertstatus").innerHTML = "";
    }
    if (address == "") {
        document.getElementById("alertaddress").innerHTML = "Please enter your address!";
    } else {
        document.getElementById("alertaddress").innerHTML = "";
    }


    let result = { "name": name, "mobileNumber": number, "emailId": email, "gender": gender.value, "language": selected, "status": status, "address": address };

    if (name && number && email && gender.value && language && status && address) {
        list.push(result)
        console.log(result);
        localStorage.setItem("resultvalue", JSON.stringify(list));
        buildFunction()
    } else {
        console.log("");

    }
}


function buildFunction() {


    var list = JSON.parse(localStorage.getItem("resultvalue"));
    
    let info ="";
     
    for (i = 0; i < list.length; i++) {
        info += '<tr>' ;
        info +=  '<td>' + list[i].name + '</td>' ;
        info += '<td>' + list[i].mobileNumber + '</td>' ;
        info += '<td>' + list[i].emailId + '</td>' ;
        info +='<td>' + list[i].gender + '</td>' ;
        info += '<td>' + list[i].language + '</td>' ;
        info += '<td>' + list[i].status + '</td>' ;
        info += '<td>' + list[i].address + '</td>' ;
        info += '</tr>';
        document.getElementById("tabledata").innerHTML = info;
    }

}

function resetfunction() {
    document.getElementById("myform").reset();
}


