function getYearOfBirth(age){

    return 2019 - age;
}

function createGreeting(gName, gAge){ 
    const yob = getYearOfBirth(gAge);
    return `My name is ${gName} I\'m ${gAge} years old and `
            + `I was born in ${yob}`
}


const myName = "Rob";
const myAge = 25;

const greeting1 = createGreeting(myName, myAge);

console.log(greeting1);

