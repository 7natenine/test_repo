'use strict';
function jediName(firstName, lastName){
    let  result = '';

    for(let i=0; i < 3; i++){
        result += lastName[i];
    }

    for(let i=0; i < 2; i++){
        result += firstName[i];
    }

    return result;
}

console.log(jediName('Beyonce', 'Knowles'));