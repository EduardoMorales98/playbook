const UserService = require('./../../app/services/UserService')

class UserView{
    static createUser(payload){
        var resultado
        if(payload==null){
            resultado={
                error: "payload no existe"
            }  
        }else if(typeof payload.userName==='string'&& typeof payload.name==='string'&&typeof payload.id==='number'){
            resultado=UserService.create(payload.id,payload.userName,payload.name)
        }else{
            resultado={
                error: "necesitan tener un valor válido"
            }
        }
        return resultado 
    }

}

module.exports=UserView