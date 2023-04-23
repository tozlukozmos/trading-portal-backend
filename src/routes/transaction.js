const router = require('express').Router();
const TransactionController = require('../controllers/transaction');

router.post('/',TransactionController.createTransaction);
router.get('/', TransactionController.readTransactions);
router.get('/:productId', TransactionController.readTransaction);
router.get('/:userId', TransactionController.readUserTransactions);
router.put('/:productId/update', TransactionController.updateTransaction);
router.delete('/:productId/delete', TransactionController.deleteTransaction);

module.exports = router;