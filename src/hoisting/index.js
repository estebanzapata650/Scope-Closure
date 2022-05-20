// Lo que se hace es tomar ‘registros’ en memoria de donde está cada declaración.

// Levanta las declaraciones.
a = 2;
var a;
console.log(a); // 2

// var : asigna la referencia undefined (si de acá viene el famoso undefined)
console.log(b); // undefined
var b = 2;

// función: guarda un registro con la función entera(por eso la podemos llamar antes de que este creada)
nameOfDog('Luna'); // Luna
function nameOfDog(name){
    console.log(name);
}

// let/const: asigna la referencia uninitialized(declarado pero no inicializado)
nameOfPing('BER'); // Cannot access 'nameOfPing' before initialization
const nameOfPing = (name) => {
    console.log(name);
}
