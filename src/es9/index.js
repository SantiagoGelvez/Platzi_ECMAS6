// ########## Operador de reposo ###########

const obj = {
  name: "Santiago",
  age: "27",
  country: "CO",
};

let { name, ...properties } = obj;
console.log(name);
console.log(properties);

let newObject = properties;
console.log(Object.values(newObject));

// ####### Propiedad de propagación ###########

const obj2 = {
  name: "Santiago",
  age: "27",
};

const obj3 = {
  ...obj2,
  country: "CO",
};

console.log(obj3);

// ########## promise .finally ##########

const helloWorld = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve("Hello World"), 3000)
      : reject(new Error("Test Error"));
  });
};

helloWorld()
  .then((response) => console.log(response))
  .catch((error) => console.log(error))
  .finally(() => console.log("Finalizó"));

// ########## Grupo de regex ###########

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec("2022-01-19");
const year = match[1];
const month = match[2];
const day = match[3];

console.log(`Dia ${day} del mes ${month} del año ${year}`);
console.log(match[0]);
