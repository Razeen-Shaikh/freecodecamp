const character = "#";
const count = 8;
const rows = [];

for (let i = 1; i <= count; i++) {
    rows.push(padRow(i, count));
}

for (const row of rows) {
    result = result + "\n" + row;
}

function padRow(rowNumber, rowCount) {
    return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber -1 ) + " ".repeat(rowCount - rowNumber);
}
