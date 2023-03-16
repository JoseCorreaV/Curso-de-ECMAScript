const promise1 = new Promise((resolve, reject) => reject("error de la promesa"));
const promise2 = new Promise((resolve, reject) => resolve("resolve 1"));
const promise3 = new Promise((resolve, reject) => resolve("resolve 2"));

// imprime la primera promesa que sea verdadera o satisfactoria.
Promise.any([promise1, promise2, promise3])
// para mostrar el resultado exitosamente
.then(response => console.log(response)); // resolve 1