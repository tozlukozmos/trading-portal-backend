const ProductService = require('../services/user');

class ProductController {
  async createProduct(req, res) {
    try {
      await ProductService.create(req.body);
      res.status(200).send({
        error: false,
        message: "Ürün başarıyla eklendi!",
        result: null,
      });
    } catch (error) {
      res.status(500).send({
        error: true,
        message: "Ürün eklenirken bir hata oluştu!",
        result: error.sqlMessage,
      });
    }
  }

  async readProduct(req, res) {
    try {
      const result = await ProductService.read(req.params.productId);
      if(result.length === 0) {
        res.status(404).send({
          error: true,
          message: "Ürün bulunamadı!",
          result: null,
        });
      } else {
        res.status(200).send({
          error: false,
          message: "Ürün başarıyla getirildi!",
          result: result[0],
        });
      }
    } catch (error) {
      res.status(500).send({
        error: true,
        message: "Ürün getirilirken bir hata oluştu!",
        result: error.sqlMessage,
      });
    }
  }

    async readProducts(req, res) {
    try {
      const result = await ProductService.read();
      res.status(200).send({
        error: false,
        message: "Ürünler başarıyla getirildi!",
        result: result,
      });
    } catch (error) {
      res.status(500).send({
        error: true,
        message: "Ürünler getirilirken bir hata oluştu!",
        result: error.sqlMessage,
      });
    }
  }

  async readUserProducts(req, res) {
    try {
      const result = await ProductService.readUserProducts();
      res.status(200).send({
        error: false,
        message: "Kullanıcının ürünleri başarıyla getirildi!",
        result: result,
      });
    } catch (error) {
      res.status(500).send({
        error: true,
        message: "Kullanıcının ürünleri getirilirken bir hata oluştu!",
        result: error.sqlMessage,
      });
    }
  }

  async updateProduct(req, res) {
    try {
      await ProductService.update(req.params.productId, req.body);
      res.status(200).send({
        error: false,
        message: "Ürün başarıyla güncellendi!",
        result: null,
      });
    } catch (error) {
      res.status(500).send({
        error: true,
        message: "Ürün güncellenirken bir hata oluştu!",
        result: error.sqlMessage,
      });
    }
  }

  async deleteProduct(req, res) {
    try {
      await UserService.delete(req.params.productId);
      res.status(200).send({
        error: false,
        message: "Ürün başarıyla silindi!",
        result: null,
      });
    } catch (error) {
      res.status(500).send({
        error: true,
        message: "Ürün silinirken bir hata oluştu!",
        result: error.sqlMessage,
      });
    }
  }
}

module.exports = new ProductController();
