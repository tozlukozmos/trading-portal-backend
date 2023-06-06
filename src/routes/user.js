/**
 * @swagger
 * tags:
 *   name: User
 *   description: User operations
 * 
 * definitions:
 *   User:
 *     type: object
 *     properties:
 *       id:
 *         type: string
 *       name:
 *         type: string
 *       email:
 *         type: string
 *     
 * 
 * /api/user:
 *   get:
 *     summary: Brings all users.
 *     responses:
 *       200:
 *         description: Başarılı yanıt
 *         schema:
 *           type: object
 *           properties:
 *             users:
 *               type: array
 *               items:
 *                 $ref: '#/definitions/User'
 * 
 *   post:
 *     summary: Creates a new user.
 *     parameters:
 *       - name: user
 *         description: Yeni kullanıcı verileri
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/User'
 *     responses:
 *       201:
 *         description: Kullanıcı başarıyla oluşturuldu
 * 
 * /api/user/{userId}:
 *   get:
 *     summary: Returns a specific user.
 *     parameters:
 *       - name: userId
 *         description: Kullanıcı kimliği
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Başarılı yanıt
 *         schema:
 *           $ref: '#/definitions/User'
 * 
 *   put:
 *     summary: Updates a specific user.
 *     parameters:
 *       - name: userId
 *         description: Kullanıcı kimliği
 *         in: path
 *         required: true
 *         type: string
 *       - name: user
 *         description: Güncellenen kullanıcı verileri
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/User'
 *     responses:
 *       200:
 *         description: Kullanıcı başarıyla güncellendi
 * 
 *   delete:
 *     summary: Deletes a specific user.
 *     parameters:
 *       - name: userId
 *         description: Kullanıcı kimliği
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       204:
 *         description: Kullanıcı başarıyla silindi
 * 
 * /api/user/{userId}/products:
 *   get:
 *     summary: Returns products for a specific user.
 *     parameters:
 *       - name: userId
 *         description: Kullanıcı kimliği
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Başarılı yanıt
 *         schema:
 *           type: object
 *           properties:
 *             products:
 *               type: array
 *               items:
 *                 $ref: '#/definitions/Product'
 * 
 * /api/user/{userId}/transactions:
 *   get:
 *     summary: Retrieves the actions of a particular user.
 *     parameters:
 *       - name: userId
 *         description: Kullanıcı kimliği
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Başarılı yanıt
 *         schema:
 *           type: object
 *           properties:
 *             transactions:
 *               type: array
 *               items:
 *                 $ref: '#/definitions/Transaction'
 * 
 * /api/user/{userId}/offers:
 *   get:
 *     summary: Returns offers from a specific user.
 *     parameters:
 *       - name: userId
 *         description: Kullanıcı kimliği
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Başarılı yanıt
 *         schema:
 *           type: object
 *           properties:
 *             offers:
 *               type: array
 *               items:
 *                 $ref: '#/definitions/Product'
 * 
 * /api/user/{userId}/offers/reply-to-offer:
 *   post:
 *     summary: Responds to an offer.
 *     parameters:
 *       - name: userId
 *         description: Kullanıcı kimliği
 *         in: path
 *         required: true
 *         type: string
 *       - name: offerId
 *         description: Teklif kimliği
 *         in: query
 *         required: true
 *         type: string
 *       - name: response
 *         description: Cevap (kabul, reddet vb.)
 *         in: query
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Cevap başarıyla gönderildi
 * 
 * /api/user/{userId}/favorites:
 *   get:
 *     summary: Brings a particular user's favorite products.
 *     parameters:
 *       - name: userId
 *         description: Kullanıcı kimliği
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Başarılı yanıt
 *         schema:
 *           type: object
 *           properties:
 *             products:
 *               type: array
 *               items:
 *                 $ref: '#/definitions/Product'
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
router.get('/:userId/offers/history', ProductController.readUserOfferHistory);
router.post('/:userId/offers/reply-to-offer', ProductController.replyToOffer);
router.get('/:userId/favorites', ProductController.readUserFavoriteProducts);
router.put('/:userId/update', UserController.updateUser);
router.delete('/:userId/delete', UserController.deleteUser);

module.exports = router;