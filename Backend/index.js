
require('dotenv').config()
const songURL = "./soundFiles/"

const express = require('express')

const app = express()
app.use(express.static('dist'))
app.use(express.json())

const fs = require('fs')


app.get("/songs/playlist/:tempo", (req, res) => {
    var fileNames = fs.readdirSync(songURL, (err, files) => {
        files.filter(fileName => fileName.includes("(" + req.params.tempo + ")")).map(fileName => songURL + fileName)
    })
    if(fileNames)
        res.status(200).send(fileNames)
    else
        res.status(404).send("No songs found")
})

app.get("/songs/:songName", (req, res) => {
    res.status(200).send("/Backend/soundFiles/" + req.params.songName)
})


const PORT = process.env.PORT || 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)