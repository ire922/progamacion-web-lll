function tarea() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Listo"), 1000);
    });
}

// Promesa
tarea().then(res => console.log(res));

// Async/Await
async function ejecutar() {
    let res = await tarea();
    console.log(res);
}

ejecutar();