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

// ############# Propiedad de objetos mejorada #############

let name = "Santiago";
let age = 27;

// Antes de ES6
let obj = { name: name, age: age };
console.log(obj);

// Despues de ES6
let obj2 = { name, age };
console.log(obj2);

// ############# Arrow Functions ##############

let persons = [
  { name: "Santiago", age: "27" },
  { name: "Lucas", age: "34" },
];

// Antes de ES6
let listOfNames1 = persons.map(function (item) {
  console.log(item.name);
});

// Despues de ES6
let listOfNames2 = persons.map((item) => console.log(item.name));

// Mas formas de utilizar las arrow functions

const listOfNames3 = (name, age, country) => {
  skip; // Aqui va el código que necesitemos y donde vamos a usar los parámetros
};

const listOfNames4 = (name) => {
  skip; // Aquí va el código que necesitemos y donde usemos el parametro name (puede ser cualquiera)
};

const square = (num) => num * num;
console.log(square(5));

// ########## Promesas ############

const myPromise = () => {
    return new Promise((yesPromise, noPromise) => {
        if(true){
            yesPromise('Hey!!');
        }
        else{
            noPromise('Ups!!');
        }
    });
}

myPromise()
    .then(truePromise => console.log(truePromise))
    .catch(falsePromise => console.log(falsePromise))