// // Why we use Arrays as we have objects?
// // Ans: Objects are not convenient to use an object for ordered collection, because it provides no methods to manage the order of elements. We can insert a new property "between" the existing ones

// // Arrays: To store ordered collections

// // Lets see the syntax of Array
// // Declaration:
// // There are two syntaxes for creating an empty array

// let arr = new Array();
// let arr1 = []; // most used syntax

// let fruits = ["Apple", "Orange", "Plum"];
// // Array elements are numbered starting with zero

// console.log(fruits[1]); // Orange
// console.log(fruits[0]); // Apple
// console.log(fruits[2]); // Plum

// // Lets replace "Plum" with "Pear"

// fruits[2] = "Pear";
// console.log(fruits[2]); // Pear

// // Or add new fruit

// fruits[3] = "Lemon";

// console.log(fruits); // [ 'Apple', 'Orange', 'Pear', 'Lemon' ]

// // Lets find the total count of elements in the array

// console.log(fruits.length); // 4

// // An array can store elements of any type

// let arr2 = ['Apple', {name: 'John'}, true, function() {console.log('Hello');}];

// // get the object at index 1 and then show its name
// console.log(arr2[1].name); // John

// // get the function at index 3 and run it
// arr2[3](); // Hello

// // Trailing Comma Syntax

// let fru = [
//     "Apple",
//     "Orange",
//     "Plum",
// ]

// // Get last elements

// console.log(fruits[fruits.length - 1]); // Lemon

// // Using shorter syntax using at
// console.log(fruits.at(-1)); // Lemon

// Lets study the methods pop/push, shift/unshift

// Methods that work with the end of the array
// pop

// let fruits = ["Apple", "Orange", "Pear"];

// console.log(fruits.pop()); // remove "Pear" and log it

// console.log(fruits);

// push

// let fruits = ["Apple", "Orange"];

// fruits.push("Pear");

// console.log(fruits); // Apple, Orange, Pear

// Methods that work with the beginning of the array

// 1) shift

// let fruits = ["Apple", "Orange", "Pear"];

// console.log(fruits.shift()); // remove Apple and log it

// console.log(fruits);

// 2) unshift

// let fruits = ["Orange", "Pear"];

// fruits.unshift("Apple");

// console.log(fruits); // Apple, Orange, Pear

// Methods push and unshift can add multiple elements at once

// let fruits = ["Apple"];

// fruits.push("Orange", "Peach");
// fruits.unshift("Pineapple", "Lemon");

// console.log(fruits); // [ 'Pineapple', 'Lemon', 'Apple', 'Orange', 'Peach' ]

// Loops

// One of the oldest ways to cycle array items is the for loop

// let arr = ["Apple", "Orange", "Pear"];

// for(let i = 0; i < arr.length; i++) {
//     // console.log(arr[i]);
// }

// // Using for..of

// let fruits = ["Apple", "Orange", "Plum"];

// for(let fruit of fruits) {
//     console.log(fruit);
// }

// // Multidimensional arrays

// let matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]

// console.log(matrix[0][1]); // 2 explanation: 0th row and first column

// toString

// Arrays have their own implementation of "toString" method that returns a comma-separated list of elements

let arr = [1, 2, 3];

console.log(arr); // [1, 2, 3]

console.log(String(arr) === "1, 2, 3"); // false
