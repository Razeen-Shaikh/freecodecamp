const romanToArabic = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

const convert = () => {
  const num = numberInput.value;

  output.textContent = "";
  output.classList.remove("alert"); // Clear previous alerts
  output.classList.remove("hidden");

  if (num === "") {
    output.textContent = "Please enter a valid number";
    output.classList.add("alert");
    return;
  }

  let number = parseInt(num); // Convert to number

  if (isNaN(number)) {
    output.textContent = "Please enter a valid number";
    output.classList.add("alert");
    return;
  }

  if (number < 1) {
    output.textContent = "Please enter a number greater than or equal to 1";
    output.classList.add("alert");
    return
  }

  if (number >= 4000) {
    output.textContent = "Please enter a number less than or equal to 3999";
    output.classList.add("alert");
    return;
  }

  let result = "";
  for (let key in romanToArabic) {
    while (number >= romanToArabic[key]) {
      result += key;
      number -= romanToArabic[key];
    }
  }

  output.textContent = result;
};

convertBtn.addEventListener("click", (event) => {
  event.preventDefault();
  convert();
});