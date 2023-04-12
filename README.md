# trading-portal-backend
 COMP202 and COMP204 term project

<br/>

## Dependencies
* [CORS](https://www.npmjs.com/package/cors)
(v2.8.5) for cors policy restrictions
* [Express](https://www.npmjs.com/package/express)
(v4.18.2) for creating server
* [Helmet](https://www.npmjs.com/package/helmet)
(v6.1.2) for protecting header against attacks
* [dotenv](https://www.npmjs.com/package/dotenv)
(v16.0.3) for protecting sensitive data
* [mysql2](https://www.npmjs.com/package/mysql2)
(v3.2.0) for communicating with a MySQL database

<br/>

## Setup
To run this project, install it locally using npm. Keep in mind that you should be in the root directory before running these commands.
```
$ npm install
$ node index.js
```

<br/>

## MySQL Script to Get Started
```
$ CREATE DATABASE tradingdb CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
$ USE tradingdb;
$ CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(50),
  last_name VARCHAR(50),
  password VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL UNIQUE,
  phone_number VARCHAR(50),
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 AUTO_INCREMENT=5;
```

<br/>

## Environment Variables
Do not forget to create your own .env file at the root of the project folder. This is how it should looks like
```
$ PORT=3000
$ MYSQL_HOST="localhost"
$ MYSQL_USER="your_mysql_user_name"
$ MYSQL_PASSWORD="your_mysql_password"
$ MYSQL_DATABASE="tradingdb"
```

<br/>

## Routes
There is only basic routes for a user.
| HTTP Methods  | Endpoints                |
| ------------- | ------------------------ | 
| `POST`        | /auth/login              | 
| `POST`        | /auth/register           | 
| `GET`         | /users                   | 
| `GET`         | /users/:userId           | 
| `PUT`         | /users/:userId/update    | 
| `DELETE`      | /users/:userId/delete    | 

<br/>

## Sample user data
You can use this sample user data in HTTP request body.
```json
{
    "firstName": "Gerald",
    "lastName": "Mitchell",
    "email": "gerald.mitchell@example.com",
    "password": "kdsh7323£#05",
    "phoneNumber": "05111111111"
}
```

## Troubleshooting
### Problem: ER_NOT_SUPPORTED_AUTH_MODE: Client does not support authentication protocol requested by server; consider upgrading MySQL client
### Solution: https://stackoverflow.com/questions/52815608/er-not-supported-auth-mode-client-does-not-support-authentication-protocol-requ
