module.exports = function reverse (n) {
    string = Math.abs(n).toString().split('').reverse().join('');
    return Number.parseInt(string,[Number]);
}
