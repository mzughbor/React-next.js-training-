/* JavaScript file for Tasks 2 and 3 */

// Task 2: Calculate the total sum and average of numbers in any given array
function calculateSumAndAverage(numbers) {
  const totalSum = numbers.reduce((acc, num) => acc + num, 0); // Sum numbers
  const average = totalSum / numbers.length; // Calculate average

  return {
    totalSum,
    average,
  };
}

// Example:
const numbers = [10, 20, 30, 40, 50];
const result = calculateSumAndAverage(numbers);
console.log("Total Sum:", result.totalSum);
console.log("Average:", result.average);

// Task 3: Remove duplicates from an array
function removeDuplicates(array) {
  // Using a Set to ensure unique values
  const uniqueArray = [...new Set(array)]; // using built-in object Set to remove duplication + the shorthand ... to convert set back to an array.
  return uniqueArray;
}

// Example usage:
const strings = ["apple", "banana", "apple", "orange", "banana"];
const uniqueStrings = removeDuplicates(strings);
console.log("Unique Strings:", uniqueStrings);
