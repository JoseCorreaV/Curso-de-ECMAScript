// Promesa. se ejutar hoy mañana o nunca.

const anoterFun = () =>{

    return new Promise((r, re) =>{
        if(true){
            // aca debe ir la acción
            r('Hi!');
        }else{
            re('NO');
        }
    })
    
}

// esto si o si debe ir abajo
anoterFun()
 .then(resp => console.log(resp))
 .catch(err => console.log(err))
/* mostrar y tener una función anonima para 
hacer una acción ya termino. 
*/
 .finally(()=> console.log('ya finalizo'));