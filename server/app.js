require('dotenv').config()
const PORT = process.env.PORT || 3030
const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')




//middlewares express
app.use(morgan('tiny'))
app.use(express.json())
app.use(express.urlencoded({ extended : false}));
app.use(cors())


app.get('/', (req, res)=>{
    res.send('funcionando')
})

app.listen(PORT, ()=>{
    console.log(`Server only in port: ${PORT}`)
})