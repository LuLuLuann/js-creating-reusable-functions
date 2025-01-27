// ALAB 308.5.1: Creating Reusable Functions

// Part 1: Thinking Functionally
console.log("-----------PART 1 ----------------")
// write functions that accomplish the following:
console.log("-----------QUESTION 1 ----------------")
// 1. Take an array of numbers and return the sum.

let nums = [33, 55, 65, 76, 32, 98, 109, 432, 256];

function sumOfAllNumbers(arrayName) {
    //  needs to be a loop because it loops through the array

    // (foreach loop -- cannot break out of it -- variable to be the total)
    let total = 0;
    arrayName.forEach((element) => {
        total += element; // ex: 0+33 -- keeps adding to the total with each loop
    }); // takes in a callback function (arrow) and will execute/run the function for each element in the array 
    return total;
};

// calling sumOfAllNumbers();
let results = sumOfAllNumbers(nums); // this makes the return value "total" be the "results" 
console.log(`The sum of all these numbers: [${nums}] is ${results}.`);

// 2. Take an array of numbers and return the average.
console.log("-----------QUESTION 2 ----------------")

function avgOfAllNumbers(arrayName) {
    let sum = sumOfAllNumbers(arrayName);
    // return results;
    return (sum / arrayName.length).toFixed(2);
};

let average = avgOfAllNumbers(nums);

console.log(`The average of all these numbers: [${nums}] is ${average}.`);

// 3. Take an array of strings and return the longest string.
console.log("-----------QUESTION 3 ----------------")

let strings = ["hi", "hello", "howdy", "cheerio", "hey", "yo", "sup"];

function findLongestString(anyArrayName) {
    let longestString = "";
    for (let index = 0; index < anyArrayName.length; index++) {
        if (anyArrayName[index].length > longestString.length) {
            longestString = anyArrayName[index];
        }
    }
    return longestString;
};
console.log(findLongestString(strings));

// 4. Take an array of strings, and a number and return an array of the strings that are longer than the given number. 
// For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].
console.log("-----------QUESTION 4 ----------------")

function stringsLongerThanN(arrayOfStrings, number) {
    const result = arrayOfStrings.filter((word) => word.length > number);
    console.log(result);
}
// The filter() method of Array instances creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.

stringsLongerThanN(strings, 3)
// 5. Take a number, n, and print every number between 1 and n without using loops. Use recursion.
console.log("-----------QUESTION 5 ----------------")

function printEveryNumberBetween1AndN(N) {
    for (let i = 1; i < N; i++) {
        if (i > 1) {
            console.log(i);
            continue;
        }
    }
}
printEveryNumberBetween1AndN(9);

// Part 2: Thinking Methodically
console.log("-----------PART 2 ----------------")
let data = [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
{ id: "48", name: "Barry", occupation: "Runner", age: "25" },
{ id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
{ id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
{ id: "7", name: "Bilbo", occupation: "None", age: "111" }]

// TASK: Use callback functions alongside Array methods to accomplish the following:

console.log("-----------QUESTION 1 ----------------")
// 1. Sort the array by age.
function sortNestedArrayByAge(arrayName, keyNameInArrayInQuotationMarks) {
    // need to use "[]" notation not "." notation
    // "a.age" and "b.age" would work together but if you don't know what the element name is going to be, you should use the brackets. 
    // "." would look for an element with that exact name

    //parseInt() - parses a string and converts it into an integer.
    arrayName.sort((a, b) => parseInt(a[keyNameInArrayInQuotationMarks]) - parseInt(b[keyNameInArrayInQuotationMarks]));
    console.log(arrayName);
}
// age will come back undefined
//pass the key name as a string in quotation marks " "
sortNestedArrayByAge(data, "age");


// 2. Filter the array to remove entries with an age greater than 50.
console.log("-----------QUESTION 2 ----------------")
function removeEntriesForAgeMoreThan50InNestedArray(arrayName) {

    let result = arrayName.filter((entry) => parseInt(entry.age) <= 50);
    console.log(result);
}

removeEntriesForAgeMoreThan50InNestedArray(data);


// 3. Map the array to change the “occupation” key to “job” and increment every age by 1.
console.log("-----------QUESTION 3 ----------------")
function renameKey(arrayName, oldKeyName, newKeyName) {
    return arrayName.map(item => {
        // add new key with old key's value
        item[newKeyName] = item[oldKeyName];
        // delete old key
        delete item[oldKeyName];
        // return modified object
        return item;
    });
}

renameKey(data, "occupation", "job");
console.log(data);


// 4. Use the reduce method to calculate the sum of the ages.
// Then use the result to calculate the average age.
console.log("-----------QUESTION 4 ----------------")
function averageAge(arrayName) {
    // Check for empty array
    if (arrayName.length === 0) {
        console.log("The array is empty. Average age cannot be calculated.");
        return;
    }

    // Calculates the sum.
    const sumOfAges = arrayName.reduce((sum, person) => sum + parseInt(person.age), 0);

    // Calculates the average age.
    const averageAge = sumOfAges / arrayName.length;

    console.log("Sum of Ages: " + sumOfAges);
    console.log("Average Age: " + averageAge);
}

averageAge(data);

// Part 3: Thinking Critically
console.log("-----------PART 3 ----------------")
// It is important to remember that when working with objects in JavaScript, we can either pass those objects into functions by value or by reference. This important distinction changes the way that functions behave, and can have large impacts on the way a program executes.

// TASK: For this section, develop functions that accomplish the following:
// 1. Take an object and increment its age field.
console.log("-----------QUESTION 1 ----------------")
function incrementAge(person) {
    // Checks if "age" exists and is a number
    if (person.hasOwnProperty('age') && !isNaN(person.age)) {
        person.age += 1; // Increments the age by 1
    } else {
        console.log("Invalid 'age' property or not a number.");
    }
}

let person = { name: "Bruce", occupation: "Knight", age: 41 };
console.log("Before incrementing:", person);

// Increments the age
incrementAge(person);
console.log("After incrementing:", person);

// 2. Take an object, make a copy, and increment the age field of the copy. Return the copy.
console.log("-----------QUESTION 2 ----------------")

function copyAndIncrementAge(obj) {
    let copy = { ...obj };
    if (!copy.age) {
      copy.age = 0;
    }
    copy.age += 1;
    copy.updated_at = new Date();
    return copy;
  }
  
  // Example usage
  let anotherPerson = { name: "George", occupation: "Brown" };
  let updatedPerson = copyAndIncrementAge(anotherPerson);
  console.log(updatedPerson);
  
// For each of the functions above, if the object does not yet contain an age field, create one and set it to 0. Also, add (or modify, as appropriate) an updated_at field that stores a Date object with the current time.
// All have ages already. 
// If needed, this should be added: 
// Ensure age exists, or create it if not
// if (!person.hasOwnProperty('age')) {
//     person.age = 0; // If no age exists, set it to 0

// // Increment the age of the copy
// personCopy.age += 1;

// // Add or update the updated_at field in the copy
// personCopy.updated_at = new Date();

// // Return the copied object with the incremented age and updated_at
// return personCopy;
// }


// Thought experiment: since the Date object is an object, what would happen if we modified it in the copy of the object created in the second function using setTime() or another method? How could we circumvent potentially undesired behavior?

// If the Date object is modified in one copy, it will also change in the original because Date is passed by reference. To avoid this, always create a new Date object.




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