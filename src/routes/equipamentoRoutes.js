const express = require('express');
const router = express.Router();
const equipamentoController = require('../controllers/equipamentoControllers');
const upload = require("../config/upload.js");
const apiKeyMiddleware = require("../config/apiKey");

router.use(apiKeyMiddleware);

router.get('/', equipamentoController.getAllEquipamentos);
router.get('/:id', equipamentoController.getEquipamentoById);
router.post('/', upload.single("photo"), equipamentoController.createEquipamento)
router.put('/:id', equipamentoController.updateEquipamento);
router.delete('/:id', equipamentoController.deleteEquipamento);


module.exports = router;