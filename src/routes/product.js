const router = require('express').Router();
const ProductController = require('../controllers/product');

router.get('/', ProductController.readProducts);
router.get('/:userID', ProductController.readUserProducts);
router.post('/',ProductController.createProduct)
router.put('/:productId/update', ProductController.updateProduct);
router.delete('/:productId/delete', ProductController.deleteProduct);

module.exports = router;