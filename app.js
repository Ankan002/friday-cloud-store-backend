require('dotenv').config()
const express = require('express')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const connectToDB = require('./config/connectToDB')

const startServer = async() => {
    const app = express()
    const PORT = process.env.PORT
    connectToDB()

    app.use(cors())
    app.use(express.json())
    app.use(fileUpload({
        useTempFiles: true
    }))

    app.get('/', (req, res) => {
        res.status(200).json({
            message: 'Hello from the AVENGERS!!!'
        })
    })

    app.listen(PORT, () => console.log(`The software is running at ${PORT}`))
}

module.exports = startServer