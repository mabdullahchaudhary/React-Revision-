

console.log("1- Script Start ");


setTimeout(() => {
    console.log("2- In the setTimeout ");

}, 0);


Promise.resolve().then(() => {
    console.log("3 - In promises - 01");
}).then(() => {
    console.log("4 - In promises - 02");

})


queueMicrotask(()=>{
    console.log("5 - In queue MicroTask");
})

console.log("6- End");
