const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const path = require('path')
const cors = require('cors')
const passport = require('passport')
const app = express()



app.use(bodyParser.urlencoded({
    extended: false
}))

//Json body Middleware
app.use(bodyParser.json())

//Cors Middleware
app.use(cors({
    origin: '*'
}))

//Setting up the static directory
app.use(express.static(path.join(__dirname, 'public')))

//Use the passport Middleware
//Cookie

app.use(passport.initialize())


//Bring in the Passport Strategy
require('./config/passport')(passport)





const db = require('./config/keys').mongoURL
mongoose.connect(db, { useNewUrlParser: true }).then(() => {
    console.log(`Database connected successfully ${db}`)
}).catch(err => {
    console.log(`Unable to connect with the database ${err}`)
})


const users = require('./routes/api/users')
const { profile } = require('console')
app.use('/api/users', users)

const notification = require('./routes/api/notification')
app.use('/api/notification', notification)

const poststatus = require('./routes/api/poststatus')
app.use('/api/poststatus', poststatus)

const PORT = process.env.PORT || 8081

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})