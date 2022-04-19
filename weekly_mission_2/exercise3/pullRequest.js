class pullRequest{
    constructor(){
        this.title= "Agregando ejercicio"
        this.author= "Eduardo Morales"
        this.branchName= "main"
        this.dateCreated= "10/04/2022"
        this.status= "open"
        this.repositoryNameAssociated= "JS"
    }
    
    getStatus(){
        return `El estado del repositorio es: ${this.status}`
    }
    getTitleAndAuthor(){
      return `Title: ${this.title}\nAuthor: ${this.author}`
    }
   }
   
   const PR=new pullRequest()
   console.log("Titulo del pull request: " + PR.title)
   console.log(PR.getStatus())
   console.log(PR.getTitleAndAuthor())