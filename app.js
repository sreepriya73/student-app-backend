const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const {studentmodel}= require("./models/Student")

const app = express()
app.use(cors())
app.use(express.json())
mongoose.connect("mongodb+srv://sreepriya:sreepriya73@cluster0.rwd5pdm.mongodb.net/studentdb?retryWrites=true&w=majority&appName=Cluster0")

app.post("/add",(req,res)=>{
    let input=req.body
    let student=new studentmodel(input)
    student.save()
    res.json({"status":"success"})
})



app.get("/view",(req,res)=>{
    studentmodel.find().then(
        (data)=>{
            res.json(data)
        }
    ).catch(
        (error)=>{
            res.send("error")
        }
    )
    
})
app.post("/search",(req,res)=>{
    let input=req.body
    studentmodel.find(input).then(
        (data)=>{
            res.json(data)
        }
    ).catch(
        (error)=>{
            res.send("error")
        }
    )
})
app.post("/delete",(req,res)=>{
    let input=req.body
    studentmodel.findByIdAndDelete(input._id).then(
        (response)=>{
            res.json({"status":"success"})
        }
    ).catch(
        (error)=>{
            res.json({"status":"failed"})
        }
    )
})

app.listen(8080,()=> {
    console.log("server started")
})

