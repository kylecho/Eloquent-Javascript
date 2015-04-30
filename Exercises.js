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

