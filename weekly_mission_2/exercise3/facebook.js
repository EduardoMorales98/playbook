class user{
    constructor(){
        this.user= "@personf"
        this.name= "Person LastName"
        this.from= "Mexico"
        this.studied= ["UTM","SIO"]
        this.location= "Mexico"
        this.job= "programmer"
        this.relationship_status="single"
        this.dateOfCreation= "01/05/2010"
        this.age= 22
    }   
}

const usuario=new user()
console.log("Age: "+usuario.age)


class post{
    constructor(){
        this.user= "@personf"
        this.dateOfCreation= "01/05/2010"
        this.location= "Mexico"
        this.likes= 10
        this.comments= 5
        this.shared= 1
    }
    
}
const Post=new post()
console.log("Likes: "+Post.likes)

class biography{
    constructor(){
        this.user= "@personf"
        this.name= "Person LastName"
        this.dateOfCreation= "01/05/2010"
        this.location= "Mexico"
        this.photos= 20
        this.post=30
        this.Friends= 100
        this.videos= 1
    }
    
}
const bio=new biography()
console.log("Photos: "+bio.photos)