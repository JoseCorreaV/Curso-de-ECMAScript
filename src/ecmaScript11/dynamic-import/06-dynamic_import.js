// aca va la logica del boton creado

/* obtenemos el id => 'btn' del botton creado en el archivo html
mediante el comando ?> document.getElementById(name-id);
*/
const button = document.getElementById("btn");

/* 
llamamos la variable botton y le referimos una acciión ala dar click
con el comando => .addEventListener => como parametro creamos una función
async  donde importamos el archivo modulo que se exporto
y le decimos que me imprima la función hello que esta dentro el archivo modulo

*/
button.addEventListener("click", async function () {
    const module = await import("./Modulo.js");
    console.log(module);
    module.hello();
})