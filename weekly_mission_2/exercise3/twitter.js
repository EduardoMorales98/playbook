class user{
    constructor(){
        this.user= "@person333"
        this.name= "Person LastName"
        this.bio= "Hi this is me."
        this.followers= 250
        this.following= 300
        this.location= "Mexico"
        this.dateOfCreation= "01/05/2010"
        this.age= 22
    }
    
}

const usuario=new user()
console.log("Fecha de creación: "+usuario.dateOfCreation)

class trending_topic{
    constructor(){
        this.user= "@person333",
        this.name= "Trending topic",
        this.description= "It's about ..",
        this.location= "Mexico",
        this.dateOfCreation= "05/01/2012",
        this.results= 2000
    }
    
}
const tt=new trending_topic()
console.log("Results: "+tt.results)


class hashtag{
    constructor(){
        this.user= "@person333",
        this.name= "#hashtag",
        this.description= "It's about ..",
        this.location= "Mexico",
        this.dateOfCreation= "10/08/2015",
        this.results= 5000
    }
    
}
const ht=new hashtag()
console.log("Results: "+ht.results)