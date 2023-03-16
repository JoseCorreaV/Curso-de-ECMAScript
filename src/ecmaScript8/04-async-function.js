/*
Función constante fasyn con las arrow
 */
const fasyn = () =>{
    return new Promise((resolve, reject) =>{
       /* if terneario permite no utilizar las palabras
         reservadas y retornar directamente los elementos.
         sim embargo el if retonara a los 2000 = 2 sg despues de haber
         compilado el codigo debido al  => setTimeout */

        (true)
         ? setTimeout(() => resolve('AsynC!!'),2000)
         : reject(new Error('Error!'));
    });
}

// sintaxis de la palabra reservada Async y await

/* ejecuta todo y despues de 2 sg ejecuta la función 
otrafn que contiene await fasyn. + un console.log a
*/
const otrafn = async () => {
const some = await fasyn();
console.log(some);
console.log('hi');
}

/*
para imprimir el contenido es necesario el
await fasyn()

console.log(await fasyn());
*/

console.log('antes');
otrafn();
console.log('despues');

/* 
antes
despues
AsynC!!
hi
*/