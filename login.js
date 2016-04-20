//ověření správnosti hesla
function login(heslo) {
    var heslo = document.getElementById("heslo").value;  //zjistí hodnotu hesla
    
        // výpis chyby při zadání špatného hesla
   /*
        heslo = null;
        alert("Špatně");
      
        var node = document.getElementById("error");
        while (node.firstChild) {
            node.removeChild(node.firstChild);
        }
        var message = document.createTextNode("Špatně");
        node.appendChild(message);*/
     
    return users[i];

    if (heslo == "1234") {
        window.location.replace("interface.html");
    }
    else {
        alert("Špatně");
    }
    return 0;

}
