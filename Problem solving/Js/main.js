//! Create a function that takes an array of numbers and return "Boom!"
//! if the digit 7 appears in the array. Otherwise, return "there is no 7 in the array".

// function sevenBoom(numArr) {
//   for (var i = 0; i < numArr.length; i++) {
//     if (numArr[i].toString().includes("7")) {
//       return "Boom!";
//     }
//   }

//   return "there is no 7 in the array";
// }

// function sevenBoom(numArr) {
//   return numArr.join("").includes("7") ? "Boom!" : "there is no 7 in the array";
// }

// function sevenBoom(numArr) {
//   return /7/.test(numArr) ? "Boom!" : "there is no 7 in the array";
// }

// console.log(sevenBoom([1, 2, 3, 4, 5, 6, 7])); // 👉 "Boom!"
// console.log(sevenBoom([8, 6, 33, 100])); // 👉 "there is no 7 in the array"
// console.log(sevenBoom([2, 55, 60, 97, 86])); // 👉 "Boom!"

//! Create a function that takes an array of strings and returns an array
//! with only the strings that have numbers in them. If there are no strings containing
//! numbers, return an empty array.

// function numInStr(strArr) {
//   var result = [];
//   for (var i = 0; i < strArr.length; i++) {
//     var charsArr = strArr[i].split("");
//     for (var j = 0; j < charsArr.length; j++) {
//       if (!isNaN(+charsArr[j]) && charsArr[j] !== " ") {
//         result.push(strArr[i]);
//         break;
//       }
//     }
//   }

//   return result;
// }

// function numInStr(strArr) {
//   var result = [];
//   var regex = /\d/;

//   for (var i = 0; i < strArr.length; i++) {
//     regex.test(strArr[i]) ? result.push(strArr[i]) : null;
//   }

//   return result;
// }

// function numInStr(strArr) {
//   return strArr.filter((str) => /\d/.test(str));
// }

// Examples
// console.log(numInStr(["1a", "a", "2b", "b"])); // ➞ ["1a", "2b"]
// console.log(numInStr(["abc", "abc10"])); // ➞ ["abc10"]
// console.log(numInStr(["abc", "ab10c", "a10bc", "bcd"])); // ➞ ["ab10c", "a10bc"]
// console.log(numInStr(["this is a test", "test1"])); // ➞ ["test1"]

// Write a sum method which will work properly when invoked using either syntax below.

// function sum(x, y) {
//   if (y !== undefined) return x + y;

//   return function (y) {
//     return x + y;
//   };
// }

// console.log(sum(2, 3)); // 👉 5
// console.log(sum(2)(3)); // 👉 5
