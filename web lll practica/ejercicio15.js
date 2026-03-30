function conPromesa() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hola");
        }, 1000);
    });
}

conPromesa().then(res => console.log(res));