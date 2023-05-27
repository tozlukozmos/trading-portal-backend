/**
 * @swagger
 * /transactions:
 *   get:
 *     description: İşlemleri listeler.
 *     responses:
 *       200:
 *         description: Başarılı yanıt.
 */

/**
 * @swagger
 * /transactions/{id}:
 *   get:
 *     description: Belirli bir işlemi getirir.
 *     parameters:
 *       - name: id
 *         in: path
 *         description: İşlem ID'si.
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Başarılı yanıt.
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