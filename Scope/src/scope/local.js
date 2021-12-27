const helloWorld = () => {
    const hello = "Hello World";
    console.log(hello);
};

helloWorld();
console.log(hello);

var scope = "I'm global.";

const functionScope = () => {
    var scope = "I'm just a local.";
    const funct = () => scope;
    console.log(funct());
}

functionScope();