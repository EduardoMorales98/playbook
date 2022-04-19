class issue {

    constructor(){
        this.title="Issue about comments"
        this.repositoryNameAssociated= "githubEduardo"
        this.status= "open"
        this.numberOfComments= 50
        this.labels= 20
        this.author= "Eduardo Morales"
        this.dateCreated= "10/04/2022"
        this.lastUpdated= "17/04/2022"
    }
    
    getTitleAndAuthor(){
      return `Title: ${this.title}\nAuthor: ${this.author}`
    }
    getGeneralInfo(){
      return `This repository ${this.title} was created on ${this.dateCreated}`
    }
   }
   
   const iss=new issue();
   console.log("Título del issue:" + iss.title)
   console.log("Status: " + iss.status)
   console.log(iss.getGeneralInfo())
   console.log(iss.getTitleAndAuthor())