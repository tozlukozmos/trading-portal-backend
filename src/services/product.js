const db = require('../scripts/database');

class ProductService {
    async create(data) {
      const result = await db.query(
        `INSERT INTO products 
        (title, description, image, user_id) 
        VALUES 
        ('${data.title}', '${data.description}', '${data.image}', '${data.userId}')`
      );
      return result.info;
    }

    async read(id) {
      const result = await db.query(
        `SELECT 
        title, description, image, user_id
        FROM products ${id && `WHERE id='${id}'`}`
      );
      return result;
    }

    async readUserProducts(id) {
      const result = await db.query(
        `SELECT 
        title, description, image, user_id
        FROM products ${id && `WHERE user_id='${id}'`}`
      );
      return result;
    }

   
    async update(id, data) {
      const queries = [];

      Object.keys(data).map(item => {
        switch (item) {
          case 'firstName':
            queries.push(`first_name='${data.title}'`)
            break;
          case 'lastName':
            queries.push(`last_name='${data.description}'`)
            break;
          case 'password':
            queries.push(`password='${data.image}'`)
            break;
          case 'email':
            queries.push(`email='${data.userId}'`)
            break;
          default:
            break;
        }
      })

      const result = await db.query(
        `UPDATE 
        products
        SET
        ${queries.join(',')}
        WHERE id='${id}'`
      );

      return result;
    }

    async delete(id) {
      const result = await db.query(
        `DELETE FROM products 
        WHERE id='${id}'`
      );
    
      return result.info;
    }
}

module.exports = new ProductService();
