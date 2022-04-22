const User= require('./../models/User')
class UserService{
    static create(id, username, name){
        return new User(id, username, name, "Sin bio")
    }

    static getInfo(usuario){
        return Object.values(usuario)
    }
}

module.exports=UserService