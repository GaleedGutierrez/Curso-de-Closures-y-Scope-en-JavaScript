var hello = "Hello";
var hello = "Hello +";
let world = "Hello World";
const helloWorld = "Hello World!"

const anotherFunction = () => {
    console.log(hello);
    console.log(world);
    console.log(helloWorld);
}

anotherFunction();


const helloWord = () => globalVar = "I'm global.";

helloWord();

console.log(globalVar);

const anotherFunction = () => {var localVar = globalVar = "I'm global."}

anotherFunction();
console.log(localVar);

const anotherFunction = () => {var localVar = "I'm local", globalVar = "I'm global."}

anotherFunction();
console.log(globalVar);
