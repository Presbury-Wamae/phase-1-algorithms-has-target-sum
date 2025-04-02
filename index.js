function hasTargetSum(array, target) {
  // Write your algorithm here
    // Create a Set to store numbers we've already seen
    const seenNumbers = new Set();
    for (const number of array) {
      // Calculate the complement (target - current number)
      const complement = target - number;
  
      // If we've seen the complement before, we found a pair
      if (seenNumbers.has(complement)) {
        return true;
      }
  
      // Add the current number to our Set
      seenNumbers.add(number);
    }
  
    // If we finish the loop without finding a pair
    return false;
}

/* 
  Write the Big O time complexity of your function here
  - We iterate through the array once (n elements)
  - Set operations (has and add) are O(1) on average
  - Therefore, the overall complexity is linear O(n)
*/

/* 
  Add your pseudocode here
  1. Initialize an empty Set to track seen numbers
  2. For each number in the input array:
     a. Calculate complement = target - current number
     b. If complement exists in Set, return true
     c. Add current number to Set
  3. If loop completes without matches, return false
*/

/*
  Add written explanation of your solution here
 This function checks if any two numbers in an array sum to a target value.
  The efficient approach uses a Set to remember numbers we've processed.

  How it works:
  1. As we iterate through each number, we calculate what other number
     (complement) would be needed to reach the target sum.
  2. If we've already seen this complement in our Set, we immediately
     return true since we've found a valid pair.
  3. If not, we add the current number to the Set and continue.
  4. If we finish checking all numbers without finding a complement,
     we return false.

  Advantages:
  - Only requires one pass through the array (O(n) time)
  - Handles all cases including negative numbers and duplicates
  - Returns immediately when a pair is found  
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
    // Additional test cases
    console.log("Expecting: true");
    console.log("=>", hasTargetSum([-7, 10, 4, 8], 3));
  
    console.log("");
  
    console.log("Expecting: true");
    console.log("=>", hasTargetSum([1, 2, 3, 4], 5));
  
    console.log("");
  
    console.log("Expecting: true");
    console.log("=>", hasTargetSum([2, 2, 3, 3], 4));
  
    console.log("");
  
    console.log("Expecting: false");
    console.log("=>", hasTargetSum([4], 5));
}

module.exports = hasTargetSum;
