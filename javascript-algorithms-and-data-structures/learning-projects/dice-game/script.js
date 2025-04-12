const listOfAllDice = document.querySelectorAll(".die");
const scoreInputs = document.querySelectorAll("#score-options input");
const scoreSpans = document.querySelectorAll("#score-options span");
const roundElement = document.getElementById("current-round");
const rollsElement = document.getElementById("current-round-rolls");
const totalScoreElement = document.getElementById("total-score");
const scoreHistory = document.getElementById("score-history");
const rollDiceBtn = document.getElementById("roll-dice-btn");
const keepScoreBtn = document.getElementById("keep-score-btn");
const rulesContainer = document.querySelector(".rules-container");
const rulesBtn = document.getElementById("rules-btn");

let isModalShowing = false;
let diceValuesArr = [];
let rolls = 0;
let score = 0;
let round = 1;

const rollDice = () => {
    diceValuesArr = [];

    for (let i = 0; i < 5; i++) {
        const randomDice = Math.floor(Math.random() * 6) + 1;
        diceValuesArr.push(randomDice);
    };

    listOfAllDice.forEach((dice, index) => {
        dice.textContent = diceValuesArr[index];
    });
};

const updateStats = () => {
    roundElement.textContent = round;
    rollsElement.textContent = rolls;
}

const updateRadioOption = (index, score) => {
    scoreInputs[index].disabled = false;
    scoreInputs[index].value = score;
    scoreSpans[index].textContent = ", score = " + score;
}

const updateScore = (selectedValue, achieved) => {
    score += parseInt(selectedValue);
    totalScoreElement.textContent = score;

    scoreHistory.innerHTML += `<li>${achieved} : ${selectedValue}</li>`;
};

const getHighestDuplicates = (diceValues) => {
    const counts = {};
    const total = diceValues.reduce((sum, val) => sum + val, 0);

    for (const val of diceValues) {
        counts[val] = (counts[val] || 0) + 1;
    }

    const countValues = Object.values(counts);

    updateRadioOption(5, 0);

    if (countValues.some(count => count >= 4)) {
        updateRadioOption(1, total); // Four of a kind
    }

    if (countValues.some(count => count >= 3)) {
        updateRadioOption(0, total); // Three of a kind
    }
}

const detectFullHouse = (diceValuesArr) => {
    const counts = {};

    diceValuesArr.forEach(num => {
        counts[num] = (counts[num] || 0) + 1;
    });

    const values = Object.values(counts);

    const hasThree = values.includes(3);
    const hasTwo = values.includes(2);

    if (hasThree && hasTwo) {
        updateRadioOption(2, 25);
    }
}

const resetRadioOptions = () => {
    scoreInputs.forEach((input, index) => {
        input.disabled = true;
        input.checked = false;
        scoreSpans[index].textContent = "";
    })
}

const resetGame = () => {
    listOfAllDice.forEach(die => die.textContent = '0');

    score = 0;
    rolls = 0;
    round = 1;

    totalScoreElement.textContent = score;
    rollsElement.textContent = rolls;
    roundElement.textContent = round;

    scoreHistory.innerHTML = '';

    resetRadioOptions();
}

const checkForStraights = (arr) => {
    const uniqueSorted = [...new Set(arr)].sort((a, b) => a - b);

    const isConsecutive = (sequence) => {
        for (let i = 1; i < sequence.length; i++) {
            if (sequence[i] !== sequence[i - 1] + 1) { return false; }
        }
        return true;
    };

    let hasSmallStraight = false;
    let hasLargeStraight = false;

    if (uniqueSorted.length === 5 && isConsecutive(uniqueSorted)) {
        hasLargeStraight = true;
    }

    for (let i = 0; i <= uniqueSorted.length - 4; i++) {
        const sub = uniqueSorted.slice(i, i + 4);
        if (isConsecutive(sub)) {
            hasSmallStraight = true;
            break;
        }
    }

    if (hasLargeStraight) {
        updateRadioOption(3, 30);
        updateRadioOption(4, 40);
    } else if (hasSmallStraight) {
        updateRadioOption(3, 30);
    }
};

rollDiceBtn.addEventListener("click", () => {
    if (rolls === 3) {
        alert("You have made three rolls this round. Please select a score.");
    } else {
        resetRadioOptions();
        rolls++;
        rollDice();
        updateStats();
        getHighestDuplicates(diceValuesArr);
        detectFullHouse(diceValuesArr);
        checkForStraights(diceValuesArr);
        updateRadioOption(5, 0);
    }
});

rulesBtn.addEventListener("click", () => {
    isModalShowing = !isModalShowing;
    if (rulesContainer.style.display === "none") {
        rulesContainer.style.display = "block";
    } else {
        rulesContainer.style.display = "none";
    }
    if (rulesBtn.textContent === "Show rules") {
        rulesBtn.textContent = "Hide rules";
    } else {
        rulesBtn.textContent = "Show rules";
    }
});

keepScoreBtn.addEventListener("click", () => {
    let selectedValue;
    let achieved;

    for (const radioButton of scoreInputs) {
        if (radioButton.checked) {
            selectedValue = radioButton.value;
            achieved = radioButton.id;
            break;
        }
    }

    if (selectedValue) {
        rolls = 0;
        round++;
        updateStats();
        resetRadioOptions();
        updateScore(selectedValue, achieved);
        if (round > 6) {
            setTimeout(() => {
                alert(`Game Over! Your total score is ${score}`);
                resetGame();
            }, 500);
        }
    } else {
        alert("Please select an option or roll the dice");
    }
});