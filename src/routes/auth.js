/**
 * @swagger
 * /auth/login:
 *   post:
 *     description: Kullanıcı girişi yapar.
 *     responses:
 *       200:
 *         description: Başarılı giriş.
 */

/**
 * @swagger
 * /auth/logout:
 *   post:
 *     description: Kullanıcı çıkışı yapar.
 *     responses:
 *       200:
 *         description: Başarılı çıkış.
 */

const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user');

router.post('/register', UserController.register);
router.post('/login', UserController.login);

module.exports = router;
