class User{
    constructor(id,userName,name,bio){
        this.id=id
        this.userName=userName
        this.name=name
        this.bio=bio
        this.dateCreated=new Date()
        this.lastUpdated=new Date()
    }

    get getUsername (){
        return this.userName
    }

    get getBio (){
        return this.bio
    }

    get getDateCreated (){
        return this.dateCreated
    }

    get getLastUpdated (){
        return this.lastUpdated
    }

    set setUsername (newUsername){
        this.userName=newUsername
    }

    set setBio (newBio){
        this.bio=newBio
    }
}

module.exports=User