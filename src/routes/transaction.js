/**
 * @swagger
 * tags:
 *   name: Transaction
 *   description: Transactions
 * 
 * /api/transaction:
 *   post:
 *     summary: Creates a new transaction.
 *     parameters:
 *       - name: transaction
 *         description: Yeni işlem verileri
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Transaction'
 *     responses:
 *       201:
 *         description: İşlem başarıyla oluşturuldu
 * 
 *   get:
 *     summary: Returns all transactions.
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
 * /api/transaction/{transactionId}:
 *   get:
 *     summary: Get a specific transaction.
 *     parameters:
 *       - name: transactionId
 *         description: İşlem kimliği
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Başarılı yanıt
 *         schema:
 *           $ref: '#/definitions/Transaction'
 * 
 *   put:
 *     summary: Updates a specific transaction.
 *     parameters:
 *       - name: transactionId
 *         description: İşlem kimliği
 *         in: path
 *         required: true
 *         type: string
 *       - name: transaction
 *         description: Güncellenen işlem verileri
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Transaction'
 *     responses:
 *       200:
 *         description: İşlem başarıyla güncellendi
 * 
 *   delete:
 *     summary: Deletes a specific transaction.
 *     parameters:
 *       - name: transactionId
 *         description: İşlem kimliği
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       204:
 *         description: İşlem başarıyla silindi
 */

const router = require('express').Router();
const TransactionController = require('../controllers/transaction');

router.post('/',TransactionController.createTransaction);
router.get('/', TransactionController.readTransactions);
router.get('/:transactionId', TransactionController.readTransaction);
// router.get('/:userId', TransactionController.readUserTransactions);
router.put('/:transactionId/update', TransactionController.updateTransaction);
router.delete('/:transactionId/delete', TransactionController.deleteTransaction);

module.exports = router;