const mongoose = require('mongoose')
const username = process.env.ATLAS_USERNAME
const pw = process.env.ATLAS_PASSWORD
const dbName = "authorsdb"

const uri = `mongodb+srv://${username}:${pw}@cluster0.cxn5uer.mongodb.net/${dbName}?retryWrites=true&w=majority`

mongoose.connect(uri)
    .then(() => console.log("Established a connection to the database"))
    .catch(err => console.log("Something went wrong when connecting to the database", err));