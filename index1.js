// function declaration

function greet(name) {
    console.log (`Hello, ${name}!`) ;
}

// console.log(greet("Alice")); 
greet("Bob"); // fuction excution or innvoking

// function expression

const greetExpression = function(name) {
    console.log(`Hello, ${name}!`);
}

// allow function 

const greetArrow = (name) => {
    console.log(`Hello, ${name}!`);
}

const hellow = (name) => `Hello, ${name}!`;
const add = (a, b) => a + b;

const greet2 = name => `Hello, ${name}!`;


// parementer

function formatPrice(amount, currency) {
  return `${amount.toLocaleString()} ${currency}`
}

console.log(formatPrice(15000));   


function sum(...numbers) {      
  let total = 0
  for (const n of numbers) total += n
  return total
}

console.log(sum(1));


// callback function and higher order function 

// these is a callback function 

function repeat(times, action) {
  for (let i = 1; i <= times; i++) action(i)
}

repeat(3, (n) => console.log(`Round ${n}`))

// console.log(world);
// let world = "world";
// console.log(hello);
// let hello = "hello";


function createCounter() {
  let count = 1                  // private variable
  return function () {
    count++
    return count
  }
}

const counter = createCounter()

console.log(counter());   