// Usando objeto express
const express = require('express')
// App de Express
const app = express()
app.use(express.json()) // Indicamos que usaremos JSON
// Puerto en que vamos a ver nuestra app: localhost:3000
const port = 3000

//HTTP METHODS
app.get('/v1/explorers',(req,res)=>{//para obtener todos los explorers
    console.log(`Api Explorers GET ALL request ${new Date()}`)
    const explorer1={id:1,name:"Eduardo1"}
    const explorer2={id:2,name:"Eduardo2"}
    const explorer3={id:3,name:"Eduardo3"}
    const explorer4={id:4,name:"Eduardo4"}
    const explorers=[explorer1,explorer2,explorer3,explorer4]
    //HTTP CODE STATUS: 200
    res.status(200).json(explorers)
})

app.get('/v1/explorers/:id',(req,res)=>{//para obtener uno mediante id
    console.log(`Api Explorers GET request ${new Date()}`)
    console.log(`Getting explorers with id: ${req.params.id}`)
    const explorer={id:1,name:"Eduardo"}
    //HTTP CODE STATUS: 200
    res.status(200).json(explorer)
})

app.post('/v1/explorers',(req,res)=>{//es para crear uno nuevo
    console.log(`Api Explorers POST request ${new Date()}`)
    const requesBody=req.body//Parámetros de un cliente
    console.log(requesBody)//Imprime lo que se recibió del cliente
    res.status(201).json({message: "Created"})
})

app.put('/v1/explorers/:id',(req,res)=>{//es para actualizar uno
    console.log(`Api Explorers PUT request ${new Date()}`)
    const requesBody=req.body//Parametros para actualizar
    console.log(`Parámetros para actualizar ${requesBody}`)//
    console.log(`Update explorer with id ${req.params.id}`)//
    
    res.status(200).json({message:"Updated!"})
})

app.delete('/v1/explorers/:id',(req,res)=>{
    console.log(`Api Explorers DELETE request ${new Date()}`)
    console.log(`Delete explorer with id ${req.params.id}`)
    const  requesBody=req.body//Parametro de un cliente
    res.status(200).json({message: "Deleted"})
})

// Con esto inicializamos esta app, para correrla es "node app.js"
//para parla es con Ctrl+c
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})