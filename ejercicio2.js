const frutas = ["manzana", "banano", "uva", "pera", "sandia", "wiki", "naranja"]

frutas.sort()

function SingularAPlural(palabra) {
    if (palabra.endsWith("s")) {
        return palabra
    }
    return palabra + "s"
}

let frutasPlural = [];
    for (const fruta of frutas) {
        frutasPlural.push(SingularAPlural(fruta));
    }
    console.log("Frutas en plural:", frutasPlural);


function existeFruta(nombreFruta) {
    return frutas.includes(nombreFruta);
    }
    console.log("¿Existe 'mango'?", existeFruta("mango")); 
    console.log("¿Existe 'uva'?", existeFruta("uva"));     


const frutasCortas = frutas.filter(fruta => fruta.length <= 4);
console.log("Frutas con 4 letras o menos:", frutasCortas);


function eliminarFruta(nombreFruta) {
    const index = frutas.indexOf(nombreFruta);
    if (index !== -1) {
        frutas.splice(index, 1);
        return true;
    }
    return false;
}

console.log("Eliminar 'sandia':", eliminarFruta("sandia"));
console.log("Eliminar 'mango':", eliminarFruta("mango"));   
console.log("Frutas después de eliminar:", frutas);
