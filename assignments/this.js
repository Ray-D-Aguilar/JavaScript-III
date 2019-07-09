/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding: "this" is given the value of the window/console
* 2. Implicit Binding: Whatever is to the left of a dot when calling a function, that is "this". 
* 3. Explicit Binding
* 4. New Binding
*
* write out a code example of each explanation above
*/

// Principle 1
// console.log(this);
// code example for Window Binding

// Principle 2
 const me = {
     name: 'Ray',
     age: 23,
     sayGreeting: () => {
        console.log(`Hello! My name is ${this.name}. I'm ${this.age} years old.`)
     }
 }
me.sayGreeting();
// code example for Implicit Binding

// Principle 3

// code example for New Binding

// Principle 4

// code example for Explicit Binding