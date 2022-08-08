require('dotenv').config()
const PORT = process.env.PORT || 3030
const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
const mongoose = require('mongoose')
const connectionString = process.env.URI_DB

mongoose.connect(connectionString,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, ()=>{
    console.log('Database Connected')
})


//middlewares express
app.use(morgan('tiny'))
app.use(express.json())
app.use(express.urlencoded({ extended : false}));
app.use(cors())


//Routes
let authRouter = require('./routes/auth')

app.use('/auth', authRouter)


app.get('/', (req, res)=>{
    res.send('funcionando')
})

app.listen(PORT, ()=>{
    console.log(`Server only in port: ${PORT}`)
})