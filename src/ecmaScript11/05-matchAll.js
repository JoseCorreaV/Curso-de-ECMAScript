// forma donde generamos filtros o reglas 

// validar que una password cumpla con direfentes objetivos
// validar que un input si llenamos un correo electronico valido


// filtrar la palabra apple
const regex = /\b(Apple)+\b/g;

const fruit = "melon,Banana,Apple,Kiwi,";

for (const match of fruit.matchAll(regex)) {
    console.log(match);
}
/* 
[  RESULTADO
  'Apple',
  'Apple',
  index: 13, --> POSICIÓN
  input: 'melon,Banana,Apple,Kiwi,',
  groups: undefined
]
*/ 