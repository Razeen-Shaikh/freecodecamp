const text = document.getElementById("text-input");
const result = document.getElementById("result");
const checkBtn = document.getElementById("check-btn");

const checkPalindrome = () => {
  const str = text.value.trim(); 
  result.classList.remove("hidden");

  if (!str) {
    result.textContent = "Please input a value";
    result.classList.add("error");
    alert("Please input a value");
    return;
  }

  const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  if (cleanedStr.length === 0) {
    result.textContent = "Input contains no valid characters to check.";
    result.classList.add("error");
    return;
  }

  const isPalindrome = cleanedStr === cleanedStr.split("").reverse().join("");
  result.textContent = `${str} ${
    isPalindrome ? "is a palindrome" : "is not a palindrome"
  }`;
  result.classList.remove("error");
};

checkBtn.addEventListener("click", checkPalindrome);
