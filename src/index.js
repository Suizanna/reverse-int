module.exports = function reverseInt(n) {
  return parseFloat(n.toString().split('').reverse().join('')) * Math.sign(n);
} 
