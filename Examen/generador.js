/*
En la guardería de Michis "Michilango", 
están registrando nuevos michis, pero 
necesitan una forma de identificarlos.

Tu tarea será proveer de una función 
getId() que se encargue de generar dichos 
identificadores y, a través de un método 
.next() se pueda pasar al siguiente 
identificador, y a través de la propiedad 
.value se pueda obtener el valor del nuevo 
identificador.

Cada vez que llame a la función de la siguiente 
forma debería retornarme un identificador
nuevo y completamente diferente:

const id = getId();
id.next().value

*/

export function* getId() {
  var michiId = 1;

  while (true) {
    yield michiId++;
  }

}
