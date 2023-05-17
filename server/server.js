// 1. import all dependecnies
const express = require("express")
const cors = require('cors')
const app = express()
require('dotenv').config()

require('./configs/mongoose.config')

//2. configure express
//make sure these lines are above any app.get 
app.use(cors())
app.use( express.json() ); //recognize JSON object
app.use( express.urlencoded({ extended: true }) );


//3. routes & controller logic (CRUD)
const Router = require("./routes/authors.routes")
Router(app);


//4. listen on the port
app.listen(8000, ()=>console.log('Listening on port: 8000'))