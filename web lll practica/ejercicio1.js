function miFuncion(texto) {
    let resultado = { a: 0, e: 0, i: 0, o: 0, u: 0 };

    for (let i = 0; i < texto.length; i++) {
        let letra = texto[i].toLowerCase();
        if (resultado[letra] !== undefined) {
            resultado[letra]++;
        }
    }

    return resultado;
}

let obj = miFuncion("euforia");
console.log(obj);