'use strict';
function decode(text) {

  let str = text.split(' ');
  for (let i = 0; i <= str.length; i++) {

    if (str.charAt(0) === 'a') {
        return str.charAt(1);
    } else if (str.charAt(0) === 'b') {
        return str.charAt(2);
    } else if (str.charAt(0) === 'c') {
        return str.charAt(3);
    } else if (str.charAt(0) === 'd') {
        return str.charAt(4);
    } else {
        return ' ';
    }
  }


  /*  switch (str[i]) {
    case str.charAt(0) === 'a':
      return str.charAt(1);
      break;
    case str.charAt(0) === 'b':
      return str.charAt(2);
      break;
    case str.charAt(0) === 'c':
      return str.charAt(3);
      break;
    case str.charAt(0) === 'd':
      return str.charAt(4);
      break;
    default:
      return ' ';
    }
  }
} */

decode('craft block argon meter bells brown croon droop');