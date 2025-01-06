const text = document.getElementById("text-input");
const result = document.getElementById("result");

const check = () => {
  const str = text.value;
  if (str) {
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

    result.textContent = `${text.value} ${cleanedStr === cleanedStr.split("").reverse().join("") ? "is a palindrome" : "is not a palindrome"}`;
  } else {
    alert("Please input a value");
  }
}