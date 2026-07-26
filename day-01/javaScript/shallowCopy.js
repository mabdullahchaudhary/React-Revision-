

const valuesForTesting={
    name:"Abdullah",
    settings:{Theme:"Dark Theme"}
}


const shallowCopy={...valuesForTesting}

console.log(shallowCopy);
shallowCopy.settings.Theme="Light Theme"
console.log(shallowCopy);
console.log(valuesForTesting.settings.Theme);
