module.exports = function reverseInt(n) {
    return parseFloat(n.toString().split("").reverse().join("")) * Math.sign(n);
};

// function reverse (n) {
//     string = Math.abs(n).toString().split('').reverse().join('');
//     return Number.parseInt(string,[Number]);
// }
