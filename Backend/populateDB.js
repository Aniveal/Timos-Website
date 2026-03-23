require('dotenv').config()

const localFilePath = "../soundFiles"

const baseUrl = '/api'

const password = process.env.DB_PASSWORD
const uri = "mongodb+srv://TimoLoher:" + password + "@boogiesongs.fgvacoq.mongodb.net/?appName=BoogieSongs"


const express = require('express')

const app = express()
app.use(express.static('dist'))
app.use(express.json())


const mongoose = require('mongoose')

console.log("url: " + uri)

mongoose.set('strictQuery',false)

mongoose.connect(uri, { family: 4 })



const songSchema = new mongoose.Schema({
    
    title: String,
    file: {}
})

//load first song
var fs = require('fs');
var files = fs.readdirSync('../soundFiles/');

const Song = mongoose.model('Song', songSchema)

const song1 = new Song({title: "TestSong", file: {}})

console.log(files)

mongoose.connection.close()




const PORT = process.env.PORT || 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)