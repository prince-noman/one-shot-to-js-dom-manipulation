// var x = 5;
// x = 10;
// var x = 50;
// console.log(x);

// let x = 5;
// x = 4;
// let y = 7;
// console.log(y);

// const x = 5;
// x = 6;
// const x = 9;
// console.log(x);

// JavaScript has 8 Datatypes
// 1. String => 'Apple'
// 2. Number => 5/6.5
// 3. Bigint
// 4. Boolean true/false
// 5. Undefined
// 6. Null
// 7. Symbol
// 8. Object

// The Object Datatype
// The object data type can contain:

// 1. An object
// const person = { firstName: "John", lastName: "Doe" };

// 2. An array
// const cars = ["Saab", 5, "Volvo", "BMW"];
// console.log(cars);
// 3. A date
// const date = new Date("2022-03-25");
// console.log(date);
// let x;
// console.log(x);

// let x = ["apple", "orange"];
// console.log(typeof x);

//Array

// const cars = ["Saab", "Volvo", "BMW"];

// console.log(cars[2]);
// cars[0] = "Toyota";
// console.log(cars);

// JavaScript Array pop()
// cars.pop();

// console.log(cars);

// JavaScript Array push()
// console.log(cars);
// cars.push("Toyota");
// console.log(cars);

// console.log(cars.length);
// cars.shift();
// console.log(cars);
// cars.unshift("Toyota");
// console.log(cars);

// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   id: 5566,
//   fullName: function () {
//     return this.firstName + " " + "Apple";
//   },
// };
// // console.log(person.firstName);
// // console.log(person["age"]);
// console.log(person.fullName());

// for (let i = 101; i <= 100; i++) {
//   console.log("Prince");
// }

// const person = { fname: "John", lname: "Doe", age: 25 };

// for (let info in person) {
//   console.log(person[info]);
// }

// const car = ["BMW", "Volvo", "Mini"];

// for (let x of car) {
//   console.log(x);
// }

// let hour = 5;
// if (hour < 18) {
//   greeting = "Good day";
// } else {
//   greeting = "Good evening";
// }

// Conditional (Ternary) Operator
// hour < 18 ? (greeting = "Good day") : (greeting = "Good evening");
// console.log(greeting);

// Nullish Coalescing Operator (??)
// => The ?? operator returns the first argument if it is not nullish (null or undefined).
// * I have updated this topic for your better understanding
// let name = null;
// let text = "Name is missing";
// let x = name ?? text;
// console.log(x);

// +, -,/,*
// function multiply(a, b) {
//   return a * b;
// }
// console.log(multiply(2, 4));
// console.log(multiply(5, 10));
