// si todo ha sido resuelto

// Promesa.

//  falla la primera
const promise1 = new Promise((resolve, reject) => reject("falla-error"));
// segunda y tercera es cierta.
const promise2 = new Promise((resolve, reject) => resolve("resolve"));
const promise3 = new Promise((resolve, reject) => resolve("resolve2"));

// pasamos todas las promesas creadas
Promise.allSettled([promise1, promise2, promise3])
// para poder mostrar la info correctamente
.then(response => console.log(response));

/*   RESULTADO
[
  { status: 'rejected', reason: 'falla-error' },
  { status: 'fulfilled', value: 'resolve' },
  { status: 'fulfilled', value: 'resolve2' }
]

rejected => fallo la promesa.
fulfilled => se ejecuto con exito

*/