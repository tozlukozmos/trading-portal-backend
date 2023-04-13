const database = {
  credentials: {
    host: process.env.MYSQLHOST,
    user: process.env.MYSQLUSER,
    password: process.env.MYSQLPASSWORD,
    database: process.env.MYSQLDATABASE,
  },
  listPerPage: 10,
};

module.exports = database;
