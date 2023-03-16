// SI LA FUNCION NO TIENE default cuando se llame en otro archivo
// se deben poner { } antes del import

// sin embargo podemos agregar default a la función

export default async function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([{
                movie: "El despertar de los michis",
                year: 2021,
                protagonist: "Mr. Michi"
            }, {
                movie: "101 Michis",
                year: 2019,
                protagonist: "Tommy Michiguire"
            }]);
        }, 1000);
    });
}