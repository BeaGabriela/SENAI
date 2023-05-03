const express = require('express');

const router = express.Router();

const perfil = require('../controllers/perfil');


router.post('/perfilCreate', perfil.create);
router.get('/perfil', perfil.read);
router.get('/perfil/:id', perfil.readOne);
router.put('/perfil/:id', perfil.update);
router.delete('/perfil/:id', perfil.remove);

module.exports = router;