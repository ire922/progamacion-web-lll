function operacion(a, b, callback) {
    let resultado = a + b;
    callback(resultado);
}

function mostrar(res) {
    console.log("Resultado:", res);
}

operacion(3, 5, mostrar);

function proceso() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve("Proceso terminado");
        }, 2000);
    });
}

proceso().then(function(resultado) {
    console.log(resultado);
});