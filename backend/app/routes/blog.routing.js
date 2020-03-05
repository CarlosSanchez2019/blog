const { Router } = require('express')
const router = Router()
const {
    getNotes,
    addNotes,
    updateNote,
    deleteNotes,
    getOneNote
} = require('../controllers/index.controllers')

router.get('/api/blog', getNotes)
router.post('/api/add', addNotes)
router.put('/api/edit/:id', updateNote)
router.delete('/api/delete/:id', deleteNotes)
router.get('/api/blog/:id',getOneNote )

module.exports = router