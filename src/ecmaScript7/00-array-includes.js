let numbers = [1,3,4,6,7,8]

// la función variable.includes(valor) retorna true o false
// dependiendo de si existe o no la variable
console.log(numbers.includes(4)); //true

const abc = ['a','b','c'];
console.log(abc.includes('d')); //false
// tienen que ser (===) extacamente iguales los string
// debido al uso de Mayus and Minus
console.log(abc.includes('A')); //false
