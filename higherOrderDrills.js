'use strict';

function repeat(fn, n) {
    for(let i = 1; i <= n; i++) {
        fn();
    }
}

let hello = () => console.log('Hello World');

let goodbye = () => console.log('Goodbye world');

repeat(hello, 1);
repeat(goodbye, 1);


function filter(arr, fn) {
    newArray = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === true) {

        }
    }
}

// DO NOT EDIT BETWEEN THESE LINES, BUT DO READ THE CODE ----->
// First we setup an array of strings we plan to filter:
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// We use your `filter` function here, capturing a new array into `filteredNames`
// comprised of names that only begin with 'R'
const filteredNames = filter(myNames, function(name) {
    // This is known as a "predicate function" - it's a function that 
    // only returns a boolean
    return name[0] === 'R';
});

console.log(filteredNames); // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES
