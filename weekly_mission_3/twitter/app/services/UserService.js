const User= require('./../models/User')
class UserService{
    static create(id, username, name){
        return new User(id, username, name, "Sin bio")
    }

    static getInfo(usuario){
        return Object.values(usuario)
    }

    static updateUsername(usuario,nuevoUserName){
        usuario.setUsername=nuevoUserName
    }

    static getAllUsernames(usernames){
        return usernames.map((usernames)=>usernames.userName)
    }
}

module.exports=UserService