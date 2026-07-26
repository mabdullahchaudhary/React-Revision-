
function countCounter(){
    let justForTesting=10;
    let count=0;
    return{
        increament:()=> ++count,
        testFunction(){
            let justForTesting_02=10;
            return justForTesting+justForTesting_02;

        },
        checkTestValue(){return justForTesting}
    }
}

// let run_a=countCounter()
// console.log(run_a);

// console.log(run_a.increament());

// console.log(countCounter().increament());

/*
we have called with different mentod one using varaible and other one directly both are not same completely different in first one it create a same instant every time whenever we call but for the second one it create a new instant everytime the previous value will never remains save.
*/

let newTesting=countCounter()
console.log(newTesting.testFunction())
console.log(newTesting.checkTestValue());
