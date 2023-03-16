// como era antes
/*
function newUser (name,age,country){
var name = name || 'Nombre1';
var age = age || 12;
var country = country || 'Nombre3';
console.log(name,age,country);
} 

newUser(); // Nombre1 12 Nombre3
newUser('Nombre3',22,'65street'); // Nombre3 22 65street
*/


// función mas opima
function newAdmin (name = 'Nombre',age = 13 ,country='newYork'){
     console.log(name,age,country);
    }

newAdmin(); // Nombre 13 newYork
newAdmin('Nombre3',22,'65street'); // Nombre3 22 65street
