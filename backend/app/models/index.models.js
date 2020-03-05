const { Schema, model } = require('mongoose')

const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    redirectUrl: {
        type:String,
        required: true
    }
},
{
    timestamps: {
        createdAt:'created_at'
    }
})

module.exports = model('blog', blogSchema)