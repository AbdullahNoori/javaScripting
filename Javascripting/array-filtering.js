
   
// # JAVASCRIPTING  
   
// ## ARRAY FILTERING (Exercise 12 of 20)  
  
//  There are many ways to manipulate arrays.  
  
//  One common task is filtering arrays to only contain certain values.  
  
//  For this we can use the .filter() method.  
  
//  Here is an example:  
  
//     const pets = ['cat', 'dog', 'elephant']  
      
//     const filtered = pets.filter(function (pet) {  
//       return (pet !== 'elephant')  
//     })  
  
//  The filtered variable will now only contain cat and dog.  
  
// ## The challenge:  
  
//  Create a file named array-filtering.js.  
  
//  In that file, define a variable named numbers that references this array:  
  
//     [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]  
  
//  Like above, define a variable named filtered that references the result of  
//  numbers.filter().  
  
//  The function that you pass to the .filter() method will look something  
//  like this:  
  
//     function evenNumbers (number) {  
//       return number % 2 === 0  
//     }  
  
//  Pay close attention to the syntax used throughout your solution. Use  
//  console.log() to print the filtered array to the terminal.  
  
//  Check to see if your program is correct by running this command:  
  
//     javascripting verify array-filtering.js  

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]  

const filtered = numbers.filter(
    function (number) {
        return number % 2 === 0     
        }
)
    
console.log(filtered)


// # FILTERED!

//  Good job filtering that array.

//  In the next challenge we will work on an
//  example of accessing array values.

//  Run javascripting in the console to choose
//  the next challenge.

// ────────────────────────────────────────────────
//  You have 9 challenges left.




