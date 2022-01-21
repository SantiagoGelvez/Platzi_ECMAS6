// ############## module import ############

const button = document.getElementById("file");
button.addEventListener("click", async function () {
  const myModulo = await import("./file.js");
  myModulo.hello();
});

// ########### BigInt ############

const bigNumber1 = 9007199254740992n;
const bugNumber2 = BigInt(9007199254740992);
console.log(bigNumber1);
console.log(bugNumber2);

// ########### Promises allSettled

const promise1 = new Promise((resolve, reject) => reject("1. reject"));
const promise2 = new Promise((resolve, reject) => resolve("2. Resolve"));
const promise3 = new Promise((resolve, reject) => resolve("3 Resolve"));

Promise.allSettled([promise1, promise2, promise3]).then((response) =>
  console.log(response)
);

// ######## globalThis ##########

console.log(window);
console.log(globalThis);

// ####### Operador Null ?? #######

const myNulo = 'Valor no default' ?? 'Default value';
console.log(myNulo);
const myNulo2 = null ?? 'Default value';
console.log(myNulo2);

// ######## Optional chaining ##########

const user = {};
console.log(user.profile.email);

const user2 = {}
console.log(user2?.profile?.email);

if(user2?.profile?.email){
    console.log('email');
}
else{
    console.log('fail');
}