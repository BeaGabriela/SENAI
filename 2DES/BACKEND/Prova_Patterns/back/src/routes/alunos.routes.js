const express = require('express');
const router = express.Router();

 const m = require('../controllers/alunos.controller')

 router.get('/readAll',  m.readAll)
 router.get('/:id',  m.readCursoAluno)
 router.post('/create',  m.create)
 router.put('/update',  m.update)
 router.delete('/delete',  m.del)

module.exports = router;