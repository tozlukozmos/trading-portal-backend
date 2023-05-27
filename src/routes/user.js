/**
 * @swagger
 * /users:
 *   get:
 *     description: Kullanıcıları listeler.
 *     responses:
 *       200:
 *         description: Başarılı yanıt.
 */

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     description: Belirli bir kullanıcıyı getirir.
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Kullanıcı ID'si.
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Başarılı yanıt.
 */

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
router.get('/:userId/favorites', ProductController.readUserFavoriteProducts);
router.put('/:userId/update', UserController.updateUser);
router.delete('/:userId/delete', UserController.deleteUser);

module.exports = router;