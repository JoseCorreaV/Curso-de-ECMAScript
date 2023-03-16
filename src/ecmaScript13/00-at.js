// recibir, trasnformar y demas..

const array = ["one", "two", "three", "four", "five", "six"];

console.log(array.length); // 6

// acceder al ultimo array sin saber cuantos hay => .at(-1)
console.log(array[array.length - 1]); // six
console.log(array.at(-1)); // six => una manera mas agil con el  => at 

/*
array.at(índice)

La utilidad más importante de 
este método es para manejar 
índices negativos. Algo que 
no se puede con la notación 
de corchetes.

const nombres = ["Andres", "Valeria", "Ana", "Ramiro", "Richard"]

nombres.at(-1) // "Richard"
nombres[-1] // undefined
nombres.at(-3) // "Ana"
nombres[nombres.length -1] // "Richard"

*/