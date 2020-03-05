const { Router } = require('express')
const router = Router()

const {
    getUser,
    addUser
} = require('../controllers/user.controller')

router.get('/api/user', getUser )
router.post('/api/user', addUser)

module.exports = router