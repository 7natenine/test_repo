'use strict';
function getYearOfBirth(age){

  return 2019 - age;
}

function createGreeting(name, age){
  if (name === undefined || age === undefined) {
    throw new Error('Invalid argument.');
  }
	
  if (age < 0) {
    throw new Error('Age cannot be negative.');
  }

  if (typeof age !== 'number') {
    throw new TypeError('Age must be a number');
  }

  const yob = getYearOfBirth(age);
  return `Hi, my name is ${name} and I'm ${age} years old. I was born in ${yob}`;

}

try {
  const greeting1 = createGreeting('Rob', 25);
  console.log(greeting1);
} catch(e) {
  console.log(e.message);
}

/*  const yob = getYearOfBirth(gAge);
  return `My name is ${gName} I'm ${gAge} years old and `
            + `I was born in ${yob}`;
}

function  yearOfBirth(age){  
  if(age < 0){
    throw new Error('Age can not be negative');
  }

  return age;
}

try { 
  const greeting1 =  createGreeting(myName, myAge);
  console.log(greeting1);
} catch (e) {
  console.log(e.message);
}


const myName = 'Rob';
const myAge = 25;

const greeting1 = createGreeting(myName, myAge);

console.log(greeting1);
*/
