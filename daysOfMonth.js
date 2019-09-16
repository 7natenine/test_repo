'use strict';

function daysOfMonth(month, leapYear){

    console.log(leapYear);
    let result = '';

    if(leapYear){
        switch (month){
            case 'January':
            case 'March':
            case 'May':
            case 'July':
            case 'August':
            case 'October':
            case 'December': 
                result =  `${month} has 31 days`;
                break;
            case 'April':
            case 'June':
            case 'September': 
                result = `${month} has 30 days`;
                break;
            case 'February':
                result = 'February has 29 days';
            default: 
                result = 'Must provide a valid month';
        }
    }

    switch (month){
        case 'January':
        case 'March':
        case 'May':
        case 'July':
        case 'August':
        case 'October':
        case 'December': 
            result =  `${month} has 31 days`;
            break;
        case 'April':
        case 'June':
        case 'September': 
            result = `${month} has 30 days`;
            break;
        case 'February':
            result = 'February has 28 days';
            break;
        default: 
            result = 'Must provide a valid month';
    }
     
    return result;
}
let leap = true;
console.log(daysOfMonth('February',leap));