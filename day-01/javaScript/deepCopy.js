


const valuesForTesting={
    name:"Abdullah",
    settings:{Theme:"Dark Theme"}
}


// const deepCopy=structuredClone(valuesForTesting)
const deepCopy={...valuesForTesting,settings:{...valuesForTesting.settings}}

console.log(deepCopy);
deepCopy.settings.Theme="Light Theme"
console.log(deepCopy);
console.log(valuesForTesting.settings.Theme);
