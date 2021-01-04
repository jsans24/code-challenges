// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3

// Requirements:

//     There must be a function for each number from 0 ("zero") to 9 ("nine")
//     There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby and Python)
//     Each calculation consist of exactly one operation and two numbers
//     The most outer function represents the left operand, the most inner function represents the right operand
//     Division should be integer division. For example, this should return 2, not 2.666666...:

// eight(dividedBy(three()));

// function expression(number, operation){
// 	if(!operation)
// 		return number;
// 	return operation(number);
// }

// function zero(operation) { return expression(0, operation); }
// function one(operation) { return expression(1, operation); }
// function two(operation) { return expression(2, operation); }
// function three(operation) { return expression(3, operation); }
// function four(operation) { return expression(4, operation); }
// function five(operation) { return expression(5, operation); }
// function six(operation) { return expression(6, operation); }
// function seven(operation) { return expression(7, operation); }
// function eight(operation) { return expression(8, operation); }
// function nine(operation) { return expression(9, operation); }

// function plus(x) {
// 	return function(y) {
// 		return y + x;
// 	}
// }
// function minus(x) {
// 	return function(y) {
// 		return y - x;
// 	}
// }
// function times(x) {
// 	return function(y) {
// 		return y * x;
// 	}
// }
// function dividedBy(x) {
// 	return function(y) {
// 		return y / x;
// 	}
// }

// Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.

// For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

// As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

// If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.

function firstNonRepeatingLetter(s) {
    let low = s.toLowerCase()
    for (let i = 0; i < low.length; i++) {
        let letter = low[i];
        let count = 0;
        low.split('').forEach(unit => {
            if (letter == unit) count += 1
        });
        if (count === 1) return s[i];
    }
    return ""
}

console.log(firstNonRepeatingLetter(""));
