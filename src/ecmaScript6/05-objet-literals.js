// objetos literales

function newUser (user, age, country, Uid){
    return {
        user,
        age,
        country,
        id: Uid
    }
}

console.log(newUser("as",34,"ks",4))
//   { user: 'as', age: 34, country: 'ks', id: 4 }
