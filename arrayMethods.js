// splice: Use for deletion
// syntax: array.splice(startIndex, deleteCount, item1, item2, ...)

// let arr = ["I", "study", "JavaScript"];

// // arr.splice(1, 1); // from index 1 remove 1 element

// arr.splice(2,1) // index 2 remove 1 element

// console.log(arr);

// let arr = ["I", "study", "JavaScript", "right", "now"];

// // now we will remove first 3 elements and replace them with another

// arr.splice(0, 3, "Let's", "dance");

// console.log(arr); // [ "Let's", 'dance', 'right', 'now' ]

// let arr = ["I", "study", "JavaScript", "right", "now"];

// let removed = arr.splice(0, 2); 

// console.log(removed); // "I", "study"
// console.log(arr); // ["Javascript", "right", "now"]

// Till now we have studed how to remove the elements from the array using splice now lets study how to insert it

// To insert the elements without any removals we need to set "deleteCount" to 0

// let arr = ["I", "study", "JavaScript"];

// // from index 2 delete 0 then insert "complex" and "language"

// arr.splice(2, 0, "complex", "language");

// console.log(arr); // ["I", "study", "complex", "language", "JavaScript"];

// Negative indexes are allowed

// let arr = [1, 2, 5];

// // from index -1(one step from the end) delete 0 elements then insert 3 & 4

// arr.splice(-1, 0, 3, 4);

// console.log(arr); // [1, 2, 3, 4, 5]

// slice: The method arr.slice is much simpler than the similar-looking

// syntax: arr.slice([start], [end])

// It returns a new array copying to it all items from index 'start' to 'end' (not including 'end'). Both start and end can be negative, in that case position from array end is assumed

// let arr = ["t", "e", "s", "t"];

// console.log(arr.slice(1, 3)); // ['e', 's']
// console.log(arr.slice(-2)); // ['s', 't']

// concat: The method arr.concat creates a new array that includes values from other arrays and additional items

// syntax: arr.concat(arg1, arg2, ...)

// let arr = [1, 2];

// // create an array from: arr and [3, 4]
// console.log(arr.concat([3, 4])); // 1, 2, 3, 4

// // create an array from: arr and [3, 4] and [5,6]
// console.log(arr.concat([3, 4], [5, 6])); // 1, 2, 3, 4, 5, 6

// // create an array from: arr and [3, 4], then add values 5 and 6
// console.log(arr.concat([3, 4], 5, 6)); // 1, 2, 3, 4, 5, 6

// filter: The find method looks for a single (first) element that makes the function return true, If there may be many, we can use arr.filter(fn).

let users = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"}
]

// returns array of the first two users
let someUsers = users.filter(item => item.id < 3);

console.log(someUsers.length); // 2

