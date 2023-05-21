const router = require('express').Router();
const ProductController = require('../controllers/product');

router.post('/',ProductController.createProduct);
router.get('/', ProductController.readProducts);
router.get('/:productId', ProductController.readProduct);
router.post('/:productId/create-offer', ProductController.createProductOffer);
router.put('/:productId/update', ProductController.updateProduct);
router.post('/:productId/like', ProductController.likeProduct);
router.delete('/:productId/unlike', ProductController.unlikeProduct);
router.post('/:productId/comment', ProductController.commentProduct);
router.delete('/:productId/comments/:commentId/delete', ProductController.deleteCommentProduct);
router.delete('/:productId/delete', ProductController.deleteProduct);

module.exports = router;