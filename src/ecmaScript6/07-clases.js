/* 
declarar una clase
class User{};
*/

/* 
Instanciar una clase
const newUser = new User();
*/

class user{
    // metodos
    greeting(){
        return 'hi';
    }
};

// instancia
const grdx = new user();
// llamar el metodo
console.log(grdx.greeting()); // hi
// herencia - creamos una nueva instancia
const bylogger = new user();
console.log(bylogger.greeting()); // hi --> debido a que toma el valor del metodo


class user{
    // constructor
    constructor(){
        console.log("Nuevo usrer"); 
    }
    // metodo
    greeting(){
        return 'hi';
    }
};

const devid = new user(); /* llama a la clase y ejecuta
el "constructor"
*/


// uso de  --> this

class user{
    // constructor
    constructor(name){
        this.name = name; 
    }

    // metodos
    speak(){
        return 'di hello';
    }
    greeting(){
        return `${this.speak()} ${this.name}`;
    }
};

const aba = new user('Anna');
console.log(aba.greeting()); // di hello Anna


// sETTER AND getters

class user{
    // constructor
    constructor(name,age){
        this.name = name; 
        this.age = age;
    }

    // metodos
    speak(){
        return 'di hello';
    }
    greeting(){
        return `${this.speak()} ${this.name}`;
    }


    // getter and setter

    get Uage(){
        return this.age;
    }

    set Uage(n){
        this.age = n;
    }



};

const a = new user('Anna',12);
console.log(a.Uage); // getter ->> 12 --> obtiene el 12
console.log(a.Uage = 20); // setter --> 20 --> modifica el valor 12 por 20

