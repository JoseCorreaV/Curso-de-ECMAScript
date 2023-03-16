/* sirve en el caso de que  el array tengan
muchos elementos.

Spread syntax: desestructura -> deconstruye
Rest syntax: empaqueta -> construye

*/

// Arrays destructuración
let frut = [12,'peras'];
let [a,b] = frut;
console.log(a, frut[1]); // 12 peras

// objeto destructurado
let user = {ame:'peras', pass: 123};
let {ame,pass} = user;
console.log(ame, user.pass); // peras 123

/* ------------------------------------- */

// objetos -- spreed operator
let userr = {ame:'peras', pass: 123};
let country = 'NY'
// utilizar los ... puntos para unir objetos
let data = { id: 1, ...userr, country};
console.log(data);  // { id: 1, ame: 'peras', pass: 123, country: 'NY' }


// rest
function sum(num, ...values){
    console.log(values); // [ 1, 1, 1 ]
    console.log(num + values[0]); // 13
}

sum(12,1,1,1); // [ 1, 1, 1 ] 13



// extra
let kissEmoji = [..."👩‍❤️‍💋‍👩"]
console.log(kissEmoji)

let familyEmoji = [..."👨‍👩‍👦‍👦"]
console.log(familyEmoji)
