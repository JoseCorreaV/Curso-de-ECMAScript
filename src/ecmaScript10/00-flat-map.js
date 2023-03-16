const array = [1,1,2,3,5, [1,4,5,5, [1,2,3]]];

/* flat(3"profundidad de los niveles") --> retorna
un array con sub-array concatenados
*/
console.log(array.flat(3)); 
/* 
[
  1, 1, 2, 3, 1,
  4, 5, 5, 1, 2,
  3
]
*/


// --------------------------------

//flatMap
const array2 = [1,2,3,4,5];
console.log(array2.flatMap(v => [v, v *3])); 

/* 
[
 1, 3,  2, 6,  3,
  9, 4, 12, 5, 15
]
*/

/* array2.flatMap(v => [v, v *3])
//  is equivalent to

 const n = array2.length;
const acc = new Array(n * 3);
for (let i = 0; i < n; i++) {
  const x = array2[i];
  acc[i * 3] = x;
  acc[i * 3 + 1] = x * 3;
  console.log(acc);
}
*/