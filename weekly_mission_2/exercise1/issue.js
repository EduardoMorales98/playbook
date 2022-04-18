const issue = {
    title: "Issue about comments",
    repositoryNameAssociated: "githubEduardo",
    status: "open",
    numberOfComments: 50,
    labels: 20,
    author: "Eduardo Morales",
    dateCreated: "10/04/2022",
    lastUpdated: "17/04/2022",
    getTitleAndAuthor: function(){
      return `Title: ${this.title}\nAuthor: ${this.author}`
    },
    getGeneralInfo: function(){
      return `This repository ${this.title} was created on ${this.dateCreated}`
    }
   }
   
   console.log("Título del issue:" + issue.title)
   console.log("Status: " + issue.status)
   console.log(issue.getGeneralInfo())
   console.log(issue.getTitleAndAuthor())