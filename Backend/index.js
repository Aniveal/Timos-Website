import axios from 'axios'
import dotenv from 'dotenv'
import express from "express"

"mongodb+srv://TimoLoher:<db_password>@boogiesongs.fgvacoq.mongodb.net/?appName=BoogieSongs"

const baseUrl = '/api'
dotenv.config()

const app = express()
app.use(express.static('dist'))
app.use(express.json())

const PORT = process.env.PORT || 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)