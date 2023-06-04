/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: User authorization processes
 * 
 * definitions:
 *   User:
 *     type: object
 *     properties:
 *       id:
 *         type: string
 *      
 * 
 * /api/auth/register:
 *   post:
 *     summary: Creates a new user record.
 *     parameters:
 *       - name: user
 *         description: Yeni kullanıcı bilgileri
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/User'
 *     responses:
 *       201:
 *         description: Kullanıcı kaydı başarıyla oluşturuldu
 * 
 * /api/auth/login:
 *   post:
 *     summary: The user logs in.
 *     parameters:
 *       - name: credentials
 *         description: Kullanıcı giriş bilgileri
 *         in: body
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             email:
 *               type: string
 *             password:
 *               type: string
 *               format: password
 *     responses:
 *       200:
 *         description: Kullanıcı girişi başarılı, token alındı
 *         schema:
 *           type: object
 *           properties:
 *             token:
 *               type: string
 */


const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user');

router.post('/register', UserController.register);
router.post('/login', UserController.login);

module.exports = router;
