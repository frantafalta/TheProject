//ověření správnosti hesla
function login(heslo) {
    var heslo = document.getElementById("heslo").value;  //zjistí hodnotu hesla
    //var heslo2 = MD5(heslo);
    
    var i = 0;
    // prohledání databáze
    for (i = 0; users[i]["password"] != heslo; ++i);

    window.location.replace("interface.html");
    
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
}
