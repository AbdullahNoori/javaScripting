
   
// # JAVASCRIPTING  
   
// ## ROUNDING NUMBERS (Exercise 7 of 20)  
  
//  We can do basic math using familiar operators like +, -, *, /, and %.  
  
//  For more complex math, we can use the Math object.  
  
//  In this challenge we'll use the Math object to round numbers.  
  
// ## The challenge:  
  
//  Create a file named rounding-numbers.js.  
  
//  In that file define a variable named roundUp that references the float  
//  1.5.  
  
//  We will use the Math.round() method to round the number up. This method  
//  rounds either up or down to the nearest integer.  
  
//  An example of using Math.round():  
  
//     Math.round(0.5)  
  
//  Define a second variable named rounded that references the output of the  
//  Math.round() method, passing in the roundUp variable as the argument.  
  
//  Use console.log() to print that number to the terminal.  
  
//  Check to see if your program is correct by running this command:  
  
//     javascripting verify rounding-numbers.js  
  
// ─────────────────────────────────────────────────────────────────────────────  
//  Need help? View the README for this workshop:  
//  (https://github.com/workshopper/javascripting)  
  
// ─────────────────────────────────────────────────────────────────────────────  
  


const roundUp= Math.round(1.5)

const rounded = Math.round(roundUp)

console.log(rounded)



// ## ROUNDING NUMBERS (Exercise 7 of 20)

// Here's the official solution in case you want to compare notes:

// ─────────────────────────────────────────────────────────────────────────────

//    const roundUp = 1.5
//    const rounded = Math.round(roundUp)
//    console.log(rounded)

// ─────────────────────────────────────────────────────────────────────────────
// ─────────────────────────────────────────────────────────────────────────────

// # THAT NUMBER IS ROUNDED

// Yep, you just rounded the number 1.5 to 2. Good job.

// In the next challenge we will turn a number into a string.

// Run javascripting in the console to choose the next challenge.

// ─────────────────────────────────────────────────────────────────────────────
// You have 13 challenges left.


