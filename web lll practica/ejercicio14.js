function conCallback(cb) {
    let promesa = new Promise(resolve => {
        resolve("Hola");
    });

    promesa.then(cb);
}

conCallback(function(res) {
    console.log(res);
});