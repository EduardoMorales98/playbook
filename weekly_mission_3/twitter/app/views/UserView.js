const UserService = require('./../../app/services/UserService')

class UserView{
    static createUser(payload){
        if(payload==null){
            var resultado={
                error: "payload no existe"
            }  
        }
        else if(payload.username==null||payload.name==null||payload.id==null){
            var resultado={
                error: "necesitan tener un valor válido"
            }   
        }

        return resultado 
        //this.payload=payload
    }

}

module.exports=UserView