const express = require("express")
const {nanoid} = require('nanoid')
const app = express()
const port = 5001

app.use((request, response, next) => {
    console.log(request.get('Host'), 'have requested server1');
    console.log('request url is',request.url);
    next()
})

app.get("/students", (req, res) => {
    res.send({ id: nanoid(), name: 'Tom', age: 20 })
})

app.listen(port, () => {
    console.log('server1 have been setuped');
})