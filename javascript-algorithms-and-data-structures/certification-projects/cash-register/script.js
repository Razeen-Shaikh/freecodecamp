const currencyUnit = {
    "PENNY": 0.01,
    "NICKEL": 0.05,
    "DIME": 0.10,
    "QUARTER": 0.25,
    "ONE": 1.00,
    "FIVE": 5.00,
    "TEN": 10.00,
    "TWENTY": 20.00,
    "ONE HUNDRED": 100.00
};

const price = 19.5; // You can change this dynamically
const cashInput = document.getElementById("cash");
const changeDue = document.getElementById("change-due");
const purchaseBtn = document.getElementById("purchase-btn");

// Editable CID
let cid = [
    ["PENNY", 0.5],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0],
];

function checkCashRegister(price, cash, cid) {
    let changeToGive = +(cash - price).toFixed(2);
    const totalCID = +cid.reduce((acc, curr) => acc + curr[1], 0).toFixed(2);
    const change = [];

    if (cash < price) {
        return { status: "INSUFFICIENT_PAYMENT" };
    }

    if (totalCID < changeToGive) {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
    }

    const reversedCid = cid.slice().reverse();

    for (const [unit, amount] of reversedCid) {
        let unitValue = currencyUnit[unit];
        let amountAvailable = amount;
        let used = 0;

        while (changeToGive >= unitValue && amountAvailable >= unitValue) {
            changeToGive = +(changeToGive - unitValue).toFixed(2);
            amountAvailable = +(amountAvailable - unitValue).toFixed(2);
            used = +(used + unitValue).toFixed(2);
        }

        if (used > 0) {
            change.push([unit, used]);
        }
    }

    if (changeToGive > 0) {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
    }

    const changeTotal = +change.reduce((acc, curr) => acc + curr[1], 0).toFixed(2);
    if (changeTotal === totalCID) {
        return { status: "CLOSED", change: cid };
    }

    return { status: "OPEN", change };
}

// Set default
cashInput.value = price;

purchaseBtn.addEventListener("click", () => {
    const cashPaid = parseFloat(cashInput.value);

    // ✅ EARLY RETURN for exact match
    if (+price.toFixed(2) === +cashPaid.toFixed(2)) {
        changeDue.textContent = "No change due - customer paid with exact cash";
        return;
    }

    const result = checkCashRegister(price, cashPaid, cid);

    if (result.status === "INSUFFICIENT_PAYMENT") {
        alert("Customer does not have enough money to purchase the item");
        return;
    }

    if (result.status === "INSUFFICIENT_FUNDS") {
        changeDue.textContent = "Status: INSUFFICIENT_FUNDS";
        return;
    }

    if (result.status === "CLOSED") {
        const changeString = result.change
            .filter(([_, amount]) => amount > 0)
            .map(([unit, amount]) => `${unit}: $${amount.toFixed(2)}`)
            .join(" ");
        changeDue.textContent = `Status: CLOSED${changeString ? " " + changeString : ""}`;
        return;
    }

    if (result.status === "OPEN") {
        const changeString = result.change
            .map(([unit, amount]) => `${unit}: $${amount.toFixed(2)}`)
            .join(" ");
        changeDue.textContent = `Status: OPEN ${changeString}`;
        return;
    }
});
