const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const passport = require('passport');
const pasportLocal = require('passport-local');
const port = 3000 || process.env.PORT

const app = express()

/* App Config */
mongoose.Promise = global.Promise
let localDB = 'mongodb://localhost/press-live'
mongoose.connect(localDB)
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error'))
db.once('open', ()=> {
  console.log('-+- Mongo Database Connection established -+-')
})

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

/* App Routes */
const api = require('./routes/api')

app.use('/api', api)

/* Server Listen */
app.listen(port)
console.log(`* Listening to port ${port} *`)