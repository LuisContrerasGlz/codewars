/* Write a function that reverses the bits in an integer.

For example, the number 417 is 110100001 in binary. Reversing the binary is 100001011 which is 267.

You can assume that the number is not negative.*/

function reverseBits (n) {
    return parseInt(n.toString(2).split("").reverse().join(""), 2);
 }

/* It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

Return the average of the given array rounded down to its nearest integer.*/

function getAverage(marks){
    return Math.floor(marks.reduce((a, b) => (a + b)) / marks.length);
 }
