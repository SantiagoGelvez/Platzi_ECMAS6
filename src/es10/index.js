// ########## Metodo flat() ##########

const array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];
console.log(array.flat(2));

// ########## Metodo flatMap() ########

const array = [1, 2, 3, 4, 5];
console.log(array.map((value) => [value, value ** 2])); // Resultado sin flat
console.log(array.flatMap((value) => [value, value ** 2])); // Resultado con flat

// ######## Metodos .trimStart() y .trimEnd() #########

let myStringStart = "          hello world!";
let myStringEnd = "hello world!         ";
let myStringTotal = "        hello world!      ";
console.log(myStringStart);
console.log(myStringStart.trimStart());
console.log(myStringEnd);
console.log(myStringEnd.trimEnd());
console.log(myStringTotal);
console.log(myStringTotal.trimStart().trimEnd());

// ############ Optional catch building ############

// Esto es mas una definición.
// Antes de ES10
try {
  intento;
} catch (error) {
  error;
}

// Despues de ES10 (eliminamod el (error) despues del catch)
try {
  intento;
} catch {
  error;
}

// ########### Método .fromEntries ###########

const myArray = [['name', 'Santiago'], ['age', 27]];
const myObj = Object.fromEntries(myArray);
console.log(myObj);

// ########## Objeto de tipo simbolo ##########

let mySimbol = `My description`;
let symbl = Symbol(mySimbol);
console.log(mySimbol);
console.log(symbl);
console.log(symbl.description);
console.log(typeof(mySimbol));
console.log(typeof(symbl));