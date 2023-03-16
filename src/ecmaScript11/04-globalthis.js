// palabras globales

console.log('ejecutar en el navegador'+window); // navegador
console.log('ejecutar en node'+global);  // node
console.log('ejecutar en el navegador'+self);// webworker


/* expone la información segun el contexto
donde esta siendo ejecutada --> ayuda a facilitar
la portabilidad del codigo de entorno a entorno
sin tener en cuenta las validaciones..
*/
console.log(globalThis);