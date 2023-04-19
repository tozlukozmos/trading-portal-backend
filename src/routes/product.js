const router = require('express').Router();
const ProductController = require('../controllers/product');

router.post('/',ProductController.createProduct);
router.get('/', ProductController.readProducts);
router.get('/:productId', ProductController.readProduct);
router.get('/:userId', ProductController.readUserProducts);
router.put('/:productId/update', ProductController.updateProduct);
router.delete('/:productId/delete', ProductController.deleteProduct);

module.exports = router;