const currentDateParagraph = document.getElementById("current-date");
const dateOptionsSelectElement = document.getElementById("date-options");

// Get the current date and time
const date = new Date();
const day = date.getDate().toString().padStart(2, "0");
const month = (date.getMonth() + 1).toString().padStart(2, "0");
const year = date.getFullYear();
const hours = date.getHours().toString().padStart(2, "0");
const minutes = date.getMinutes().toString().padStart(2, "0");

// Default format: dd-mm-yyyy
const defaultFormattedDate = `${day}-${month}-${year}`;

// Function to update the displayed date
function updateDateDisplay() {
  const selectedOption = dateOptionsSelectElement.value;
  switch (selectedOption) {
    case "yyyy-mm-dd":
      currentDateParagraph.textContent = `${year}-${month}-${day}`;
      break;
    case "mm-dd-yyyy-h-mm":
      currentDateParagraph.textContent = `${month}-${day}-${year} ${hours} Hours ${minutes} Minutes`;
      break;
    default:
      currentDateParagraph.textContent = defaultFormattedDate;
  }
}

// Initialize with the default format
currentDateParagraph.textContent = defaultFormattedDate;

// Update the displayed date when the user selects a new option
dateOptionsSelectElement.addEventListener("change", updateDateDisplay);
