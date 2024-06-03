const character = "#";
const count = 8;
const rows = [];

let inverted = true;

for (let i = 1; i <= count; i++) {
    if (inverted) {
        rows.unshift(padRow(count - i, count));
    } else {
        rows.push(padRow(count - i, count));
    }
}

for (const row of rows) {
    result = result + "\n" + row;
}

function padRow(rowNumber, rowCount) {
    return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}
