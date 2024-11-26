let cartController = require('../controllers/cartController');
const express = require('express');
const router = express.Router();

router.route('/create').post(cartController.create);
router.route('/get').get(cartController.get);
router.route('/update/:id').put(cartController.update);
router.route('/delete/:id').delete(cartController.deleteById);

module.exports = router;