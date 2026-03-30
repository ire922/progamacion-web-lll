function miPromesa() {
    return new Promise(resolve => {
        resolve("OK");
    });
}

async function ejecutar() {
    let res = await miPromesa();
    console.log(res);
}

ejecutar();