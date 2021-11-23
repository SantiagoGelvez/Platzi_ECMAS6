// ############ Parametros ############

// Valores por default de parametros antes de ES6

function newFunction1(name, age, country) {
  var name = name || "Santiago";
  var age = age || 27;
  var country = country || "CO";
  console.log(name, age, country);
}

// Valores por default de parámetros despues de ES6

function newFunction2(name = "Santiago", age = 27, country = "CO") {
  console.log(name, age, country);
}

newFunction1();
newFunction2("Lorena", "28", "MX");
newFunction2();
newFunction2("Diana", "26", "EU");

// ############# Concatenación ##########

let hello = "Hello";
let world = "World";
// Antes de ES6
let phrase1 = hello + " " + world;
console.log(phrase1);
// Despues de ES6
let phrase2 = `${hello} ${world}`;
console.log(phrase2);

// ############# Multilínea ###############

// Antes de ES6

let lorem =
  "Donec sollicitudin molestie malesuada. \n" +
  "Curabitur aliquet quam id dui posuere blandit. \n" +
  "Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.";

console.log(lorem);

// Despues de ES6

let lorem2 = `Curabitur aliquet quam id dui posuere blandit. 
Nulla quis lorem ut libero malesuada feugiat. 
Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.`;
console.log(lorem2);

// ############# Desestructuración #############

let person = {
  name: "Santiago",
  age: 27,
  country: "CO",
};

// Antes de ES6
console.log(person.name, person.age);

// Despues de ES6
let { name, age, country } = person;
console.log(name, age);

// ############## Sread Opertator ############

let team1 = ["Camilo", "Juan Jose", "Natalia"];
let team2 = ["David", "Marcela", "Diana"];

let education = ["Ramiro", ...team1, ...team2];

console.log(education);
