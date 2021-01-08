const express = require('express');
const router = express.Router();

const NoteController = require('./controllers/NoteController');

router.get('/ping', NoteController.ping);

// GET /api/notes -> Listar todas notas
router.get('/notes', NoteController.all);
// GET /api/note/id -> Exibe uma nota
router.get('/note/:id', NoteController.one);
// POST /api/note -> Adicionar uma nota
router.post('/note', NoteController.new);
//PUT /api/note/id -> Atualizar uma nota
router.put('/note/:id', NoteController.edit);
//DELETE /api/note/id -> Deletar uma nota
router.delete('/note/:id', NoteController.delete);

module.exports = router;