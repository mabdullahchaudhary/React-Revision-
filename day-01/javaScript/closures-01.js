

function countCounter(){
    let count=0;

    return{
        increment:()=> ++count,
        decrement:()=> --count,
        display:()=> count
    }
}

let run_a = countCounter();
let run_b = countCounter();

console.log("run_a "+ run_a.display());
console.log("run_b "+ run_b.display());
run_a.decrement();
run_b.increment();
console.log("run_a "+ run_a.display());
console.log("run_b "+ run_b.display());