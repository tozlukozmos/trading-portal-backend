const db = require('../scripts/database');

class TransactionService {
    async create(data) {
      const result = await db.query(
        `INSERT INTO transactions 
        (user_id, product_id, type, amount, unit) 
        VALUES 
        ('${data.userId}', '${data.productId}', '${data.type}', '${data.amount}', '${data.unit}')`
      );
    
      return result.info;
    }
    async login(data){
      const result = await db.query(
        `SELECT 
        * 
        FROM transactions WHERE amount='${data.amount}' AND type='${data.type}'`
      );

      return result;
    }
    async read(id) {
      const result = await db.query(
        `SELECT 
        id, user_id, product_id, type, amount, unit 
        FROM transactions ${id && `WHERE id='${id}'`}`
      );

      return result;
    }
    async update(id, data) {
      const queries = [];

      Object.keys(data).map(item => {
        switch (item) {
          case 'userId':
            queries.push(`user_id='${data.userId}'`)
            break;
          case 'productId':
            queries.push(`product_id='${data.productId}'`)
            break;
          case 'type':
            queries.push(`type='${data.type}'`)
            break;
          case 'amount':
            queries.push(`amount='${data.amount}'`)
            break;
          case 'unit':
            queries.push(`unit='${data.unit}'`)
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
