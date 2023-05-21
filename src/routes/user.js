const router = require('express').Router();
const UserController = require('../controllers/user');
const ProductController = require('../controllers/product');
const TransactionController = require('../controllers/transaction');

router.get('/', UserController.readUsers);
router.get('/:userId', UserController.readUser);
router.get('/:userId/products', ProductController.readUserProducts);
router.get('/:userId/transactions', TransactionController.readUserTransactions);
router.get('/:userId/offers', ProductController.readUserOffers);
router.post('/:userId/offers/reply-to-offer', ProductController.replyToOffer);
router.put('/:userId/update', UserController.updateUser);
router.delete('/:userId/delete', UserController.deleteUser);

module.exports = router;