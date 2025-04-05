const opciones = ["PIEDRA", "PAPEL", "TIJERA"]

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

let computadora = opciones[getRandomInt(3)]


let jugar = true

while (jugar) {
    let computadora = opciones[getRandomInt(3)];
    let usuario = prompt("Juega: PIEDRA, PAPEL o TIJERA").toUpperCase();

    if (computadora === usuario) {
        alert("¡ESTAMOS EMPATADOS!");
    } else if (
        (usuario === "PIEDRA" && computadora === "TIJERA") ||
        (usuario === "PAPEL" && computadora === "PIEDRA") ||
        (usuario === "TIJERA" && computadora === "PAPEL")
    ) {
        alert("¡FELICIDADES GANASTE!");
    } else if (
        (computadora === "PIEDRA" && usuario === "TIJERA") ||
        (computadora === "PAPEL" && usuario === "PIEDRA") ||
        (computadora === "TIJERA" && usuario === "PAPEL")
    ) {
        alert("LO SIENTO...PERDISTE");
    } 

    let continuar = prompt("¿Quieres jugar otra vez? ").toUpperCase();
    if (continuar !== "SI") {
        jugar = false;
        alert("Gracias por jugar");
    }
}