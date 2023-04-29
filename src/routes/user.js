const router = require('express').Router();
const UserController = require('../controllers/user');
const ProductController = require('../controllers/product');

router.get('/', UserController.readUsers);
router.get('/:userId', UserController.readUser);
router.get('/:userId/products', ProductController.readUserProducts);
router.put('/:userId/update', UserController.updateUser);
router.delete('/:userId/delete', UserController.deleteUser);

module.exports = router;