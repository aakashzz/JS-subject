const array1 = [
     [3, 4, 6], [2, 3, 6], [1, 7, 3]
];

const array2 = [
     [5, 9, 0], [6, 5, 4], [7, 2, 5]
]

// console.table(array1);
// console.table(array2);

let row = 1;

const finalValue = array1[row][0] + array1[row][1] + array1[row][2];
const rowAddValue = [];
rowAddValue.push(...finalValue)

console.log(`Array ${row} row side calculation is :- `,finalValue)
console.log('Total',rowAddValue)