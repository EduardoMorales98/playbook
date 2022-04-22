const UserService = require('./../../app/services/UserService')

class UserView{
    static createUser(payload){
        if(payload==null){
            var resultado={
                error: "payload no existe"
            }
            return resultado    
        }
        else
        this.payload=payload
    }

}

module.exports=UserView