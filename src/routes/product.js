/**
 * @swagger
 * tags:
 *   name: Product
 *   description: Product operations
 * 
 * definitions:
 *   Product:
 *     type: object
 *     properties:
 *       id:
 *         type: string
 *   
 * 
 *   Offer:
 *     type: object
 *     properties:
 *       id:
 *         type: string
 *      
 * 
 *   Comment:
 *     type: object
 *     properties:
 *       id:
 *         type: string
 *      
 * 
 * /api/product:
 *   post:
 *     summary: Creates a new product.
 *     parameters:
 *       - name: product
 *         description: Yeni ürün verileri
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Product'
 *     responses:
 *       201:
 *         description: Ürün başarıyla oluşturuldu
 * 
 *   get:
 *     summary: It brings all the products.
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
 * /api/product/{productId}:
 *   get:
 *     summary: Returns a specific product.
 *     parameters:
 *       - name: productId
 *         description: Ürün kimliği
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Başarılı yanıt
 *         schema:
 *           $ref: '#/definitions/Product'
 * 
 *   put:
 *     summary: Updates a specific product.
 *     parameters:
 *       - name: productId
 *         description: Ürün kimliği
 *         in: path
 *         required: true
 *         type: string
 *       - name: product
 *         description: Güncellenen ürün verileri
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Product'
 *     responses:
 *       200:
 *         description: Ürün başarıyla güncellendi
 * 
 *   delete:
 *     summary: Deletes a specific product.
 *     parameters:
 *       - name: productId
 *         description: Ürün kimliği
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       204:
 *         description: Ürün başarıyla silindi
 * 
 * /api/product/{productId}/create-offer:
 *   post:
 *     summary: Creates an offer for a product.
 *     parameters:
 *       - name: productId
 *         description: Ürün kimliği
 *         in: path
 *         required: true
 *         type: string
 *       - name: offer
 *         description: Yeni teklif verileri
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Offer'
 *     responses:
 *       201:
 *         description: Teklif başarıyla oluşturuldu
 * 
 * /api/product/{productId}/like:
 *   post:
 *     summary: Likes a product.
 *     parameters:
 *       - name: productId
 *         description: Ürün kimliği
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Ürün başarıyla beğenildi
 * 
 * /api/product/{productId}/unlike:
 *   delete:
 *     summary: Removes the likes of a product.
 *     parameters:
 *       - name: productId
 *         description: Ürün kimliği
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       204:
 *         description: Ürün beğenisi başarıyla kaldırıldı
 * 
 * /api/product/{productId}/comment:
 *   post:
 *     summary: Comments on a product.
 *     parameters:
 *       - name: productId
 *         description: Ürün kimliği
 *         in: path
 *         required: true
 *         type: string
 *       - name: comment
 *         description: Yeni yorum verileri
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Comment'
 *     responses:
 *       201:
 *         description: Yorum başarıyla eklendi
 * 
 * /api/product/{productId}/comments/{commentId}/delete:
 *   delete:
 *     summary: Deletes a product's comment.
 *     parameters:
 *       - name: productId
 *         description: Ürün kimliği
 *         in: path
 *         required: true
 *         type: string
 *       - name: commentId
 *         description: Yorum kimliği
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       204:
 *         description: Yorum başarıyla silindi
 */


const router = require('express').Router();
const ProductController = require('../controllers/product');

router.post('/',ProductController.createProduct);
router.get('/', ProductController.readProducts);
router.get('/:productId', ProductController.readProduct);
router.post('/:productId/create-offer', ProductController.createProductOffer);
router.put('/:productId/update', ProductController.updateProduct);
router.post('/:productId/like', ProductController.likeProduct);
router.delete('/:productId/unlike', ProductController.unlikeProduct);
router.post('/:productId/comment', ProductController.commentProduct);
router.delete('/:productId/comments/:commentId/delete', ProductController.deleteCommentProduct);
router.delete('/:productId/delete', ProductController.deleteProduct);

module.exports = router;