const Authors = require("../models/authors.model")


//all authors
module.exports.allAuthors = (req, res) =>{
    Authors.find().sort({authorName: 1})
        .then(authorList => res.json(authorList))
        .catch(err => res.status(400).json(err))
}


//one author
module.exports.oneAuthor = (req, res) =>{
    Authors.findOne({_id: req.params.id}) // return the found object
        .then(foundAuthor => res.json(foundAuthor))
        .catch(err => res.status(400).json(err))
}


//create author
module.exports.addAuthor = (req, res) =>{
    Authors.create(req.body) // will return new object
        .then(newAuthor => res.json(newAuthor))
        .catch(err => res.status(400).json(err))
}

//update author
module.exports.updateAuthor = (req, res) =>{
    Authors.findOneAndUpdate(
        {_id: req.params.id}, //criteria
        req.body, //form data
        {new: true, runValidators: true} 
        //new: true - returns updated object
        //runvalidators: true - to perform validation specificed on model
    )
    .then(updatedAuthor => res.json(updatedAuthor))
    .catch(err => res.status(400).json(err))
}

//delete author
module.exports.deleteAuthor = (req, res) =>{
    Authors.deleteOne({_id: req.params.id})
        .then(status => res.json(status))
        .catch(err => res.status(400).json(err))
}