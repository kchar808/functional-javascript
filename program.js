// function upperCaser(word) {
//   return word.toUpperCase();
// };

// module.exports = upperCaser;

// function repeat(fn, num) {
//   fn = function loopDeLoop() {
//     for(let i = 0; i <= num; i++) {
//       return "HEY!"
//     }
//   };
// };

// module.exports = repeat;

module.exports = function doubleAll(numbers) {
  var result = [];
  result = numbers.map(numbers => numbers * 2);
  return result;
};