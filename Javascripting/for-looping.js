// ## FOR LOOP (Exercise 10 of 20)  
   
//   For loops allow you to repeatedly run a block of code a certain number of  
//   times. This for loop logs to the console ten times:  
   
//      for (let i = 0; i < 10; i++) {  
//        // log the numbers 0 through 9  
//        console.log(i)  
//      }  
   
//   The first part, let i = 0, is run once at the beginning of the loop. The  
//   variable i is used to track how many times the loop has run.  
   
//   The second part, i < 10, is checked at the beginning of every loop  
//   iteration before running the code inside the loop. If the statement is  
//   true, the code inside the loop is executed. If it is false, then the loop  
//   is complete. The statement i < 10; indicates that the loop will continue  
//   as long as i is less than 10.  
   
//   The final part, i++, is executed at the end of every loop. This increases  
//   the variable i by 1 after each loop. Once i reaches 10, the loop will  
//   exit.  
   
//  ## The challenge:  
   
//   Create a file named for-loop.js.  
   
//   In that file define a variable named total and make it equal the number 0.  
   
//   Define a second variable named limit and make it equal the number 10.  
   
//   Create a for loop with a variable i starting at 0 and increasing by 1 each  
//   time through the loop. The loop should run as long as i is less than  
//   limit.  
   
//   On each iteration of the loop, add the number i to the total variable. To  
//   do this, you can use this statement:  
   
//      total += i  
   
//   When this statement is used in a for loop, it can also be known as an  
//   accumulator.  Think of it like a cash register's running total while each  
//   item is scanned and added up.  For this challenge, you have 10 items and  
//   they just happen to be increasing in price by 1 each item (with the first  
//   item free!).  
   
//   After the for loop, use console.log() to print the total variable to the  
//   terminal.  
   
//   Check to see if your program is correct by running this command:  
   
//      javascripting verify for-loop.js  
   

let total = 0

const limit = 10

for (let i = 0; i < limit; i++) {
    total += i
}
console.log(total)


// # JAVASCRIPTING  
   
// ## FOR LOOP (Exercise 10 of 20)  
  
//  For loops allow you to repeatedly run a block of code a certain number of  
//  times. This for loop logs to the console ten times:  
  
//     for (let i = 0; i < 10; i++) {  
//       // log the numbers 0 through 9  
//       console.log(i)  
//     }  
  
//  The first part, let i = 0, is run once at the beginning of the loop. The  
//  variable i is used to track how many times the loop has run.  
  
//  The second part, i < 10, is checked at the beginning of every loop  
//  iteration before running the code inside the loop. If the statement is  
//  true, the code inside the loop is executed. If it is false, then the loop  
//  is complete. The statement i < 10; indicates that the loop will continue  
//  as long as i is less than 10.  
  
//  The final part, i++, is executed at the end of every loop. This increases  
//  the variable i by 1 after each loop. Once i reaches 10, the loop will  
//  exit.  
  
// ## The challenge:  
  
//  Create a file named for-loop.js.  
  
//  In that file define a variable named total and make it equal the number 0.  
  
//  Define a second variable named limit and make it equal the number 10.  
  
//  Create a for loop with a variable i starting at 0 and increasing by 1 each  
//  time through the loop. The loop should run as long as i is less than  
//  limit.  
  
//  On each iteration of the loop, add the number i to the total variable. To  
//  do this, you can use this statement:  
  
//     total += i  
  
//  When this statement is used in a for loop, it can also be known as an  
//  accumulator.  Think of it like a cash register's running total while each  
//  item is scanned and added up.  For this challenge, you have 10 items and  
//  they just happen to be increasing in price by 1 each item (with the first  
//  item free!).  
  
//  After the for loop, use console.log() to print the total variable to the  
//  terminal.  
  
//  Check to see if your program is correct by running this command:  
  
//     javascripting verify for-loop.js  
  
// ─────────────────────────────────────────────────────────────────────────────  
//  Need help? View the README for this workshop:  
//  (https://github.com/workshopper/javascripting)  
  
// ─────────────────────────────────────────────────────────────────────────────  
  
//   » To print these instructions again, run: javascripting print                 
//   » To execute your program in a test environment, run: javascripting run                                                                            
//     program.js                                                                  
//   » To verify your program, run: javascripting verify program.js                
//   » For help run: javascripting help                                            
  
// abduls-MacBook-Pro:Javascripting abdul$ javascripting verify functions.js 

// # JAVASCRIPTING

// ## FOR LOOP (Exercise 10 of 20)

// Error: Command failed: node "/Users/abdul/Desktop/BEW1.3/Javascripting/functions.js"
// /Users/abdul/Desktop/BEW1.3/Javascripting/functions.js:37
// function eat('food') {
//             ^^^^^^

// SyntaxError: Unexpected string
//    at wrapSafe (internal/modules/cjs/loader.js:1060:16)
//    at Module._compile (internal/modules/cjs/loader.js:1108:27)
//    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1164:10)
//    at Module.load (internal/modules/cjs/loader.js:993:32)
//    at Function.Module._load (internal/modules/cjs/loader.js:892:14)
//    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:71:12)
//    at internal/main/run_main_module.js:17:47

//    at ChildProcess.exithandler (child_process.js:303:12)
//    at ChildProcess.emit (events.js:321:20)
//    at maybeClose (internal/child_process.js:1028:16)
//    at Process.ChildProcess._handle.onexit (internal/child_process.js:286:5) {
//  killed: false,
//  code: 1,
//  signal: null,
//  cmd: 'node "/Users/abdul/Desktop/BEW1.3/Javascripting/functions.js"'
// }
// abduls-MacBook-Pro:Javascripting abdul$ javascripting verify functions.js 

// # JAVASCRIPTING

// ## FOR LOOP (Exercise 10 of 20)

// Error: Command failed: node "/Users/abdul/Desktop/BEW1.3/Javascripting/functions.js"
// /Users/abdul/Desktop/BEW1.3/Javascripting/functions.js:37
// function eat('food') {
//             ^^^^^^

// SyntaxError: Unexpected string
//    at wrapSafe (internal/modules/cjs/loader.js:1060:16)
//    at Module._compile (internal/modules/cjs/loader.js:1108:27)
//    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1164:10)
//    at Module.load (internal/modules/cjs/loader.js:993:32)
//    at Function.Module._load (internal/modules/cjs/loader.js:892:14)
//    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:71:12)
//    at internal/main/run_main_module.js:17:47

//    at ChildProcess.exithandler (child_process.js:303:12)
//    at ChildProcess.emit (events.js:321:20)
//    at maybeClose (internal/child_process.js:1028:16)
//    at Process.ChildProcess._handle.onexit (internal/child_process.js:286:5) {
//  killed: false,
//  code: 1,
//  signal: null,
//  cmd: 'node "/Users/abdul/Desktop/BEW1.3/Javascripting/functions.js"'
// }
// abduls-MacBook-Pro:Javascripting abdul$ javascripting verify for-looping.js 

// # JAVASCRIPTING

// ## FOR LOOP (Exercise 10 of 20)

// Here's the official solution in case you want to compare notes:

// ─────────────────────────────────────────────────────────────────────────────

//    let total = 0
//    const limit = 10
   
//    for (let i = 0; i < limit; i++) {
//      total += i
//    }
   
//    console.log(total)
//    JAVASCRIPTING  
   
// //    ## FOR LOOP (Exercise 10 of 20)  
     
// //     For loops allow you to repeatedly run a block of code a certain number of  
// //     times. This for loop logs to the console ten times:  
     
// //        for (let i = 0; i < 10; i++) {  
// //          // log the numbers 0 through 9  
// //          console.log(i)  
// //        }  
     
// //     The first part, let i = 0, is run once at the beginning of the loop. The  
// //     variable i is used to track how many times the loop has run.  
     
// //     The second part, i < 10, is checked at the beginning of every loop  
// //     iteration before running the code inside the loop. If the statement is  
// //     true, the code inside the loop is executed. If it is false, then the loop  
// //     is complete. The statement i < 10; indicates that the loop will continue  
// //     as long as i is less than 10.  
     
// //     The final part, i++, is executed at the end of every loop. This increases  
// //     the variable i by 1 after each loop. Once i reaches 10, the loop will  
// //     exit.  
     
// //    ## The challenge:  
     
// //     Create a file named for-loop.js.  
     
// //     In that file define a variable named total and make it equal the number 0.  
     
// //     Define a second variable named limit and make it equal the number 10.  
     
// //     Create a for loop with a variable i starting at 0 and increasing by 1 each  
// //     time through the loop. The loop should run as long as i is less than  
// //     limit.  
     
// //     On each iteration of the loop, add the number i to the total variable. To  
// //     do this, you can use this statement:  
     
// //        total += i  
     
// //     When this statement is used in a for loop, it can also be known as an  
// //     accumulator.  Think of it like a cash register's running total while each  
// //     item is scanned and added up.  For this challenge, you have 10 items and  
// //     they just happen to be increasing in price by 1 each item (with the first  
// //     item free!).  
     
// //     After the for loop, use console.log() to print the total variable to the  
// //     terminal.  
     
// //     Check to see if your program is correct by running this command:  
     
// //        javascripting verify for-loop.js  
     
// // // ─────────────────────────────────────────────────────────────────────────────
// // // ─────────────────────────────────────────────────────────────────────────────

// // // # THE TOTAL IS 45

// // // That is a basic introduction to for loops, which are handy in a number of
// // // situations, particularly in combination with other data types like strings
// // // and arrays.

// // // In the next challenge we'll start working with arrays.

// // // Run javascripting in the console to choose the next challenge.