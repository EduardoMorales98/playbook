const user={
    user: "@person333",
    name: "Person LastName",
    bio: "Hi this is me.",
    followers: 250,
    following: 300,
    location: "Mexico",
    dateOfCreation: "01/05/2010",
    age: 22
}

console.log("Fecha de creación: "+user.dateOfCreation)

const trending_topic={
    user: "@person333",
    name: "Trending topic",
    description: "It's about ..",
    location: "Mexico",
    dateOfCreation: "05/01/2012",
    results: 2000
}
console.log("Results: "+trending_topic.results)


const hashtag={
    user: "@person333",
    name: "#hashtag",
    description: "It's about ..",
    location: "Mexico",
    dateOfCreation: "10/08/2015",
    results: 5000
}
console.log("Results: "+hashtag.results)