const db = require("../scripts/database");

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
      `SELECT p.id, p.title, p.description, p.image, p.created_at, p.updated_at,
      JSON_OBJECT('id', u.id, 'firstName', u.first_name, 'lastName', u.last_name, 'email', u.email, 'phoneNumber', u.phone_number) as user,
      JSON_ARRAYAGG(
          JSON_OBJECT('id', c.id, 'comment', c.comment, 'createdAt', c.created_at, 'updatedAt', c.updated_at,
          'user', JSON_OBJECT('id', uc.id, 'firstName', uc.first_name, 'lastName', uc.last_name, 'email', uc.email, 'phoneNumber', uc.phone_number))
      ) as comments,
      JSON_ARRAYAGG(
        JSON_OBJECT('id', uf.id, 'firstName', uf.first_name, 'lastName', uf.last_name, 'email', uf.email, 'phoneNumber', uf.phone_number)
      ) as likes
      FROM products p
      JOIN users u ON p.user_id = u.id
      LEFT JOIN comments c ON p.id = c.product_id
      LEFT JOIN users uc ON c.user_id = uc.id
      LEFT JOIN favorites f ON p.id = f.product_id
      LEFT JOIN users uf ON f.user_id = uf.id
      WHERE p.id='${id}'
      GROUP BY p.id`
    );
    return result;
  }

  async readAll() {
    const result = await db.query(
        `SELECT p.id, p.title, p.description, p.image, p.created_at, p.updated_at,
        JSON_OBJECT('id', u.id, 'firstName', u.first_name, 'lastName', u.last_name, 'email', u.email, 'phoneNumber', u.phone_number) as user,
        JSON_ARRAYAGG(
            JSON_OBJECT('id', c.id, 'comment', c.comment, 'createdAt', c.created_at, 'updatedAt', c.updated_at,
            'user', JSON_OBJECT('id', uc.id, 'firstName', uc.first_name, 'lastName', uc.last_name, 'email', uc.email, 'phoneNumber', uc.phone_number))
        ) as comments,
        JSON_ARRAYAGG(
            JSON_OBJECT('id', uf.id, 'firstName', uf.first_name, 'lastName', uf.last_name, 'email', uf.email, 'phoneNumber', uf.phone_number)
        ) as likes
        FROM products p
        JOIN users u ON p.user_id = u.id
        LEFT JOIN comments c ON p.id = c.product_id
        LEFT JOIN users uc ON c.user_id = uc.id
        LEFT JOIN favorites f ON p.id = f.product_id
        LEFT JOIN users uf ON f.user_id = uf.id
        GROUP BY p.id`
    );
    return result;
  }

  async readUserProducts(userId) {
    const result = await db.query(
        `SELECT p.id, p.title, p.description, p.image, p.created_at, p.updated_at,
        JSON_OBJECT('id', u.id, 'firstName', u.first_name, 'lastName', u.last_name, 'email', u.email, 'phoneNumber', u.phone_number) as user,
        JSON_ARRAYAGG(
            JSON_OBJECT('id', c.id, 'comment', c.comment, 'createdAt', c.created_at, 'updatedAt', c.updated_at,
            'user', JSON_OBJECT('id', uc.id, 'firstName', uc.first_name, 'lastName', uc.last_name, 'email', uc.email, 'phoneNumber', uc.phone_number))
        ) as comments,
        JSON_ARRAYAGG(
            JSON_OBJECT('id', uf.id, 'firstName', uf.first_name, 'lastName', uf.last_name, 'email', uf.email, 'phoneNumber', uf.phone_number)
        ) as likes
        FROM products p
        JOIN users u ON p.user_id = u.id
        LEFT JOIN comments c ON p.id = c.product_id
        LEFT JOIN users uc ON c.user_id = uc.id
        LEFT JOIN favorites f ON p.id = f.product_id
        LEFT JOIN users uf ON f.user_id = uf.id
        WHERE p.user_id='${userId}'
        GROUP BY p.id`
    );
    return result;
  }

  async readUserFavoriteProducts(userId) {
    const result = await db.query(
        `SELECT 
          JSON_OBJECT(
              'id', p.id,
              'title', p.title,
              'description', p.description,
              'created_at', p.created_at,
              'updated_at', p.updated_at
          ) AS product,
          f.created_at,
          f.updated_at
          FROM favorites f
          JOIN products p ON f.product_id = p.id
          WHERE f.user_id = '${userId}'`
    );
    return result;
  }

  async update(id, data) {
    const queries = [];

    Object.keys(data).map((item) => {
      switch (item) {
        case "title":
          queries.push(
            `first_name='${data.title}'`
          );
          break;
        case "description":
          queries.push(
            `last_name='${data.description}'`
          );
          break;
        case "image":
          queries.push(
            `password='${data.image}'`
          );
          break;
        case "userId":
          queries.push(
            `email='${data.userId}'`
          );
          break;
        default:
          break;
      }
    });

    const result = await db.query(
      `UPDATE 
        products
        SET
        ${queries.join(",")}
        WHERE id='${id}'`
    );

    return result;
  }

  async like(productId, userId) {
    const result = await db.query(
      `INSERT INTO favorites 
        (product_id, user_id) 
        VALUES 
        ('${productId}', '${userId}')`
    );
    return result.info;
  }

  async unlike(productId, userId) {
    const result = await db.query(
      `DELETE FROM favorites 
      WHERE product_id='${productId}' AND user_id='${userId}'`
    );

    return result.info;
  }

  async comment(productId, data) {
    const result = await db.query(
      `INSERT INTO comments 
        (product_id, user_id, comment) 
        VALUES 
        ('${productId}', '${data.userId}', '${data.comment}')`
    );
    return result.info;
  }

  async deleteComment(commentId) {
    const result = await db.query(
      `DELETE FROM comments 
      WHERE id='${commentId}'`
    );

    return result.info;
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
