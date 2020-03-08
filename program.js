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

// module.exports = function doubleAll(numbers) {
//   var result = [];
//   result = numbers.map(numbers => numbers * 2);
//   return result;
// };

// module.exports = function getShortMessages(messages) {
//   return messages.map(msg => msg.message).filter(msg => msg.length < 50);
//   // Arrow functions!
// };

module.exports = function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    return submittedUsers.every(function(submittedUser) {
      return goodUsers.some(function(goodUser) {
        return submittedUser.id === goodUser.id
      });
    });
  };
};