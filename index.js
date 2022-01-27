function hasTargetSum(array, target) {
  // Write your algorithm here
  const seenNumbers = new Set(); // initialize an empty Set
  for (const number of array) {
    const complement = target - number;

    // .has returns true if the Set includes the complement
    if (seenNumbers.has(complement)) return true;

    // .add adds the number to the Set
    seenNumbers.add(number);
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
  0(n)
*/

/* 
  Add your pseudocode here
  create a new set of numbers
  for every number in the array create a new variable = to the target minus the number
  if the set of numbers has the complement, return true and add it to the set
  else return false
*/

/*
  Add written explanation of your solution here
  the function takes an array of numbers and a target number. A new set is created and then
  it loops through the numbers and subtracts the number from the target value and adds it to the set.
  If the set contains the solution of the target minus the number, it means that those two numbers
  will add up to the target, so the function returns true. Else, it returns false

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
