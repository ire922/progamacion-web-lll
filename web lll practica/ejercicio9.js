let promesa = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve("Éxito");
    }, 3000);
});

promesa.then(function(mensaje) {
    console.log(mensaje);
});