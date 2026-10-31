
function subir() {
    document.getElementById("ventanaTiempo")
        .scrollBy({
            top: -150,
            behavior: "smooth"
        });
}

function bajar() {
    document.getElementById("ventanaTiempo")
        .scrollBy({
            top: 150,
            behavior: "smooth"
        });
}
