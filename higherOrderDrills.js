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
    let newArray = [];
    for(let i = 0; i < arr.length; i++) {
        if(fn(arr[i]) === true) {
            newArray.push(arr[i]);
        }
    }
    return newArray;
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


// Functions as return values

function hazardWarningCreator(typeOfWarning) {
    let warningCounter = 0;
        return (location => {
            warningCounter++;
            console.log(`DANGER! There is a  ${typeOfWarning} hazard at ${location}!`);
            console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time(s) today!`);
        })
}

const rocksWarning = hazardWarningCreator('Rocks on the Road');
const typhoonWarning = hazardWarningCreator('Typhoon');
const tornadoWarning = hazardWarningCreator('Tornado');

rocksWarning('High Pass');
typhoonWarning('South Beach');
tornadoWarning('Kansas');
tornadoWarning('Oz');

// forEach, filter and map
// use filter to remove any items that move right or down in an array

let turtleMovements = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];
const filter1 = turtleMovements.filter(turtleMovement => turtleMovement[0] >= 0 && turtleMovement[1] >= 0);

console.log(filter1);
//console.log(JSON.stringify(filter1, null, 2));

let totalSteps = filter1.map(step => step[0] + step[1]);

totalSteps.forEach((step, index) => console.log(`Movement #${index}: ${step} step`));
