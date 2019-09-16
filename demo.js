function createGreeting(name, age){ 
    const yearOfBirth = 2019 - age;
    return `I was born in ${yearOfBirth}`
}

const name = "Rob";
const age = "25";


const greeting1 = createGreeting(name, age);

console.log(greeting1);

