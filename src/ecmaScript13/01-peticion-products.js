// llamado aun API

// instalar esto en la ruta de trabajo => npm install node-fetch | para poder utilizar fetch

// importar fetch
import fetch from "node-fetch";

// await fetch => es una petición para obtener datos.
const response = await fetch('https://api.escuelajs.co/api/v1/categories');

// para recibir y transformar en un .json();
const products = await response.json();

// el export de productos para utilizar en otro document
export { products };