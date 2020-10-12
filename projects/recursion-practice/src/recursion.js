// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function(n) {
  if(n < 0){
    //if n is less than 0 than return null
    return null;
  }
  if(n === 0){
    //if n equals 0 than return 1
    return 1;
  }
  //recursive case is n * the function with n - 1 as the param
  return n * factorial(n - 1)
};

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function(array) {
  //if the aray length is equal to 0 return 0 
  if(array.length === 0){
    return 0;
  }
  //if the arrat length is 1 then return the 0 index
  if(array.length === 1){
    return array[0];
  }
  else {
    //else return the array 0 index plus the recursive case
    return array[0] + sum(array.slice(1));
  }
};

// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
  //set sum = 0 for number storage later
  let sum = 0;
  //set loop to check if each index is a nuber
  for(let i = 0; i < array.length; i++){
    if(typeof array[i] === 'number'){
      //if it is a number set sum += each array index value
      sum += array[i];
    }
    else{
      //elese sum += the recursive case
      sum += arraySum(array[i])
    }
  }
  //return sum after the for loop
  return sum;
};

// 4. Check if a number is even.
var isEven = function(n) {
  //set n = Math.abs(n) so that negative numbers will be read as absolutes so we can see if they are 
  n = Math.abs(n);
  if(n === 0){
    //if n equals zero return true
    return true;
  } else if(n === 1){
    // if n = 1 set function to return false
    return false;
  } else if (n >= 2) {
    //if n is greater than or equal then 2, return the recursive case
    return isEven(n - 2);
  }
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  if (n === 0){
    //if n strictly equals zero than return zero
    return 0;
  } else if (n > 0){
    //if n is greater than 0 return n - 1 + the recursive case with n -1 as param
    return n - 1 + sumBelow(n - 1);
  } else if (n < 0){
    //if n is a negative number make n + 1 + the recursive case with n + 1 as param as it needs to me working towards 0
    return n + 1 + sumBelow(n + 1);
  }
};

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function(x, y) {
  //set the base case here for when x + 1 = y or x - 1 = y or x === y to return array literal so we can concat with recursive case later
  if(x + 1 === y || x - 1 === y || x === y){
    return [];
  } else if (x < y){
    //if x is greater than y, return x + 1 in an array concating with the recursive case
    return [x + 1].concat(range(x + 1, y));
  } else if (x > y){
    //if x is greater than y then we are returning x - 1 to concat with the recursive case
    return [x - 1].concat(range(x - 1, y));
  }
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  if (exp === 0){
    //if the exponent is 0 than we return 1
    return 1;
  } else if (exp > 0){
    //if the exponent is greater than 0, return the base multiplied by the recursive case
    return base * exponent(base, exp - 1);
  } else if (exp < 0){
    //esle if the exp is less than zero, you have to divide 1 by the recursive case
    return 1 / exponent(base, (-1 * exp));
  }
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  if (n === 1){
    //if n equals 1 then return true
    return true;
  } else if (n < 1){
    //if n is less than 1 return false
    return false;
  } else {
    //else return the recursive case with n/2 as the param
    //this will recursively divide everything by 2 until it equals 1 and is true or is less than one and is false
    return powerOfTwo(n/2);
  }
};

// 9. Write a function that accepts a string a reverses it.
var reverse = function(string) {
  if(string.length === 0){
    //if the strings length equals zero than return ''
    return "";
  } else {
    //returning the string one character at a time from the last character using recursive case
    return string[string.length - 1] + reverse(string.substring(0, string.length - 1));
  }
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  //setting the string equal to all lower case and replacing space with a string space globally
  string = string.toLowerCase().replace(/ /g, '');
  if (string.length === 0 || string.length === 1){
    //if the string length is 0 or one return true
    return true;
  } else if(string[0] === string[string.length - 1]){
    //if string at zero index equals the string at index string.length -1 then return the recursive case
    return palindrome(string.substring(1, string.length - 1));
    // recursive case in this case use substring to get values between 1 and string.length -1
  } else {
    //else return false
    return false;
  }
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
/*
if y equals zero return NaN bc x divided by zero is not a number
if x euqals zero return ) because whatever y is it will still be zero 
if x is less than zero return the negative of the recursive case by putting - sign before recursive case
*/
var modulo = function(x, y) {
    if (y === 0) {
    return NaN;
  } else if (x === 0) {
  	return 0;
  } else if (x < 0) {
  	return -modulo(-x, y);
  } else if (y < 0) {
  	return modulo(x, -y);
  } else if (x >= y) {
  	return modulo(x - y, y);
  } else {
  	return x;
  }
};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.

//if either of these are 0 then the answer will be zero
//if x is less than zero but y is not, return the recursive case with - in front of it and x negative
//do the same for y if it is negative and x is possitive
//if they are both negative return the recursive case with both x & y as negative
// if y is greter than 1 then you add x plus recursive case with y -1 
var multiply = function(x, y) {
  if (x === 0 || y === 0) {
		return 0;
	} else if (x < 0 && y > 0 ) {
		return -multiply(-x, y);
	} else if (x > 0 && y < 0) {
		return -multiply(x, -y);
	} else if (x < 0 && y < 0) {
		return multiply(-x, -y);
	} else if (y > 1) {
		return x + multiply(x, y - 1)
	} else {
		return x;
	}
};

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.


	  //same reasoning as above question
	  //need to return the recursive case negative with x negative in param
	  //for the both the recrusive case and the y param need to be negative if x is greater than 0 and y is kess
	  //if the are both less than zero then both x and y params need to be negative
	  //this is the actual division part.
	  //else return zero
	  

var divide = function(x, y) {
  if (y === 0) {
		return NaN;
	} else if (x === 0) {
		return 0;
	} if (x < 0 && y > 0) {
		return -divide(-x, y);
	} else if (x > 0 && y < 0) {
		return -divide(x, -y);
	} else if (x < 0 && y < 0) {
		return divide(-x, -y);
	} else if (x >= y) {
		return 1 + divide(x - y, y);
	} else {
		return 0;
	}
};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
  if (x < 0 || y < 0) {
		return null;
		//if either x or y is less than zero return null
	} else if (x === y) {
	  //if x strictly equals y return x or y
		return y;
	} else if (x > y) {
	  //if x is greater than y then return than return the recursive case with x - y as first param
		return gcd(x - y, y);
	} else if (x < y) {
	  // else if.x is less than y then return y - x as second param
		return gcd(x, y - x);
	}
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  if (str1.length === 0 && str2.length === 0) {
    //setting base case to when both strings length equal 0 to return true
		return true;
	} else if (str1[0] === str2[0]) {
	  //if the first index of both strings are the same, return the recursive case and start slicing to check the next
		return compareStr(str1.substring(1), str2.substring(1));
	} else {
	  //if they don't always equal after the slice than return false
		return false;
	}
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str){
  if (str.length === 1) {
    //base case will be when the string length is = to one and the value is index 0 of string
		return [str[0]];
	} else {
	  //recurse through and concat the sliced string into the string[0] that already is in an array
		return [str[0]].concat(createArray(str.substring(1)));
	}
};

// 17. Reverse the order of an array
var reverseArr = function (array) {
  if (array.length === 0) {
    //when base case is reached return an array literal to be concated 
		return [];
	} else {
	  //recursive case concats the array starting from the back so that the array will be reversed
		return [array[array.length - 1]].concat(reverseArr(array.slice(0, array.length - 1)));
	}
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
  if (length === 0) {
    //base case returns array literal when length is equal to zero
		return [];
	} else {
	  //the recursive case will concat the values into each index everytime the length is subtracted by 1
		return [value].concat(buildList(value, length - 1));
	}

};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
  if (array.length === 0) {
    //base case
		return 0;
	} else if (array[0] === value) {
	  //if the 0 index equals the value then add 1
		return 1 + countOccurrence(array.slice(1), value);
	} else {
	  //else return the recursive case
		return countOccurrence(array.slice(1), value);
	}
};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
  if (array.length === 0) {
    //base case
		return [];
	} else {
	  //return the calback inside an array with the array index zero concating with the recursive case
		return [callback(array[0])].concat(rMap(array.slice(1), callback));
	}
};

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key) {
  	var result = 0;
  	//let result equal 0, this is the counter
	for (var item in obj) {
	  //inside the object, if item equals the key, add one to the result
		if (item === key) {
			result++;
		} else if (typeof obj[item] === 'object') {
		  //if the obj key is an object, set result to plus equal the recursive case
			result += countKeysInObj(obj[item], key);
		}
	}
	//return the counter
	return result;
};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
  var result = 0;
  //set counter to result = 0
	for (var item in obj) {
	  //inside the object if the values equal each other than add to the counter
		if (obj[item] === value) {
			result++;
		} else if (typeof obj[item] === 'object') {
		  //if the value is an object then counter plus = the recursive case to keep searching 
			result += countValuesInObj(obj[item], value);
		}
	}
	return result;
	//return the counter
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
  for (var item in obj) {
    //if the item in the object equals the key, change the key name to equal the provided key name
		if (item === key) {
			obj[newKey] = obj[key];
			delete obj[key];
			//delete the old key na,e
		} else if (typeof obj[item] === 'object') {
		  //if the key value is an object than use the recursive case to iterate back through
			replaceKeysInObj(obj[item], key, newKey);
		}
	}
	//return the altered object
	return obj;
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n) {
  if (n <= 0) {
		return null;
	} else if (n === 1) {
	  //created the beginning of the fibonach if n is one
		return [0, 1];
	}
	var arr = fibonacci(n - 1);
	//create array to hold fibonaci results and push those recursed results into this arrat
	arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
	//return the new array
	return arr;
};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
  if (n < 0) {
		return null;
	} else if (n === 0) {
		return 0;
	} else if (n === 1 || n === 2) {
		return 1;
	} else {
	  //recursive case has to be such so that n will be the result of the two values before
		return nthFibo(n - 1) + nthFibo(n - 2);
	}
};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(input) {
  if (input.length === 0) {
    //base case, return array literal to be concated
		return [];
	} else {
	  //recursive case cancats all the uppercase values that are sliced into array
		return [input[0].toUpperCase()].concat(capitalizeWords(input.slice(1)));
	}
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array) {
  if (array.length === 0) {
		return [];
	} else {
		var word = array[0];
		//set variable word equal to array at index 0
		var capitalized = word[0].toUpperCase() + word.substring(1);
		//set vapitalized to the word at index zero upercased plus the rest of the word after substring910
		return [capitalized].concat(capitalizeFirst(array.slice(1)));
		//returning the capitalized concated with the lowercase substring characters
	}
};

// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
  var result = 0;
	for (var item in obj) {
	  //check in the object to see if the number is even 
		if (obj[item] % 2 === 0) {
		  //if it is even then add to the result counter
			result += obj[item];
		} else if (typeof obj[item] === 'object') {
		  // if its an object then plus equal to the recursive case
			result += nestedEvenSum(obj[item]);
		}
	}
	//return the result
	return result;
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {
  	if (arrays.length === 0) {
		return [];
	} else if (Array.isArray(arrays[0])) {
	  //if the array is an array than return the recursive case to go inside the array
		return flatten(arrays[0]).concat(flatten(arrays.slice(1)));
	} else {
	  //if it is not an array than concat the recursive case to the array
		return [arrays[0]].concat(flatten(arrays.slice(1)));
	}
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function(str, obj = {}) {
  if (str.length === 0) {
    //base case to return obj once str.length is 0
		return obj;
	} else if (obj[str[0]]) {
	  //if the obj[str[0]] exists, then add one
		obj[str[0]]++;
	} else {
	  //if it doesn't exist set it equal to 1
		obj[str[0]] = 1;
	}
	//return the recursive case with string.substring(1) as the first param
	return letterTally(str.substring(1), obj);
};

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list) {
  if (list.length <= 1) {
    //when the lists length is lessthan equl to one, return the list
		return list;
	} else if (list[0] === list[1]) {
	  //checks each 1 index to see if it equals the 0 index. if it does it slices off the number using the recursive case
		return compress(list.slice(1));
	} else {
	  //if it doesn't equal the index than it concats that number in the list array and then uses the recursive case to look for the next number
		return [list[0]].concat(compress(list.slice(1)));
	}
};

// 32. Augment every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
  if (array.length === 0) {
    //base case
		return [];
	} else {
	  //return the array zero index concating with the augmented array and then concat that full array with the recursice case
		return [array[0].concat([aug])].concat(augmentElements(array.slice(1), aug));
	}
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
  if (array.length <= 1) {
    //once the array length is equal or less than 1 then return array
		return array;
		//if index 0 or 1 is equal to zero then return the recruseive case that slices the 0 index
	} else if (array[0] === 0 && array[1] === 0) {
		return minimizeZeroes(array.slice(1));
	} else {
	  //else concat the value if it the 0 or 1 index is another number besides zero
		return [array[0]].concat(minimizeZeroes(array.slice(1)));
	}
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
  if (array.length === 0) { 
    //base case
    return array;
  }
  if(array[0] < 0) { 
    // if the 0 index is less than 0 then change the sign to negative
    array[0] = -array[0];
  }
  if(array[1] > 0) { 
    //if the 1 index is greater than 0 then change that index to negative
    array[1] = -array[1]; 
  }
  //return the concated two indexes to an array and have the recursive case slice 2 at a time
  return [array[0], array[1]].concat(alternateSign(array.slice(2)));
};

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
  //create the nums variable so that it can be minipulated easily for the digits to equal their word equivalent
  var nums = {
		'1': 'one',
		'2': 'two',
		'3': 'three',
		'4': 'four',
		'5': 'five',
		'6': 'six',
		'7': 'seven',
		'8': 'eight',
		'9': 'nine'
	};
	if (str.length === 0) {
	  //base case returning a string literal if the string lenght is 0
		return '';
	} else if (nums[str[0]]) {
	  // if nums[str[0]] exists return the addition of it with the recursive case that uses substring for the remaining characters
		return nums[str[0]] + numToText(str.substring(1));
	} else {
	  // if thring length is not zero and nums[str[0]] does not exist then return string index 0 plus the recursive case
		return str[0] + numToText(str.substring(1));
	}
};

// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
};



//-----------------------------------
// DON'T REMOVE THIS CODE -----------
//-----------------------------------

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {

  /**
   * Due to some node-related issues with spying on recursive functions,
   * it isn't possible to test them with sinon spies like so:
   *
   *   var originalSum = sum;
   *   sum = sinon.spy(sum);
   *
   *   sum([1, 2, 3, 4, 5, 6]);
   *
   *   // callCount will always 1 causing, this test to always fail in node :(
   *   expect(sum.callCount).to.be.above(1);
   *
   *   sum = originalSum;
   *
   * However, we can work around this by using proxies!
   * If you reassign the function to a proxy and use the `apply` trap,
   * you can make a `proxyCallCount` property on the function,
   * increment it each time it's called, and then test that instead.
   *
   *   sum.proxyCallCount = 0;
   *   sum([1, 2, 3, 4, 5, 6]);
   *   expect(sum.proxyCallCount).to.be.above(1);
   *
   * MDN Proxies: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
   * MDN Proxy Apply Trap: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply
   */
  const createSpyProxy = (func) => {
    func.toString = func.toString.bind(func);

    const recursiveFunctionCallCounterHandler = {
      apply(target, thisArg, args) {
        target.proxyCallCount = target.proxyCallCount ? target.proxyCallCount + 1 : 1;
        return target.apply(thisArg, args);
      },
    };

    return new Proxy(func, recursiveFunctionCallCounterHandler);
  };

  factorial = createSpyProxy(factorial);
  sum = createSpyProxy(sum);
  arraySum = createSpyProxy(arraySum);
  isEven = createSpyProxy(isEven);
  sumBelow = createSpyProxy(sumBelow);
  range = createSpyProxy(range);
  exponent = createSpyProxy(exponent);
  powerOfTwo = createSpyProxy(powerOfTwo);
  reverse = createSpyProxy(reverse);
  palindrome = createSpyProxy(palindrome);
  modulo = createSpyProxy(modulo);
  multiply = createSpyProxy(multiply);
  divide = createSpyProxy(divide);
  gcd = createSpyProxy(gcd);
  compareStr = createSpyProxy(compareStr);
  createArray = createSpyProxy(createArray);
  reverseArr = createSpyProxy(reverseArr);
  buildList = createSpyProxy(buildList);
  countOccurrence = createSpyProxy(countOccurrence);
  rMap = createSpyProxy(rMap);
  countKeysInObj = createSpyProxy(countKeysInObj);
  countValuesInObj = createSpyProxy(countValuesInObj);
  replaceKeysInObj = createSpyProxy(replaceKeysInObj);
  fibonacci = createSpyProxy(fibonacci);
  nthFibo = createSpyProxy(nthFibo);
  capitalizeWords = createSpyProxy(capitalizeWords);
  capitalizeFirst = createSpyProxy(capitalizeFirst);
  nestedEvenSum = createSpyProxy(nestedEvenSum);
  flatten = createSpyProxy(flatten);
  letterTally = createSpyProxy(letterTally);
  compress = createSpyProxy(compress);
  augmentElements = createSpyProxy(augmentElements);
  minimizeZeroes = createSpyProxy(minimizeZeroes);
  alternateSign = createSpyProxy(alternateSign);
  numToText = createSpyProxy(numToText);
  tagCount = createSpyProxy(tagCount);
  binarySearch = createSpyProxy(binarySearch);
  mergeSort = createSpyProxy(mergeSort);

  module.exports = {
    factorial,
    sum,
    arraySum,
    isEven,
    sumBelow,
    range,
    exponent,
    powerOfTwo,
    reverse,
    palindrome,
    modulo,
    multiply,
    divide,
    gcd,
    compareStr,
    createArray,
    reverseArr,
    buildList,
    countOccurrence,
    rMap,
    countKeysInObj,
    countValuesInObj,
    replaceKeysInObj,
    fibonacci,
    nthFibo,
    capitalizeWords,
    capitalizeFirst,
    nestedEvenSum,
    flatten,
    letterTally,
    compress,
    augmentElements,
    minimizeZeroes,
    alternateSign,
    numToText,
    tagCount,
    binarySearch,
    mergeSort,
  };
}

//-----------------------------------
