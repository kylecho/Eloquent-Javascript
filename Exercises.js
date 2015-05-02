// EloquentJavaScript Solution to Exercises

// Chapter 2: Program Structure
/**
 * 1. Looping a triangle
 * 
 * Write a loop that makes seven calls to console.log to output the following triangle:
 * 
 * #
 * ##
 * ###
 * ####
 * #####
 * ######
 * #######
 */

function loopAtriangle(numRows) {
  var result = '';
  var block = '#';
  for (var i = 0, j = numRows; i < j; i++) {
    result += block + '\n';
    block += '#';
  }
  console.log(result);
}
loopAtriangle(7);

/**
 * 2. FizzBuzz
 * 
 * Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions.
 * For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and
 * not 3), print "Buzz" instead. When you have that working, modify your program to print "FizzBuzz",
 * for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible
 * by only one of those).
 */

function fizzBuzz(num) {
  for (i = 1, j = num; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
}

fizzBuzz(100);

/**
 * 3. Chess Board
 * Write a program that creates a string that represents an 8×8 grid, using newline characters to separate
 * lines. At each position of the grid there is either a space or a “#” character. The characters should
 * form a chess board.
 *
 * Passing this string to console.log should show something like this:
 * 
 *  # # # #
 * # # # #
 *  # # # #
 * # # # #
 *  # # # #
 * # # # #
 *  # # # #
 * # # # #
 *
 * When you have a program that generates this pattern, define a variable size = 8 and change the program
 * so that it works for any size, outputting a grid of the given width and height.
 */

function drawChessBoard(width, height) {
  var board = '';
  var evenRow = '';
  var oddRow = '';
  for (var i = 0; i < width; i++) {
    if (i % 2 === 0) {
      evenRow += ' ';
      oddRow += '#';
    } else {
      evenRow += '#';
      oddRow += ' ';
    }
  }
  for (var j = 0; j < height; j++) {
    if (j % 2 === 1) {
      board += oddRow + '\n';
    } else {
      board += evenRow + '\n';
    }
  }
  console.log(board);
}

drawChessBoard(8,8);

====================================================================================================
// Chapter 3: Functions
/**
 * 1. Minimum
 * The previous chapter introduced the standard function Math.min that returns its smallest argument. 
 * We can do that ourselves now. Write a function min that takes two arguments and returns their
 * minimum.
 */

function min(num1, num2) {
	return (num1 < num2) ? num1 : num2;
}

// console.log(min(0, 10));
// -> 0
// console.log(min(0, -10));
// -> -10

/**
 * 2. Recursion
 * We’ve seen that % (the remainder operator) can be used to test whether a number is even or odd by 
 * using % 2 to check whether it’s divisible by two. Here’s another way to define whether a positive 
 * whole number is even or odd:
 *
 * Zero is even.
 * One is odd.
 * For any other number N, its evenness is the same as N - 2.
 * 
 * Define a recursive function isEven corresponding to this description. The function should accept a
 * number parameter and return a Boolean. Test it on 50 and 75. See how it behaves on -1. Why? Can you
 * think of a way to fix this?
 */

function isEven(n) {
	if (n === 0) {
		return true;
	} else if (n === 1) {
		return false;
	} else {
		return isEven(n-2);
	}
}

// console.log(isEven(50));
// -> true
// console.log(isEven(75));
// -> false
// console.log(isEven(-1));
// -> RangeError: Maximum call stack size exceeded

// Fixed version:
function isEven(n) {
  if (n < 0) {
    return false;
  } else if (n === 0) {
    return true;
  } else if (n === 1) {
    return false;
  } else {
    return isEven(n-2);
  }
}

/**
 * 3. Bean counting
 * You can get the Nth character, or letter, from a string by writing "string".charAt(N), similar to 
 * how you get its length with "s".length. The returned value will be a string containing only one 
 * character (for example, "b"). The first character has position zero, which causes the last one to
 * be found at position string.length - 1. In other words, a two-character string has length 2, and
 * its characters have positions 0 and 1.
 *
 * Write a function countBs that takes a string as its only argument and returns a number that indicates
 * how many uppercase “B” characters are in the string.
 *
 * Next, write a function called countChar that behaves like countBs, except it takes a second argument
 * that indicates the character that is to be counted (rather than counting only uppercase “B” characters).
 * Rewrite countBs to make use of this new function.
 */

// short version (using regular expression)
function countBs(str) {
  return str.match(/B/g).length;
}

// long version
function countBs(str) {
  var count = 0;
  var myArr = str.split('');
  for (var i = 0, j = myArr.length; i < j; i++) {
    if (myArr[i] === 'B') {
      count++;
    }
  }
  return count;
}

function countChar(str, char) {
  var count = 0;
  var myArr = str.split('');
  for (var i = 0, j = myArr.length; i < j; i++) {
    if (myArr[i] === char) {
      count++;
    }
  }
  return count;
}

// console.log(countBs("BBC"));
// → 2
// console.log(countChar("kakkerlak", "k"));
// → 4

====================================================================================================
// Chapter 4: Data Structures: Objects and Arrays

// The sum of a range

// range
// pseudocode
method range(start, end):
  SET a variable result with an empty array
  FOR numbers from start to end
    SAVE each number to result
    Add one to start
      Repeat this until start equals end
  OUTPUT result
END program

// real code
function range(start, end) {
  var result = [];
  for (i = start; i <= end; i++) {
    result.push(i);
  }
  return result;
}

// sum
// pseudocode
method sum(array):
  SET a variable called temp with 0
  FOR each elements in the array
    ADD it to temp
    REPEAT this process until all elements are added to temp
  OUTPUT temp
END program

// real code
function sum(array) {
  var temp = 0;
  for (var i = 0; i < array.length; i++) {
    temp += array[i];
  }
  return temp;
}

// modify range
// pseudocode
method range(start, end, step):
  SET a variable named result with an empty array
  IF start is less than end THEN:
    FOR numbers from start to end
      ADD each number to result
      INCREMENT the counter by step
      REPEAT this until end is added to result
  ELSE
    FOR numbers from start to end
      ADD each number to result
      DECREMENT the counter by step
      REPEAT this until end is added to result
  ENDIF
  OUTPUT result
END program

// real code
function range(start, end, step) {
  var result = [];
  if (start < end) {
    for (var i = start; i <= end; i += step) {
      result.push(i);
    }
  } else {
    for (var j = start; j >= end; j += step) {
      result.push(j);
    }
  }
  return result;
}

// Reversing an Array

// reverseArray
// pseudocode
method reverseArray(array):
  SET a variable named result with an empty array
  FOR each element in the array starting from the last index until the first index:
    ADD each element to result
    DECREMENT the counter by one
    REPEAT this process
  OUTPUT result
END program

// real code
function reverseArray(array) {
  var result = [];
  for (var i = array.length - 1; i >= 0; i--) {
    result.push(array[i]);
  }
  return result;
}

// reverseArrayInPlace
// pseudocode
method reverseArrayInPlace(array):
  FIND the number of the array length divided by two and set it to a variable max
  SET a variable named tempLeft with no value
  SET a variable named tempRight with no value
  SET a variable named counter with a number 0
    FOR element from the index 0 to max:
      SET tempLeft equals array value of the current index
      SET tempRight equals array value of the last index minus counter
      SET array value of the current index equals to tempRight
      SET array value of the last index minus counter equals to tempLeft
      INCREMENT one to counter
  OUTPUT program
END program

// real code
function reverseArrayInPlace(array) {
  var max = Math.floor(array.length / 2);
  var tempLeft;
  var tempRight;
  var counter = 0;
  for (var i = 0; i < max; i++) {
    tempLeft = array[i];
    tempRight = array[(array.length - 1) - counter];
    array[i] = tempRight;
    array[(array.length - 1) - counter] = tempLeft;
    counter++;
  }
  return array;
}
/**
// A list
// arrayToList
// pseudocode
method arrayToList(array):
  SET a variable named list with an empty object
  SET a variable named recursion to have a method with array as a parameter:  
      IF one next to the current element exists in the array THEN
        SET list object with a property named 'value: ' equals the value of the array with the current index
        SET list object with a property named 'rest: ' equals recursion
      ELSE
        SET list object with a property named 'value: ' equals the value of the array with the current index
        SET list object with a property named 'rest: ' equals null
  FOR each element in the array:
    CALL recursion with array
  OUTPUT list
END program

function arrayToList(array) {
  var list = {};
  var recursion = function(array) {
    if (array.indexOf(array[i + 1]) == -1) {
      list['value: '] = array[i];
      list['rest: '] = null;
    } else {
      list['value: '] = array[i];
      list['rest: '] = recursion(array);
    }
  }

  for (var i = 0; i < array.length; i++) {
    recursion(array);
  }

  return list;
}

function arrayToList(array) {
  var list = null;
  for (var i = array.length - 1; i >= 0; i--) {
    list = {value: array[i], rest: list};
    return list;
  }
}

// listToArray
// prepend
// nth
*/

// A list
function arrayToList(array) {
  var list = null;
  for (var i = array.length - 1; i >= 0; i--)
    list = {value: array[i], rest: list};
  return list;
}

function listToArray(list) {
  var array = [];
  for (var node = list; node; node = node.rest)
    array.push(node.value);
  return array;
}

function prepend(value, list) {
  return {value: value, rest: list};
}

function nth(list, n) {
  if (!list)
    return undefined;
  else if (n == 0)
    return list.value;
  else
    return nth(list.rest, n - 1);
}


// Deep comparison
var obj = {here: {is: 'an'}, object: 2};

function deepEqual(a, b) {
  if (a === b) return true;

  if (a == null || typeof a != 'object' ||
      b == null || typeof b != 'object')
    return false;

  var propsInA = 0, propsInB = 0;

  for (var prop in a)
    propsInA += 1;

  for (var prop in b) {
    propsInB += 1;
    if (!(prop in a) || !deepEqual(a[prop], b[prop]))
      return false;
  }

  return propsInA == propsInB;
}

