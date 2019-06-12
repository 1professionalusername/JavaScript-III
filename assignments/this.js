/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding - In global scope, 'this' points to the window. 
* 2. New binding - When function is invoked with new keyword the 'this' keyword inside function is bound to constructed item.
* 3. Explicit binding - When you state what 'this' keyword will reference using call() or apply().
* 4. Implicit binding - When a function is called or invoked, the object to the left of the dot is 'this'.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function greeting(name) {

    console.log(this);
    return `${name}`;
  }
  console.log(greeting("Holla, Holla, Holla!!!"));



// Principle 2

// code example for Implicit Binding

function cool(){
	return(this.number);
}

var obj = {
	number:2,
	cool:cool
};

console.log(obj.cool());

var MyObject = function (){
    this.name = 'MyObjectName';
    this.myProperty = 'property';
  };
 
  MyObject.prototype.doStuff = function (action) {
    return (this.name + ' is ' + action + '!');
  }
 
  var obj = new MyObject();
 
  console.log(obj.doStuff('awesome')); // prints 'MyObjectName is awesome!'


// Principle 3

// code example for New Binding

// Principle 4

// code example for Explicit Binding