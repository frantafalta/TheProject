//načtení hodnoty z inputu

function login(heslo) {
    var heslo = document.getElementById("heslo").value;
    if (heslo == "1234") {
        alert("Správně");
    }
    else {
        alert("Špatně");
    }
    return 0;
}
