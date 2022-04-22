const User= require('./../models/User')
class UserService{
    static create(id, userName, name){
        return new User(id, userName, name, "Sin bio")
    }

    static updateUsername(usuario,nuevoUserName){
        usuario.setUsername=nuevoUserName
    }

    static getInfo(usuario){
        return Object.values(usuario)
    }

    static getAllUsernames(usernames){
        return usernames.map((usernames)=>usernames.userName)
    }
}

module.exports=UserService