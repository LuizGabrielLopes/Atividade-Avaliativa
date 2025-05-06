const express = require('express');
const router = express.Router();
const maintenanceController = require('../controllers/maintenanceControllers');


router.get('/', maintenanceController.getAllManutencao);
router.get('/:id', maintenanceController.getManutencaoById);
router.post('/', maintenanceController.createManutencao);
router.put('/:id', maintenanceController.updateManutencao);
router.delete('/:id', maintenanceController.deleteManutencao);

module.exports = router;