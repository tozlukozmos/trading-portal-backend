const router = require('express').Router();
const TransactionController = require('../controllers/transaction');

router.post('/',TransactionController.createTransaction);
router.get('/', TransactionController.readTransactions);
router.get('/:transactionId', TransactionController.readTransaction);
router.get('/:userId', TransactionController.readUserTransactions);
router.put('/:transactionId/update', TransactionController.updateTransaction);
router.delete('/:transactionId/delete', TransactionController.deleteTransaction);

module.exports = router;