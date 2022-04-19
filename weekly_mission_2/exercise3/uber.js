class profile{
    constructor(){
        this.name= "Person LastName",
        this.number="9658995324",
        this.location= "Mexico",
        this.email= "person@gmail.com"
    }
    
}
const prof=new profile()
console.log("Number: "+prof.number)

class travel{
    constructor(){
        this.destiny= "adress #number",
        this.origin= "adressO #number",
        this.user= "person",
        this.driver= "driver",
        this.car= "model" 
    }
}
const viaje=new travel()
console.log("Origin: "+viaje.origin)