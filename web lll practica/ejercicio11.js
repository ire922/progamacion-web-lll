new Promise((resolve) => {
    resolve(1);
})
.then((num) => {
    return num + 1;
})
.then((num) => {
    return num + 1;
})
.then((num) => {
    console.log(num);
});