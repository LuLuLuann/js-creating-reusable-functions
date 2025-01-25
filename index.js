// ALAB 308.5.1: Creating Reusable Functions

// Part 1: Thinking Functionally
console.log("-----------PART 1 ----------------")
// write functions that accomplish the following:
console.log("-----------QUESTION 1 ----------------")
// 1. Take an array of numbers and return the sum.

let num =[33, 55, 65, 76, 32, 98, 109, 432, 256];

function sumOfAllNumbers(arrayName){
    //  needs to be a loop because it loops through the array

    // (foreach loop -- cannot break out of it -- variable to be the total)
let total = 0; 
arrayName.forEach((element)=>{
total += element; // ex: 0+33 -- keeps adding to the total with each loop
}) // takes in a callback function (arrow) and will execute/run the function for each element in the array 
return total; 
};

// calling sumOfAllNumbers();
let results = sumOfAllNumbers(num); // this makes the return value "total" be the "results" 
console.log(`The sum of all these numbers: [${num}] is ${results}.`); 

// 2. Take an array of numbers and return the average.
console.log("-----------QUESTION 2 ----------------")

function avgOfAllNumbers(arrayName){
    let sum = sumOfAllNumbers(arrayName);
    // return results;
    return (sum/arrayName.length).toFixed(2);
};

console.log(`The average of all these numbers: [${num}] is ${avgOfAllNumbers(num)}.`);

// 3. Take an array of strings and return the longest string.
console.log("-----------QUESTION 3 ----------------")

let strings = ["hi", "hello", "howdy", "cheerio", "hey", "yo", "sup"];

function findLongestString(anyArrayName){
    let 
    for (let index = 0; index < anyArrayName.length; index++) {
        console.log(index)
    }
};


// 4. Take an array of strings, and a number and return an array of the strings that are longer than the given number. 
// For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].
console.log("-----------QUESTION 4 ----------------")

function stringsLongerThanN(arrayOfStrings, number){}

// 5. Take a number, n, and print every number between 1 and n without using loops. Use recursion.
console.log("-----------QUESTION 5 ----------------")

function printEveryNumberBetween1AndN(N){
    let current = 1;
    if (current === N){
        console.log(current); 
    }
}

// Part 2: Thinking Methodically
console.log("-----------PART 2 ----------------")
// TASK: Use callback functions alongside Array methods to accomplish the following:
// 1. Sort the array by age.
console.log("-----------QUESTION 1 ----------------")

// 2. Filter the array to remove entries with an age greater than 50.
console.log("-----------QUESTION 2 ----------------")

// 3. Map the array to change the “occupation” key to “job” and increment every age by 1.
console.log("-----------QUESTION 3 ----------------")

// 4. Use the reduce method to calculate the sum of the ages.
// Then use the result to calculate the average age.
console.log("-----------QUESTION 4 ----------------")

// Part 3: Thinking Critically
console.log("-----------PART 3 ----------------")
// It is important to remember that when working with objects in JavaScript, we can either pass those objects into functions by value or by reference. This important distinction changes the way that functions behave, and can have large impacts on the way a program executes.

// TASK: For this section, develop functions that accomplish the following:
// 1. Take an object and increment its age field.
console.log("-----------QUESTION 1 ----------------")

// 2. Take an object, make a copy, and increment the age field of the copy. Return the copy.
console.log("-----------QUESTION 2 ----------------")

// For each of the functions above, if the object does not yet contain an age field, create one and set it to 0. Also, add (or modify, as appropriate) an updated_at field that stores a Date object with the current time.

// Thought experiment: since the Date object is an object, what would happen if we modified it in the copy of the object created in the second function using setTime() or another method? How could we circumvent potentially undesired behavior?





console.log("-----------PART 4+5 ----------------")
// YOU DON'T HAVE TO DO PART 4 + 5
// Part 4: Thinking Practically

// Practical application of these concepts varies greatly in industry, but the core foundations are the same: functions handle repeated, specialized tasks, and methods are functions attached to specific types of objects.

// The Skills-Based Assessment (SBA) for this module will have you work on a real-world example that employs all of the tools you have learned thus far. To prepare for it, revisit your previous work as described below.

// Part 5: Thinking Back

//Once you have completed the tasks outlined above, take any extra time you may have to revisit your previous JavaScript assignments. 
// 1. How many of the scripts could be turned into functions?
// 2. What would the parameters look like? What kind of returns should they have?
// 3. Could you package your code into even smaller blocks, creating helper functions?
// 4. What else could be changed to optimize the code, knowing what you now know?
// Explore, experiment, and experience the magic of reusable code!