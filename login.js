//ověření správnosti hesla
function login(heslo) {
    var heslo = document.getElementById("heslo").value;  //zjistí hodnotu hesla
   
    if (heslo == "1234") {
        window.location.replace("interface.html");
    }
    else {
        alert("Špatně");
    }
    return 0;

}
