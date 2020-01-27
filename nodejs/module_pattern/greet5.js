var greeting = '5. Hello World';

function greet() {
  console.log(greeting);
}

// revealing module pattern
// only defined functions are exposed for further usage
module.exports = {
  greet: greet,
};
