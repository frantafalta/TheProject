//ověření správnosti hesla
function login(heslo) {
    var heslo = document.getElementById("heslo").value;  //zjistí hodnotu hesla
    //var heslo2 = MD5(heslo);
    if (heslo == "1234") {
        window.location.replace("interface.html");
    }
    else {
        heslo = null;
        var node = document.getElementById("error");
        while (node.firstChild) {
            node.removeChild(node.firstChild);
        }
        var message = document.createTextNode("Špatně");
        node.appendChild(message);
                        
    }
    return null;
}
