const pullRequest = {
    title: "Agregando ejercicio",
    author: "Eduardo Morales",
    branchName: "main",
    dateCreated: "10/04/2022",
    status: "open",
    repositoryNameAssociated: "JS",
    getStatus: function(){
        return `El estado del repositorio es: ${this.status}`
      },
    getTitleAndAuthor: function(){
      return `Title: ${this.title}\nAuthor: ${this.author}`
    }
   }
   
   console.log("Titulo del pull request: " + pullRequest.title)
   console.log(pullRequest.getStatus())
   console.log(pullRequest.getTitleAndAuthor())