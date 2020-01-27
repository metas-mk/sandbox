//Module Pattern 1: Overriding exports with a function
//require returns an empty module.exports object
//here that object is overwritten
module.exports = function() {
  console.log('1. Hello world');
};
