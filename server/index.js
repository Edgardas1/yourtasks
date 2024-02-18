const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const User = require('./models/user.model')
const jwt = require('jsonwebtoken') 

app.use(cors(
    {
        origin: ["yourtasks-delta.vercel.app"],
        methods: ['POST', 'GET'],
        credentials: true
    }
))
app.use(express.json())

mongoose.connect('mongodb+srv://Edgard:Narutriks@cluster0.5jggeop.mongodb.net/YourTasks')


app.post('/api/register', async (req,res)=>{
    try {
        await User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
       }) 
       res.json({status: 'ok'})
    } catch (error) {
        console.log(error)
        res.json({status: 'error', error})
    }
    
})


app.post('/api/login', async (req,res)=>{
       const user = await User.findOne({email: req.body.email, password: req.body.password}) 

       if (user){

        const token = jwt.sign({
            username: user.username,
            email: user.email
        }, 'secret123')

        res.json({status: 'ok', user: token})
       }else{
        res.json({status: 'error', user: false})
       }
    
})




app.listen(3000, ()=>{
    console.log("Server started on 3000")
})