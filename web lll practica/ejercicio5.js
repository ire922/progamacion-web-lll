function miFuncion(cad) {
    let invertido = cad.split("").reverse().join("");
    return cad === invertido;
}

let band = miFuncion("oruro");
console.log(band);

band = miFuncion("hola");
console.log(band);