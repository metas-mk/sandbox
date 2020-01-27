function Greetr() {
  this.greeting = '4. Hello World';
  this.greet = function() {
    console.log(this.greeting);
  };
}

// module.exports will have the constructor itself
module.exports = Greetr();
