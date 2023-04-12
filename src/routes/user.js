const router = require('express').Router();
const UserController = require('../controllers/user');

router.get('/', UserController.readUsers);
router.get('/:userId', UserController.readUser);
router.put('/:userId/update', UserController.updateUser);
router.delete('/:userId/delete', UserController.deleteUser);

module.exports = router;