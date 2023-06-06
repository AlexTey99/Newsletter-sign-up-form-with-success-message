let verificateinput = false;

// Funcion que comprueba que se introdusen los caracteres nesesarios para el input
const Email = () => {
    const inputEmail = document.getElementById("inputEmail");
    const resultEmail = inputEmail.value;
    if (resultEmail != "" && /^[\w\-\+]+(\.[\w\-]+)*@([a-zA-Z0-9\-]+\.)+[a-zA-Z]{2,}$/.test(resultEmail)) {
        document.getElementById("inputEmail").innerHTML = resultEmail;
        document.getElementById("error").style.display = "none";
        document.getElementById("inputEmail").style.borderColor = "";
        verificateinput = true;
    } else {
        document.getElementById("error").style.display = "flex";
        document.getElementById("inputEmail").style.borderColor = "red";
        document.getElementById("inputEmail").style.background = "#ef879161";
        verificateinput = false;
    }
};
// Verifica si la funcio (Email) es true
const verificateEmail = () => {
    if (verificateinput) {
        document.getElementById("mainContainer").style.display = "none";
        document.getElementById("segundaryContainer").style.display = "flex";
    }
};
