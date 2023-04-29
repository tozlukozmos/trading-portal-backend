const db = require('../scripts/database');

class TransactionService {
    async create(data) {
      const result = await db.query(
        `INSERT INTO transactions 
        (first_product_id, second_product_id) 
        VALUES 
        ('${data.firstProductId}', '${data.secondProductId}')`
      );
    
      return result.info;
    }

    async read(id) {
      const result = await db.query(
        `SELECT 
        id, first_product_id, second_product_id 
        FROM transactions ${id && `WHERE id='${id}'`}`
      );

      return result;
    }

    async update(id, data) {
      const queries = [];

      Object.keys(data).map(item => {
        switch (item) {
          case 'firstProductId':
            queries.push(`first_product_id='${data.firstProductId}'`)
            break;
          case 'secondProductId':
            queries.push(`second_product_id='${data.secondProductId}'`)
            break;
          default:
            break;
        }
      })

      const result = await db.query(
        `UPDATE 
        transaction
        SET
        ${queries.join(',')}
        WHERE id='${id}'`
      );

      return result;
    }

    async delete(id) {
      const result = await db.query(
        `DELETE FROM transaction
        WHERE id='${id}'`
      );
    
      return result.info;
    }
}

module.exports = new TransactionService();
