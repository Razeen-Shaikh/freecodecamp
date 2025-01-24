const text = document.getElementById("text-input");
const result = document.getElementById("result");
const checkBtn = document.getElementById("check-btn");

const checkPalindrome = () => {
  const str = text.value.trim(); // Trim whitespace
  result.classList.remove("hidden"); // Ensure result is visible

  if (!str) {
    result.textContent = "Please input a value";
    result.classList.add("error");
    alert("Please input a value");
    return;
  }

  // Remove non-alphanumeric characters and convert to lowercase
  const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  if (cleanedStr.length === 0) {
    result.textContent = "Input contains no valid characters to check.";
    result.classList.add("error");
    return;
  }

  // Check if the cleaned string is a palindrome
  const isPalindrome = cleanedStr === cleanedStr.split("").reverse().join("");
  result.textContent = `${str} ${isPalindrome ? "is a palindrome" : "is not a palindrome"}`;
  result.classList.remove("error");
};

// Attach event listener
checkBtn.addEventListener("click", checkPalindrome);
