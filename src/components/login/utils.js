function loginAppear() {
    let x = document.getElementById("login-form");
    let y = document.getElementById("register-form");
    if (x.style.display === "none") {
        x.style.display = "block";
        y.style.display = "none";
    }
}

function RegisterAppear() {
    let x = document.getElementById("register-form");
    let y = document.getElementById("login-form");
    if (x.style.display === "none") {
        x.style.display = "block";
        y.style.display = "none";
    }
}

