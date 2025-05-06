const express = require('express');
const router = express.Router();
const maintenanceController = require('../controllers/maintenanceControllers');
const apiKeyMiddleware = require("../config/apiKey");

router.use(apiKeyMiddleware);

router.get('/', maintenanceController.getAllManutencao);
router.get('/:id', maintenanceController.getManutencaoById);
router.post('/', maintenanceController.createManutencao);
router.put('/:id', maintenanceController.updateManutencao);
router.delete('/:id', maintenanceController.deleteManutencao);

module.exports = router;