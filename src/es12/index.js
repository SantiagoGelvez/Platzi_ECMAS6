// ########### .replaceAll #################

const string = 'Javascript es un gran lenguaje, con Javascript crece la web';
const replaceString = string.replace('Javascript', 'Python');
console.log(replaceString);
const replaceAllString = string.replaceAll('Javascript', 'Python');
console.log(replaceAllString);

// ########### Metodos privados ###########

class MyClass{
    #view(){
        console.log('Hola Mundo!');
    }
}

const myView = new MyClass;
myView.view();

// ############ Promise.any #############

const promise1 = new Promise((resolve, reject) => reject('1'));
const promise2 = new Promise((resolve, reject) => resolve('2'));
const promise3 = new Promise((resolve, reject) => resolve('3'));

Promise.any([promise1, promise2, promise3])
.then(response => console.log(response));

// ############ WeakRef ###########

class AnyClass{
    constructor(element){
        this.ref = new WeakRef(element)
    }
    {...}
}

// ####### Operadores de asignacion lógicos ##########

let istrue = true;
let isfalse = false;
console.log(istrue &&= isfalse);

let istrue = true;
let isfalse = false;
console.log(istrue ||= isfalse);

let isany = undefined;
let isfalse = false;
console.log(isany ??= isfalse);