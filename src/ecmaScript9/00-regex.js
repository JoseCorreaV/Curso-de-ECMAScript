const regex = /(\d{4})-(\d{2})-(\d{2})/;
// matchers para saber si cumple

/* exec --> ejecuta una busqueda en un string
y retorna un array que contiene los resultados de la
busqueda
*/
const matchers = regex.exec("2022-01-01");

// consola.table para mostrar una tabla en la consola
console.table(matchers);

/* RESULTADO
┌─────────┬──────────────┐
│ (index) │    Values    │
├─────────┼──────────────┤
│    0    │ '2022-01-01' │
│    1    │    '2022'    │
│    2    │     '01'     │
│    3    │     '01'     │
│  index  │      0       │
│  input  │ '2022-01-01' │
│ groups  │  undefined   │
└─────────┴──────────────┘
*/