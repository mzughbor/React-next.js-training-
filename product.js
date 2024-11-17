/**
 * TypeScript file for Tasks 4 and 5 ...
 *
 * Task 4: Product Interface and Total Price Calculation
 * - Define a Product interface with `name` and `price` properties.
 * - Create a function `calculateTotalPrice` that takes an array of Products and returns the total price.
 *
 * Task 5: Email Validation
 * - Create a function `isValidEmail` that checks if a given string is a valid email address using regex.
 *
 * Instructions:
 * - To run this code, compile TypeScript to JavaScript using `tsc product.ts`, then run the compiled JS file.
 */
// Function to calculate the total price
function calculateTotalPrice(products) {
    return products.reduce(function (total, product) { return total + product.price; }, 0);
}
// Example 
var products = [
    { name: "Apple", price: 1.5 },
    { name: "Banana", price: 0.9 },
    { name: "Orange", price: 1.2 }
];
console.log("Total Price:", calculateTotalPrice(products)); // Output: Total Price: 3.6
// Task 5: Validate an email address
// Function to validate email
function isValidEmail(email) {
    // Basic regex for email validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
// Example 
console.log(isValidEmail("test@example.com")); // Output: true
console.log(isValidEmail("invalid-email")); // Output: false
