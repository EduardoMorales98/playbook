class repo {
    constructor(){
        this.name= "LaunchX"
        this.author= "carlogilmar"
        this.language= "JavaScript"
        this.numberOfCommits= 100
        this.stars= 199
        this.forks= 299
        this.issues_open=10
        this.issues_close= 10 
    }
   
    getTotalIssues(){
      return this.issues_open + this.issues_close
    }

    getGeneralInfo(){
      return `This repository ${this.name} was created by ${this.author}`
    }
   }
   
   const repository=new repo();
   console.log("Nombre del repo:" + repository.name)
   console.log("Issues totales: " + repository.getTotalIssues())
   console.log(repository.getGeneralInfo())