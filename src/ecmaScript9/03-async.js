// async generador

// si quitamos --> async no podemos uilizar --> await
// si quitamos  --> await la palabra --> .then no se reconoce
 async function* otroGenerador() {
yield await Promise.resolve(1);
yield await Promise.resolve(2);
yield await Promise.resolve(3);
}

const other = otroGenerador();
other.next().then(response => console.log(response.value));
other.next().then(response => console.log(response.value));
other.next().then(response => console.log(response.value));
console.log("hi");

/* RESULTADO
hi
1
2
3
*/
// --------------------------------------------

async function arrayFunc (array){
    for await (let value of array){
        console.log(value);
    }
}

const names = arrayFunc(['a','b','c']);
console.log('esto primero');

/* RESULTADO
esto primero
a
b
c
*/