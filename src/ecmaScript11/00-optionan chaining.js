// para framework y liberia
// validar y no romper el flujo de la app
const users = {
    gndx: {
        country: "MX"
    },
    ana: {
        country: "CO"
    }
}
// acceder a cada uno de los hijos
// console.log(users.gndx.country); // "MX"
// para un objeto que existia pero se elimino

// ? significa si existe bebeloper en user ?
console.log(users?.bebeloper?.country);// undefined