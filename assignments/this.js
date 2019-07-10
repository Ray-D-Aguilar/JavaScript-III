/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*    

        WINDOW BINDING
* 1. Window/Global Object Binding: "this" is given the value of the window/console

        IMPLICIT BINDING
* 2. Implicit Binding: Whatever is to the left of a dot when calling a function, that is "this".

        EXPLICIT BINDING
* 3. Explicit Binding: This is defined when the call or apply method is used.
        
NEW BINDING
* 4. New Binding: when a constructor function is used, you use the "new" keyword to 
implement and apply your newly created properties to a "this"/object.
*
* write out a code example of each explanation above
*/

// Principle 1
 console.log(this);
// code example for Window Binding

// Principle 2
const me = {
    name: 'Ray',
    age: 23,
    sayGreeting: function(greeting) {
       console.log(`${greeting} My name is ${this.name}. I'm ${this.age} years old.`)
       console.log(this)
    }
}
me.sayGreeting("Hello! ");

// code example for Implicit Binding

// Principle 3
function Person(hugger) {
    this.greeting = 'Hello ';
    this.hugger = hugger;
    this.speak = () => {
        console.log(this.greeting + this.hugger);
        console.log(this);
    }
}

const ray = new Person('Tiah');
const tiah = new Person('Ray');

ray.speak();
tiah.speak();
// code example for New Binding

// Principle 4

ray.speak.call(tiah);
 
// code example for Explicit Binding