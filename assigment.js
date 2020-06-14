// 1.1 Given an array of integers, find the largest product yielded from three of the integers

var unsortedArray = [-10, 7, 29, 30, 5, -10, -70];

const computeProduct = (unsortedArray) => {
  let maxProduct = 0;
  for (let i = 0; i < unsortedArray.length - 2; i++) {
    for (let j = i + 1; j < unsortedArray.length - 1; j++) {
      for (let k = j + 1; k < unsortedArray.length; k++) {
        let product = unsortedArray[i] * unsortedArray[j] * unsortedArray[k];
        if (product > maxProduct) {
          maxProduct = product;
        }
      }
    }
  }
  return maxProduct;
}

console.log(computeProduct(unsortedArray));

//  1.2 Being told that an unsorted array contains (n - 1) of n consecutive numbers (where the bounds are defined), find the missing number in O(n) time

var arrayOfIntegers = [2, 5, 1, 4, 9, 6, 3, 7];
var upperBound = 9;
var lowerBound = 1;

function getMissingNumber(arrayOfIntegers) {
  if (arrayOfIntegers[0] !== 1)
    return 1;

  for (var i = 1; i < arrayOfIntegers.length; i++) {
    if (arrayOfIntegers[i] - arrayOfIntegers[i - 1] > 1)
      return arrayOfIntegers[i] - 1;
  }

  return -1;
}

console.log(getMissingNumber(arrayOfIntegers));

//1.3 Removing duplicates of an array and returning an array of only unique elements

var array = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];

function removeDuplicates(array) {
  return array.filter((a, b) => array.indexOf(a) === b)
};

console.log(removeDuplicates(array));

//1.4 Given an array of integers, find the largest difference between two elements such that the element of lesser value must come before the greater element

var array = [7, 8, 4, 9, 9, 15, 3, 1, 10];
let largestdifference = (array) => {

  sortedarray = array.sort();
  return sortedarray[sortedarray.length - 1] - sortedarray[0]

}

console.log(findLargestDifference(array));

//1.6 Find the intersection of two arrays. An intersection would be the common elements that exists within both arrays. In this case, these elements should be unique!
var firstArray = [2, 2, 4, 1];
var secondArray = [1, 2, 0, 2];

var common = firstArray.filter(x => secondArray.indexOf(x) !== -1)
console.log("The common elements are: " + common);

//2.1 Given a string, reverse each word in the sentence "Welcome to this Javascript Guide!" should be become "emocleW ot siht tpircsavaJ !ediuG"
var string = "Welcome to this Javascript Guide!";

function reverseString(string) {
  var newString = "";
  for (var i = string.length - 1; i >= 0; i--) {
    newString += string[i];
  }
  return newString;
}
console.log(reverseString(string));

//2.2 Given two strings, return true if they are anagrams of one another "Mary" is an anagram of "Army"

var firstWord = "Mary";
var secondWord = "Army";

var result1 = firstWord.toLowerCase().split("").sort().join("");
var result1 = secondWord.toLowerCase().split("").sort().join("");

console.log(result1 === result1);

//2.3 Check if a given string is a palindrome "racecar" is a palindrome. "race car" should also be considered a palindrome. Case sensitivity should be taken into account
// isPalindrome("racecar"); // true
// isPalindrome("race Car"); // true

function isPalindrome(str) {
  var re = /[^A-Za-z0-9]/g;
  str = str.toLowerCase().replace(re, '');
  var len = str.length;
  for (var i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }
  return true;
}

console.log(isPalindrome("racecar"));
console.log(isPalindrome("race Car"));



// 2.4 Check if a given string is a isomorphic

function isIsomorphic(str1, str2) {

  var len1 = str1.length;

  if (len1 != str2.length) {
    console.log('Both strings have different lenghts');
    return false;
  }

  var chMap = {};

  for (var i = 0; i < len1; i++) {

    if (!chMap[str1[i]]) {
      chMap[str1[i]] = str2[i];

    } else if (chMap[str1[i]] !== str2[i]) {
      console.log('Both strings differ in maaping at index ' + i);
      return false;
    }
  }
  return true;
}

console.log(isIsomorphic("egg", 'add')); // true
console.log(isIsomorphic("paper", 'title')); // true
console.log(isIsomorphic("kick", 'side')); // false


//3.1 Implement enqueue and dequeue using only two stacks
var inputStack = []; // First stack
var outputStack = []; // Second stack

// implement enqueue method by using only stacks
// and the push and pop functions
function Enqueue(element) {
  Stack1.push(element);
}

// implement dequeue method by pushing all elements
// from stack 1 into stack 2, which reverses the order
// and then popping from stack 2
function Dequeue() {
  if (outputStack.length === 0) {
    if (inputStack.length === 0) {
      return 'Cannot dequeue because queue is empty';
    }
    while (inputStack.length > 0) {
      var p = inputStack.pop();
      outputStack.push(p);
    }
  }
  return outputStack.pop();
}

console.log(Enqueue('a'));
console.log(Enqueue('b'));
console.log(Enqueue('c'));
console.log(Dequeue());