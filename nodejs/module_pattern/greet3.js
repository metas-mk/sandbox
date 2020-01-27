function Greetr() {
  this.greeting = '3. Hello World';
  this.greet = function() {
    console.log(this.greeting);
  };
}

// creating a new objext via constructor
// module.exports will have the newly created object
module.exports = new Greetr();
