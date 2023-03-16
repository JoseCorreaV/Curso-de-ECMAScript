const  st = 'hi';

// el metodo .padStart rellena al principio de la variable (st)
// dependiendo del valor numerico que enviemos en el metodo 
console.log(st.padStart(4,'_'));// __hi

// rellena al final
console.log(st.padEnd(4,'_'));// hi__