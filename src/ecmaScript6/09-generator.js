// el * es para indicar que es un generator
function* iterate(array){

   // con el for se rertornara(yield) los valores del array
for(let value of array){
// retornamos value con yield o con return
yield value;
}
}

const it = iterate(['oscar','david','ana','jeff','hi']);
// el metodo .next() recordara la posición. y value imprime el valor del elemento.
console.log(it.next().value)// oscar
// al llamar nuevamente el .next() este avancara de la posición anterior y recordara la posición actual
// value tomara esa posición actual y la imprime.
console.log(it.next().value)// david
console.log(it.next().value)// ana
console.log(it.next().value)// jeff
console.log(it.next().value)// hi
console.log(it.next().value)// undefined
console.log(it.next().value)//  undefined






/* foo es una variable que guarda un generador "*"
el generador retorna con yield.
*/
const foo = function*() {
  yield 'a';
  yield 'b';
  yield 'c';
};

/* variable str que almacena un string vacio */
let str = '';
/* en el for la variable val contendra eñ retorno de "of" 
el generador foo() */
for (var val of foo()) {
    /* cada ves que recorre con val de foo 
    se va almacenar en la variable str*/
  str = str + val;
}

/* imprimimos el valor de str que contiene todos los 
retornos del generador */
console.log(str);