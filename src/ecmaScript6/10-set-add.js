// set() --> retorna la cantidad de elementos de la variable list
const li = new Set();
/// .add agrega un elemento, valor o incluso otro .add
li.add('item 1');
li.add('item 2').add('item 3');

console.log(li); // imprime los elementos agregados a la lista.
// {'item 1','item 2','item 3'}
