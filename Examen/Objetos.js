/* 
En este deafío recibirás dos objetos JSON por parámetros.

Usando el spread operator, deberás 
combinar ambos objetos en uno solo. 
Es posible que no se te envíe alguno de 
los dos objetos o ninguno, por lo que 
deberás usar estos por defecto, 
en su respectivo orden:

*/

function solution(json1 = { name: "Mr. Michi", food: "Pescado"}, 
json2 = { age: 12, color: "Blanco"}) { 
var combine = {...json1, ...json2};
return combine;
}


// otro

function solution(json1, json2) {
json1 = json1 || { name: "Mr. Michi", food: "Pescado" };
json2 = json2 || { age: 12, color: "Blanco" };
return { ...json1, ...json2 };
}




