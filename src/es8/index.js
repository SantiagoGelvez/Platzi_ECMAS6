//  ######### Object.entries #############
const data = {
  frontend: "Santiago",
  backend: "Liliana",
  design: "Angelica",
  data: "Josue",
};

const entries = Object.entries(data);

console.log(entries);
console.log(entries.length);

// ########## Object.values ###########
const data = {
  frontend: "Santiago",
  backend: "Liliana",
  design: "Angelica",
  data: "Josue",
};

const valores = Object.values(data);
const llaves = Object.keys(data);

console.log(valores);
console.log(llaves);

// ######### Pading #########

const string = "hello";
console.log(string.padStart(10, "------------ "));
console.log(string.padEnd(15, " --------------"));
console.log("textos".padEnd(15, " -----------------"));

// ####### Async Await ########

// Creamos la función con la promesa
const helloworld = () => {
  return new Promise((resolve, reject) => {
    false
      ? setTimeout(() => resolve("Hello World!"), 3000)
      : reject(new Error("Test Error"));
  });
};

// Creamos la funcion async que obliga a resolver la promesa
const helloAsync = async () => {
  const hello = await helloworld();
  console.log(hello);
};

helloAsync(); // Invocamos la función async para obtener el resultado

// Forma de hacerlo con captura de errores
const helloAnotherAsync = async () => {
  try {
    const hello = await helloworld();
    console.log(hello);
  } catch (error) {
    console.log("Error");
  }
};

helloAnotherAsync();
