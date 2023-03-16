// ... --> spreed

// objeto
const p = {user:'colo', age:12, eu:'eu'};

// ...val toma los demas atributos del objeto
const {user, ...val } = p;
console.log(user); // colo --> solo el valor del primer atributo
console.log(val); // { age: 12, eu: 'eu' }