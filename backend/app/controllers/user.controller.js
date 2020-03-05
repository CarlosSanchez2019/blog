const User = require('../models/user.models')
const userController = {}

userController.getUser = async (req, res) => {
    const user = await User.find()
    res.json(user)
}

userController.addUser = async (req, res) => {
    const {name, email, password} = req.body

    const userAdd = new User({
        name,
        email,
        password
    })
    await userAdd.save()

    res.json({
        mensaje: "Usuario creado con éxito"
    })
}



module.exports = userController
