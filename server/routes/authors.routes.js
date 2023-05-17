const AuthorController = require("../controllers/authors.controllers")


module.exports = (app)=>{
    app.get("/api/authors", AuthorController.allAuthors)
    app.get("/api/authors/:id", AuthorController.oneAuthor)
    app.post("/api/authors", AuthorController.addAuthor)
    app.patch("/api/authors/:id", AuthorController.updateAuthor)
    app.delete("/api/authors/:id", AuthorController.deleteAuthor)
}