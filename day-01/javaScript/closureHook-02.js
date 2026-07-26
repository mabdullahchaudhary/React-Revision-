
function useStateFunction(initial_value) {

    let _value = initial_value;

    function state(){
        return _value
    }

    function setState(new_value){
        _value=new_value;
    }

    return[state,setState]
}

const [state,setState]=useStateFunction(20);

// const logCount=()=>{
//     console.log("Count "+ state());    
// }


console.log("Count "+ state());
setState(50)
console.log("Count "+ state());
// logCount()