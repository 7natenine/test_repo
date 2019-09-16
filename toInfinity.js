'use strict';
function  beyond(num){
	if(num ===  Number.POSITIVE_INFINITY || num ===  Number.NEGATIVE_INFINITY ){
    console.log('And beyond');
	}

	else if(num === Number.isFinite && num >= 0){
		console.log('To infinity');
	}

	else if(num === Number.isFinite && num < 0){
		console.log('To infinity');
	}

	else if(num === 0){
		console.log('Staying home');
	}

	else{
		console.log(num);
	}

}

beyond(Number.isFinite);
