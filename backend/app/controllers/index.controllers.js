const Blog = require('../models/index.models')
const controller = {}

controller.getNotes = async function(req, res){

    const blog = await Blog.find().sort({created_at: -1})
    res.json(blog)

}

controller.addNotes = async function(req, res){
    const { title, description, imageUrl, redirectUrl  } = req.body
    
    const blog = new Blog({
        title,
        description,
        imageUrl,
        redirectUrl
    })
    await blog.save()

    res.json({
        mensaje: "Nota guardada con éxito"
    })

}

controller.updateNote = async function(req, res){

    const {title, description, imageUrl, redirectUrl} = req.body

    const editBlog = {
        title,
        description,
        imageUrl,
        redirectUrl
    }
    await Blog.findByIdAndUpdate(req.params.id, {$set:editBlog}, {new:true})
    res.json({
        mensaje: "Nota actualizada con éxito"
    })
}
controller.deleteNotes = async function(req, res){
    await Blog.findByIdAndDelete(req.params.id)
    const blog = await Blog.find()
    res.json(blog)
}

controller.getOneNote = async (req, res) => {
    const note = await Blog.findOne({
        redirectUrl: req.params.id
    })
    res.json(note)
}

module.exports = controller