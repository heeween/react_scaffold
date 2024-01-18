const express = require("express")
// const nanoid = import("./node_modules/nanoid/index.js")
// const nanoid = require("./node_modules/nanoid")


const app = express()
const port = 5002

app.use((request, response, next) => {
    console.log(request.get('Host'), 'have requested server2');
    next()
})

app.get("/cars", (req, res) => {
    const cars = [
        {id:1,name:'BMW',price:100},
        {id:'2',name:'大奔',price:1100},
        {id:'3',name:'Zeekr',price:1300},
        {id:'4',name:'Nio',price:1500},
    ]
    res.send(cars)
})

app.listen(port, () => {
    console.log('server2 have been setuped');
})