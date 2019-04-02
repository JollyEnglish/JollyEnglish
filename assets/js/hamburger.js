function animateHamburger(x) {
    x.classList.toggle("change");
    var x = document.getElementById("Home");
    if (x.className === "nav") {
        x.className += " responsive";
    } else {
        x.className = "nav";
    }
}
