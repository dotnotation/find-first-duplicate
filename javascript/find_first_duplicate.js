const { ControlPointDuplicateSharp } = require("@mui/icons-material");

function findFirstDuplicate(arr) {
  const duplicate = new Set()
  for (const number of arr) {
    if (duplicate.has(number)){
      return number
    }
    duplicate.add(number)
  }
  return -1
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
// And a written explanation of your solution
// Given an Array, find the first duplicate value that occurs. If there are no duplicates, return -1.
// need variable for duplicate to be returned
// if there are no duplicates return -1
// iterate over array to find duplicate value
// if there are no duplicates return -1