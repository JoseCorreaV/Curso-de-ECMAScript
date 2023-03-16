// de esta manera se declara y se inicializa
var apellido = 'dav';
// reasignar la variable
apellido = 'pedro';
console.log(apellido); // mnuestra oscar.
/* ----------------------------------   */ 

let ape = 'manz';
ape = 'pera';
console.log(ape); // muestra pera

/* ----------------------------------   */ 

const animals = 'dog';
animals = 'cats';
console.log(animals); /* Error debido a que no se puede  
reasignar la variable*/

/* ----------------------------------   */ 

const pruebaVariables = () => {
if(true){
var a1 = 'a1'; // global
let a2 = 'a2'; // dentro de bloque
const a3 = 'a3'; // dentro de bloque
}
console.log(a1);
console.log(a2);
console.log(a3);
}

pruebaVariables();
