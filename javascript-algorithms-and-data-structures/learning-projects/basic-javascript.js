// This is an in-line comment.
/* This is a
multi-line comment */

/** Declare JavaScript Variables */
var myName;

/** Storing Values with the Assignment Operator */
// Setup
var a;
a = 7;

// Only change code below this line

/** Assigning the Value of One Variable to Another */
// Setup
var a;
a = 7;
var b;
b = a;

/** Initializing Variables with the Assignment Operator */
var a = 9;

/** Declare String Variables */
var myFirstName = "Razeen";
var myLastName = "Shaikh";

/** Understanding Uninitialized Variables */
var a;
var b;
var c;
a = 5;
b = 10;
c = "I am a";

a = a + 1;
b = b + 5;
c = c + " String!";

/** Understanding Case Sensitivity in Variables */
// Variable declarations
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

/** Variable assignments */
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

/** Explore Differences Between the var and let Keywords */
let catName = "Oliver";
let catSound = "Meow!";

/** Declare a Read-Only Variable with the const Keyword */
const FCC = "freeCodeCamp";
let fact = "is cool!";
fact = "is awesome!";
console.log(FCC, fact);

/** Add Two Numbers with JavaScript */
const sum = 10 + 10;

/** Subtract One Number from Another with JavaScript */
const difference = 45 - 33;

/** Multiply Two Numbers with JavaScript */
const product = 8 * 10;

/** Divide One Number by Another with JavaScript */
const quotient = 66 / 33;

/** Increment a Number with JavaScript */
let myVar1 = 87;
myVar++;

/** Decrement a Number with JavaScript */
let myVar2 = 11;
myVar--;

/** Create Decimal Numbers with JavaScript */
const ourDecimal = 5.7;
let myDecimal = 2.3;

/** Multiply Two Decimals with JavaScript */
const product1 = 2.0 * 2.5;

/** Divide One Decimal by Another with JavaScript */
const quotient1 = 4.4 / 2.0; // Change this line

/** Finding a Remainder in JavaScript */
const remainder = 11 % 3;

/** Compound Assignment With Augmented Addition */
let a = 3;
let b = 17;
let c = 12;
a += 12;
b += 9;
c += 7;

/** Compound Assignment With Augmented Subtraction */
let a = 11;
let b = 9;
let c = 3;
a -= 6;
b -= 15;
c -= 1;

/** Compound Assignment With Augmented Multiplication */
let a = 5;
let b = 12;
let c = 4.6;
a *= 5;
b *= 3;
c *= 10;

/** Compound Assignment With Augmented Division */
let a = 48;
let b = 108;
let c = 33;
a /= 12;
b /= 4;
c /= 11;

/** Escaping Literal Quotes in Strings */
const myStr1 = 'I am a "double quoted" string inside "double quotes".'; // Change this line

/** Quoting Strings with Single Quotes */
const myStr2 = '<a href="http://www.example.com" target="_blank">Link</a>';

/** Escape Sequences in Strings */
const myStr3 = "FirstLine\n\t\\SecondLine\nThirdLine"; // Change this line

/** Concatenating Strings with Plus Operator */
const myStr4 = "This is the start." + " " + "This is the end."; // Change this line

/** Concatenating Strings with the Plus Equals Operator */
let myStr5 = "This is the first sentence.";
myStr5 += " This is the second sentence.";

/** Constructing Strings with Variables */
// Only change code below this line
const myName = "Razeen";
const myStr6 = "My name is " + myName + "and I am well!";

/** Appending Variables to Strings */
// Change code below this line
const someAdjective = "cool";
let myStr7 = "Learning to code is ";
myStr7 += someAdjective;

/** Find the Length of a String */
// Setup
let lastNameLength = 0;
const lastName1 = "Lovelace";
// Only change code below this line
lastNameLength = lastName1.length;

/** Use Bracket Notation to Find the First Character in a String */
// Setup
let firstLetterOfLastName = "";
const lastName2 = "Lovelace";
// Only change code below this line
firstLetterOfLastName = lastName2[0]; // Change this line

/** Understand String Immutability */
// Setup
let myStr8 = "Jello World";
// Only change code below this line
myStr8 = "Hello World"; // Change this line
// Only change code above this line

/** Use Bracket Notation to Find the Nth Character in a String */
// Setup
const lastName3 = "Lovelace";
// Only change code below this line
const thirdLetterOfLastName = lastName3[2]; // Change this line

/** Use Bracket Notation to Find the Last Character in a String */
// Setup
const lastName4 = "Lovelace";
// Only change code below this line
const lastLetterOfLastName = lastName4[lastName4.length - 1]; // Change this line

/** Use Bracket Notation to Find the Nth-to-Last Character in a String */
// Setup
const lastName = "Lovelace";
// Only change code below this line
const secondToLastLetterOfLastName = lastName[lastName.length - 2]; // Change this line

/** Word Blanks */
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";
// Only change code below this line
const wordBlanks = myNoun + " " + myAdjective + " " + myVerb + " " + myAdverb; // Change this line
// Only change code above this line

/** Store Multiple Values in one Variable using JavaScript Arrays */
// Only change code below this line
const myArray1 = ["jelly", 12];

/** Nest one Array within Another Array */
// Only change code below this line
const myArray2 = [["Bulls", 23]];

/** Access Array Data with Indexes */
const myArray3 = [50, 60, 70];
let myData1 = myArray3[0];

/** Modify Array Data With Indexes */
// Setup
const myArray = [18, 64, 99];
myArray[0] = 45;
// Only change code below this line

/** Access Multi-Dimensional Arrays With Indexes */
const myArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];
const myData2 = myArray[2][1];

/** Manipulate Arrays With push() */
// Setup
const myArray = [
  ["John", 23],
  ["cat", 2],
];
myArray.push(["dog", 3]);
// Only change code below this line

/** Manipulate Arrays With pop() */
// Setup
const myArray = [
  ["John", 23],
  ["cat", 2],
];
let removedFromMyArray1 = myArray.pop();
// Only change code below this line

/** Manipulate Arrays With shift() */
// Setup
const myArray = [
  ["John", 23],
  ["dog", 3],
];
let removedFromMyArray2 = myArray.shift();
// Only change code below this line

/** Manipulate Arrays With unshift() */
// Setup
const myArray = [
  ["John", 23],
  ["dog", 3],
];
myArray.shift();
// Only change code below this line
myArray.unshift(["Paul", 35]);

/** Shopping List */
const myList = [
  ["Chocolate Bar", 15],
  ["Chocolate Bar", 15],
  ["Chocolate Bar", 15],
  ["Chocolate Bar", 15],
  ["Chocolate Bar", 15],
];

/** Write Reusable JavaScript with Functions */
function reusableFunction() {
  console.log("Hi World");
}
reusableFunction();

/** Passing Values to Functions with Arguments */
function functionWithArgs(a, b) {
  console.log(a + b);
}
functionWithArgs(2, 4);

/** Return a Value from a Function with Return */
function timesFive(a) {
  return a * 5;
}
timesFive(5);

/** Global Scope and Functions */
// Declare the myGlobal variable below this line
const myGlobal = 10;
function fun1() {
  // Assign 5 to oopsGlobal Here
  oopsGlobal = 5;
}
function fun2() {
  let output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

/** Local Scope and Functions */
function myLocalScope() {
  let myVar;
  console.log("inside myLocalScope", myVar);
}
myLocalScope();
// Run and check the console
// myVar is not defined outside of myLocalScope
console.log("outside myLocalScope", myVar);

/** Global vs. Local Scope in Functions */
const outerWear = "T-Shirt";
function myOutfit() {
  let outerWear = "sweater";
  return outerWear;
}
myOutfit();

/** Understanding Undefined Value returned from a Function */
let sum1 = 0;
function addThree() {
  sum1 = sum1 + 3;
}
function addFive() {
  sum1 += 5;
}
addThree();
addFive();

/** Assignment with a Returned Value */
let processed = 0;
function processArg(num) {
  return (num + 3) / 5;
}
processed = processArg(7);

/** Stand in Line */
function nextInLine(arr, item) {
  arr.push(item);
  return arr.shift();
}
let testArr = [1, 2, 3, 4, 5];
// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

/** Understanding Boolean Values */
function welcomeToBooleans() {
  return true;
}

/** Use Conditional Logic with If Statements */
function trueOrFalse(wasThatTrue) {
  if (wasThatTrue) return "Yes, that was true";
  else return "No, that was false";
}

/** Comparison with the Equality Operator */
function testEqual(val) {
  if (val == 12) {
    return "Equal";
  }
  return "Not Equal";
}
testEqual(10);

/** Comparison with the Strict Equality Operator */
function testStrict(val) {
  if (val === 7) {
    return "Equal";
  }
  return "Not Equal";
}
testStrict(10);

/** Practice comparing different values */
function compareEquality(a, b) {
  if (a === b) {
    return "Equal";
  }
  return "Not Equal";
}
compareEquality(10, "10");

/** Comparison with the Inequality Operator */
function testNotEqual(val) {
  if (val != 99) {
    return "Not Equal";
  }
  return "Equal";
}
testNotEqual(10);

/** Comparison with the Strict Inequality Operator */
function testStrictNotEqual(val) {
  if (val !== 17) {
    return "Not Equal";
  }
  return "Equal";
}
testStrictNotEqual(10);

/** Comparison with the Greater Than Operator */
function testGreaterThan(val) {
  if (val > 100) {
    return "Over 100";
  }
  if (val > 10) {
    return "Over 10";
  }
  return "10 or Under";
}
testGreaterThan(10);

/** Comparison with the Greater Than Or Equal To Operator */
function testGreaterOrEqual(val) {
  if (val >= 20) {
    return "20 or Over";
  }
  if (val >= 10) {
    return "10 or Over";
  }
  return "Less than 10";
}
testGreaterOrEqual(10);

/** Comparison with the Less Than Operator */
function testLessThan(val) {
  if (val < 25) {
    // Change this line
    return "Under 25";
  }
  if (val < 55) {
    // Change this line
    return "Under 55";
  }
  return "55 or Over";
}
testLessThan(10);

/** Comparison with the Less Than Or Equal To Operator */
function testLessOrEqual(val) {
  if (val <= 12) {
    return "Smaller Than or Equal to 12";
  }
  if (val <= 24) {
    return "Smaller Than or Equal to 24";
  }
  return "More Than 24";
}
testLessOrEqual(10);

/** Comparisons with the Logical And Operator */
function testLogicalAnd(val) {
  if (val <= 50 && val >= 25) {
    return "Yes";
  }
  return "No";
}
testLogicalAnd(10);

/** Comparisons with the Logical Or Operator */
function testLogicalOr(val) {
  if (val < 10 || val > 20) {
    return "Outside";
  }
  return "Inside";
}
testLogicalOr(15);

/** Introducing Else Statements */
function testElse(val) {
  let result = "";
  if (val > 5) {
    result = "Bigger than 5";
  } else {
    result = "5 or Smaller";
  }
  return result;
}
testElse(4);

/** Introducing Else If Statements */
function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  } else if (val < 5) {
    return "Smaller than 5";
  } else {
    return "Between 5 and 10";
  }
}
testElseIf(7);

/** Logical Order in If Else Statements */
function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}
orderMyLogic(7);

/** Chaining If Else Statements */
function testSize(num) {
  // Only change code below this line
  if (num < 5) return "Tiny";
  else if (num < 10) return "Small";
  else if (num < 15) return "Medium";
  else if (num < 20) return "Large";
  else return "Huge";
  // Only change code above this line
}
testSize(7);

/** Golf Code */
const names = [
  "Hole-in-one!",
  "Eagle",
  "Birdie",
  "Par",
  "Bogey",
  "Double Bogey",
  "Go Home!",
];
function golfScore(par, strokes) {
  // Only change code below this line
  if (strokes === 1) return names[0];
  else if (strokes <= par - 2) return names[1];
  else if (strokes === par - 1) return names[2];
  else if (strokes === par) return names[3];
  else if (strokes === par + 1) return names[4];
  else if (strokes === par + 2) return names[5];
  else return names[6];
}
golfScore(5, 4);

/** Selecting from Many Options with Switch Statements */
function caseInSwitch(val) {
  let answer = "";
  switch (val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
      break;
    default:
      break;
  }
  return answer;
}
caseInSwitch(1);

/** Adding a Default Option in Switch Statements */
function switchOfStuff(val) {
  let answer = "";
  switch (val) {
    case "a":
      answer = "apple";
      break;
    case "b":
      answer = "bird";
      break;
    case "c":
      answer = "cat";
      break;
    default:
      answer = "stuff";
  }
  return answer;
}
switchOfStuff(1);

/** Multiple Identical Options in Switch Statements */
function sequentialSizes(val) {
  let answer = "";
  switch (val) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";
      break;
    default:
      break;
  }
  return answer;
}
sequentialSizes(1);

/** Replacing If Else Chains with Switch */
function chainToSwitch(val) {
  let answer = "";
  switch (val) {
    case "bob":
      answer = "Marley";
      break;
    case 42:
      answer = "The Answer";
      break;
    case 1:
      answer = "There is no #1";
      break;
    case 99:
      answer = "Missed me by this much!";
      break;
    case 7:
      answer = "Ate Nine";
      break;
    default:
      break;
  }
  return answer;
}
chainToSwitch(7);

/** Returning Boolean Values from Functions */
function isLess(a, b) {
  return a < b;
}
isLess(10, 15);

/** Return Early Pattern for Functions */
function abTest(a, b) {
  if (a < 0 || b < 0) return;
  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
abTest(2, 2);

/** Counting Cards */
let count = 0;
function cc(card) {
  let pos = [2, 3, 4, 5, 6];
  let zero = [7, 8, 9];
  let neg = [10, "J", "Q", "K", "A"];
  if (pos.includes(card)) count++;
  else if (neg.includes(card)) count--;
  if (count > 0) return count + " Bet";
  else return count + " Hold";
}
cc(2);
cc(3);
cc(4);
cc(5);
cc(6);

/** Build JavaScript Objects */
const myDog = {
  name: "",
  legs: 4,
  tails: 1,
  friends: [],
};

/** Accessing Object Properties with Dot Notation */
const testObj1 = {
  hat: "ballcap",
  shirt: "jersey",
  shoes: "cleats",
};
const hatValue = testObj1.hat;
const shirtValue = testObj1.shirt;

/** Accessing Object Properties with Bracket Notation */
const testObj2 = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water",
};
const entreeValue = testObj2["an entree"];
const drinkValue = testObj2["the drink"];

/** Accessing Object Properties with Variables */
const testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas",
};
const playerNumber = 16;
const player = testObj[playerNumber];

/** Updating Object Properties */
const myDog1 = {
  name: "Coder",
  legs: 4,
  tails: 1,
  friends: ["freeCodeCamp Campers"],
};
myDog1["name"] = "Happy Coder";

/** Add New Properties to a JavaScript Object */
const myDog2 = {
  name: "Happy Coder",
  legs: 4,
  tails: 1,
  friends: ["freeCodeCamp Campers"],
};
myDog2["bark"] = "woof";

/** Delete Properties from a JavaScript Object */
const myDog3 = {
  name: "Happy Coder",
  legs: 4,
  tails: 1,
  friends: ["freeCodeCamp Campers"],
  bark: "woof",
};
delete myDog3["tails"];

/** Using Objects for Lookups */
function phoneticLookup(val) {
  let lookup = {
    alpha: "Adams",
    bravo: "Boston",
    charlie: "Chicago",
    delta: "Denver",
    echo: "Easy",
    foxtrot: "Frank",
  };
  let result = lookup[val];
  return result;
}
phoneticLookup("charlie");

/** Testing Objects for Properties */
function checkObj(obj, checkProp) {
  if (obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  }
  return "Not Found";
}

/** Manipulating Complex Objects */
const myMusic = [
  {
    artist: "Billy Joel",
    title: "Piano Man",
    release_year: 1973,
    formats: ["CD", "8T", "LP"],
    gold: true,
  },
  {
    artist: "Billy",
    title: "Piano",
    release_year: 1980,
    formats: ["CD", "LP"],
  },
];

/** Accessing Nested Objects */
const myStorage = {
  car: {
    inside: {
      "glove box": "maps",
      "passenger seat": "crumbs",
    },
    outside: {
      trunk: "jack",
    },
  },
};
const gloveBoxContents = myStorage.car.inside["glove box"];

/** Accessing Nested Arrays */
const myPlants = [
  {
    type: "flowers",
    list: ["rose", "tulip", "dandelion"],
  },
  {
    type: "trees",
    list: ["fir", "pine", "birch"],
  },
];
const secondTree = myPlants[1].list[1];

// Setup
const recordCollection = {
  2548: {
    albumTitle: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"],
  },
  2468: {
    albumTitle: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"],
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [],
  },
  5439: {
    albumTitle: "ABBA Gold",
  },
};

/** Record Collection */
function updateRecords(records, id, prop, value) {
  if (!value) delete records[id][prop];
  else if (prop != "tracks") records[id][prop] = value;
  else {
    if (!records[id].hasOwnProperty("tracks")) records[id]["tracks"] = [value];
    else records[id]["tracks"] = [...records[id]["tracks"], value];
  }
  console.log(records);
  return records;
}
updateRecords(recordCollection, 5439, "artist", "ABBA");

/** Iterate with JavaScript While Loops */
const myArray = [];
let i = 5;
while (i >= 0) {
  myArray.push(i);
  i--;
}

/** Iterate with JavaScript For Loops */
const myArray = [];
for (let i = 1; i <= 5; i++) {
  myArray.push(i);
}

/** Iterate Odd Numbers With a For Loop */
const myArray = [];
for (let i = 1; i <= 9; i += 2) {
  myArray.push(i);
}

/** Count Backwards With a For Loop */
const myArray = [];
for (let i = 9; i >= 1; i -= 2) {
  myArray.push(i);
}

/** Iterate Through an Array with a For Loop */
const myArr = [2, 3, 4, 5, 6];
let total = 0;
for (let i = 0; i < myArr.length; i++) {
  total += myArr[i];
}

/** Nesting For Loops */
function multiplyAll(arr) {
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }
  return product;
}
multiplyAll([
  [1, 2],
  [3, 4],
  [5, 6, 7],
]);

/** Iterate with JavaScript Do...While Loops */
const myArray = [];
let j = 10;
do {
  myArray.push(i);
  j++;
} while (i < 5);

/** Replace Loops using Recursion */
function sum(arr, n) {
  if (n == 0) return 0;
  else if (n == 1) return arr[0];
  return arr[n - 1] + sum(arr, n - 1);
}

/** Profile Lookup */
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];
function lookUpProfile(name, prop) {
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName == name) {
      if (contacts[i].hasOwnProperty(prop)) {
        return contacts[i][prop];
      } else {
        return "No such property";
      }
    }
  }
  return "No such contact";
}
lookUpProfile("Sherlock", "likes");

/** Generate Random Fractions with JavaScript */
function randomFraction() {
  return Math.random();
}

/** Generate Random Whole Numbers with JavaScript */
function randomWholeNum() {
  return Math.floor(Math.random() * 10);
}

/** Generate Random Whole Numbers within a Range */
function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}

/** Use the parseInt Function */
function convertToInteger(str) {
  return parseInt(str);
}
convertToInteger("56");

/** Use the parseInt Function with a Radix */
function convertToInteger(str) {
  return parseInt(str, 2);
}
convertToInteger("10011");

/** Use the Conditional (Ternary) Operator */
function checkEqual(a, b) {
  return a == b ? "Equal" : "Not Equal";
}
checkEqual(1, 2);
