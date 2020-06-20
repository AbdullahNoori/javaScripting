   
//  # JAVASCRIPTING  
   
//  ## REVISING STRINGS (Exercise 5 of 20)  
   
//   You will often need to change the contents of a string.  
   
//   Strings have built-in functionality that allow you to inspect and  
//   manipulate their contents.  
   
//   Here is an example using the .replace() method:  
   
//      let example = 'this example exists'  
//      example = example.replace('exists', 'is awesome')  
//      console.log(example)  
   
//   Note that to change the value that the example variable references, we  
//   need to use the equals sign again, this time with the example.replace()  
//   method to the right of the equals sign.  
   
//  ## The challenge:  
   
//   Create a file named revising-strings.js.  
   
//   Define a variable named pizza that references this string: 'pizza is  
//   alright'  
   
//   Use the .replace() method to change alright to wonderful.  
   
//   Use console.log() to print the results of the .replace() method to the  
//   terminal.  
   
//   Check to see if your program is correct by running this command:  
   
//   javascripting verify revising-strings.js  
   
//  ─────────────────────────────────────────────────────────────────────────────  
//   Need help? View the README for this workshop:  
//   (https://github.com/workshopper/javascripting)  
   
//  ─────────────────────────────────────────────────────────────────────────────  
   
//    » To print these instructions again, run: javascripting print                 
//    » To execute your program in a test environment, run: javascripting run                                                                            
//      program.js                                                                  
//    » To verify your program, run: javascripting verify program.js                
//    » For help run: javascripting help                                            
   
// abduls-MacBook-Pro:Javascripting abdul$ javascripting verify revising-strings.js

// # JAVASCRIPTING

// ## REVISING STRINGS (Exercise 5 of 20)

// Error: Command failed: node "/Users/abdul/Desktop/BEW1.3/Javascripting/revising-strings.js"
// /Users/abdul/Desktop/BEW1.3/Javascripting/revising-strings.js:2
// pizza = pizza.replace('wonderful')
//       ^

// TypeError: Assignment to constant variable.
//     at Object.<anonymous> (/Users/abdul/Desktop/BEW1.3/Javascripting/revising-strings.js:2:7)
//     at Module._compile (internal/modules/cjs/loader.js:1144:30)
//     at Object.Module._extensions..js (internal/modules/cjs/loader.js:1164:10)
//     at Module.load (internal/modules/cjs/loader.js:993:32)
//     at Function.Module._load (internal/modules/cjs/loader.js:892:14)
//     at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:71:12)
//     at internal/main/run_main_module.js:17:47

//     at ChildProcess.exithandler (child_process.js:303:12)
//     at ChildProcess.emit (events.js:321:20)
//     at maybeClose (internal/child_process.js:1028:16)
//     at Socket.<anonymous> (internal/child_process.js:443:11)
//     at Socket.emit (events.js:321:20)
//     at Pipe.<anonymous> (net.js:668:12) {
//   killed: false,
//   code: 1,
//   signal: null,
//   cmd: 'node "/Users/abdul/Desktop/BEW1.3/Javascripting/revising-strings.js"'
// }
// abduls-MacBook-Pro:Javascripting abdul$ javascripting verify revising-strings.js

// # JAVASCRIPTING

// ## REVISING STRINGS (Exercise 5 of 20)

// ─────────────────────────────────────────────────────────────────────────────

// # O-oh, something isn't working.

// # But don't panic!

// ─────────────────────────────────────────────────────────────────────────────

// ## Check your solution:

//  Solution ===================

//  pizza is wonderful

//  Your Attempt ===================

//  pizza is alright

//  Difference ===================

//  pizza is wondealrfulight

// ## Additional troubleshooting:

//   » Did you type the name of the file correctly? You can check by running                                                                          
//     'ls revising-strings.js'. If you see 'ls: cannot access                                                                          
//     revising-strings.js: No such file or directory,' then perhaps the file                                                                          
//     doesn't exist, or has a different name, or is in a different directory.   
//   » Make sure you didn't omit any parens, or the compiler will not be able                                                                          
//     to parse it.                                                              
//   » Make sure you don't have any typos in the string itself.                  

// ─────────────────────────────────────────────────────────────────────────────
//  Need help? View the README for this workshop:
//  (https://github.com/workshopper/javascripting)

// ─────────────────────────────────────────────────────────────────────────────

//   » To print these instructions again, run: javascripting print               
//   » To execute your program in a test environment, run: javascripting run                                                                          
//     program.js                                                                
//   » To verify your program, run: javascripting verify program.js              
//   » For help run: javascripting help                                          

// ─────────────────────────────────────────────────────────────────────────────
//  Need help? View the README for this workshop:
//  (https://github.com/workshopper/javascripting)

// ─────────────────────────────────────────────────────────────────────────────

//   » To print these instructions again, run: javascripting print               
//   » To execute your program in a test environment, run: javascripting run                                                                          
//     program.js                                                                
//   » To verify your program, run: javascripting verify program.js              
//   » For help run: javascripting help                                          

// abduls-MacBook-Pro:Javascripting abdul$ javascripting verify revising-strings.js

// # JAVASCRIPTING

// ## REVISING STRINGS (Exercise 5 of 20)

//  Here's the official solution in case you want to compare notes:

// ─────────────────────────────────────────────────────────────────────────────

//     let pizza = 'pizza is alright'
//     pizza = pizza.replace('alright', 'wonderful')
//     console.log(pizza)

// ─────────────────────────────────────────────────────────────────────────────
// ─────────────────────────────────────────────────────────────────────────────

// # YES, PIZZA IS WONDERFUL.

//  Well done, with that .replace() method!

//  Next we will explore numbers.

//  Run javascripting in the console to choose the next challenge.

// ─────────────────────────────────────────────────────────────────────────────
//  You have 15 challenges left.

//  Type 'javascripting' to show the menu.

let pizza = 'pizza is alright'
pizza = pizza.replace('alright','wonderful')
console.log(pizza)
