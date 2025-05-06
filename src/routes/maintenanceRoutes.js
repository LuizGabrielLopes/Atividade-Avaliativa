const express = require('express');
const router = express.Router();
const maintenanceController = require('../controllers/maintenanceController');


router.get('/', maintenanceController.getAllManutencao);
router.get('/:id', maintenanceController.getManutencaoById);
router.post('/', maintenanceController.createManutencao);



module.exports = router;