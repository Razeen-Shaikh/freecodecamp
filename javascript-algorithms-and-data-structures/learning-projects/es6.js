/** Compare Scopes of the var and let Keywords */
function checkScope() {
  let i = "function scope";
  if (true) {
    let i = "block scope";
    console.log("Block scope i is: ", i);
  }
  console.log("Function scope i is: ", i);
  return i;
}

/** Mutate an Array Declared with const */
const s = [5, 7, 2];
function editInPlace() {
  let temp = s[0];
  s[0] = s[s.length - 1];
  s[s.length - 1] = temp;
  temp = s[1];
  s[1] = s[s.length - 1];
  s[s.length - 1] = temp;
}
editInPlace();

/** Prevent Object Mutation */
function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14,
  };
  Object.freeze(MATH_CONSTANTS);
  try {
    MATH_CONSTANTS.PI = 99;
  } catch (ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();

/** Use Arrow Functions to Write Concise Anonymous Functions */
const magic = () => {
  return new Date();
};

/** Write Arrow Functions with Parameters */
const myConcat = (arr1, arr2) => {
  return arr1.concat(arr2);
};
console.log(myConcat([1, 2], [3, 4, 5]));

/** Set Default Parameters for Your Functions */
const increment = (number, value = 1) => number + value;

/** Use the Rest Parameter with Function Parameters */
const sum = (...args) => {
  return args.reduce((a, b) => a + b, 0);
};

/** Use the Spread Operator to Evaluate Arrays In-Place */
const arr1 = ["JAN", "FEB", "MAR", "APR", "MAY"];
let arr2;
arr2 = [...arr1];
console.log(arr2);

/** Use Destructuring Assignment to Extract Values from Objects */
const HIGH_TEMPERATURES1 = {
  yesterday: 75,
  today1: 77,
  tomorrow1: 80,
};
const { today1, tomorrow1 } = HIGH_TEMPERATURES1;

/** Use Destructuring Assignment to Assign Variables from Objects */
const HIGH_TEMPERATURES2 = {
  yesterday: 75,
  today2: 77,
  tomorrow2: 80,
};
const { highToday1: today2, highTomorrow: tomorrow2 } = HIGH_TEMPERATURES2;

/** Use Destructuring Assignment to Assign Variables from Objects */
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80,
};
const { today: highToday2, tomorrow: highTomorrow } = HIGH_TEMPERATURES;

/** Use Destructuring Assignment to Assign Variables from Nested Objects */
const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 },
};
const {
  today: { low: lowToday, high: highToday },
} = LOCAL_FORECAST;

/** Use Destructuring Assignment to Assign Variables from Arrays */
let a = 8,
  b = 6;
[a, b] = [b, a];

/** Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements */
function removeFirstTwo(list) {
  const [a, b, ...shorterList] = list;
  return shorterList;
}
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);

/** Use Destructuring Assignment to Pass an Object as a Function's Parameters */
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85,
};
const half = ({ max, min }) => (max + min) / 2.0;

/** Create Strings using Template Literals */
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"],
};
function makeList(arr) {
  const failureItems = [];
  result.failure.forEach((fail) => {
    failureItems.push(`<li class="text-warning">${fail}</li>`);
  });
  return failureItems;
}
const failuresList = makeList(result.failure);
console.log(failuresList);

/** Write Concise Object Literal Declarations Using Object Property Shorthand */
const createPerson = (name, age, gender) => ({
  name,
  age,
  gender,
});

/** Write Concise Declarative Functions with ES6 */
const bicycle = {
  gear: 2,
  setGear(newGear) {
    this.gear = newGear;
  },
};
bicycle.setGear(3);
console.log(bicycle.gear);

/** Use class Syntax to Define a Constructor Function */
class Vegetable {
  constructor(name) {
    this.name = name;
  }
}
const carrot = new Vegetable("carrot");
console.log(carrot.name);

/** Use getters and setters to Control Access to an Object */
class Thermostat {
  constructor(fahrenheit) {
    this.fahrenheit = fahrenheit;
  }
  get temperature() {
    return (5 / 9) * (this.fahrenheit - 32);
  }
  set temperature(celcius) {
    this.fahrenheit = (celcius * 9.0) / 5 + 32;
  }
}
const thermos = new Thermostat(76);
let temp = thermos.temperature;
thermos.temperature = 26;
temp = thermos.temperature;

/** Create a Module Script */
<html>
  <body>
    <script type="module" src="index.js"></script>
  </body>
</html>;

/** Use export to Share a Code Block */
const uppercaseString = (string) => {
  return string.toUpperCase();
};
const lowercaseString = (string) => {
  return string.toLowerCase();
};
export { uppercaseString, lowercaseString };

/** Reuse JavaScript Code Using import */
import { uppercaseString, lowercaseString } from "./string_functions.js";
uppercaseString("hello");
lowercaseString("WORLD!");

/** Use * to Import Everything from a File */
import * as stringFunctions from "./string_functions.js";
stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");

/** Create an Export Fallback with export default */
export default function subtract(x, y) {
  return x - y;
}

/** Import a Default Export */
import subtract from "./math_functions.js";
subtract(7, 4);

/** Create a JavaScript Promise */
const makeServerRequest1 = new Promise((resolve, reject) => {});

/** Complete a Promise with resolve and reject */
const makeServerRequest2 = new Promise((resolve, reject) => {
  // responseFromServer represents a response from a server
  let responseFromServer;
  if (responseFromServer) {
    resolve("We got the data");
  } else {
    reject("Data not received");
  }
});

/** Handle a Fulfilled Promise with then */
const makeServerRequest3 = new Promise((resolve, reject) => {
  let responseFromServer = true;
  if (responseFromServer) {
    resolve("We got the data");
  } else {
    reject("Data not received");
  }
}).then((result) => {
  console.log(result);
});

/** Handle a Rejected Promise with catch */
const makeServerRequest4 = new Promise((resolve, reject) => {
  let responseFromServer = false;
  if (responseFromServer) {
    resolve("We got the data");
  } else {
    reject("Data not received");
  }
});
makeServerRequest4
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
