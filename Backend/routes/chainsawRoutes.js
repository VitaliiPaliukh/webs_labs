const express = require('express');
const router = express.Router();
const chainsawController = require('../controllers/chainsawController');
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('../swagger_output.json');

router.route('/create').post(chainsawController.create);
router.route('/get').get(chainsawController.get);
router.route('/get/:id').get(chainsawController.getById);
router.route('/update/:id').put(chainsawController.update);
router.route('/delete/:id').delete(chainsawController.deleteById);
router.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

module.exports = router;