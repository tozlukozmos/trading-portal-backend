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

<br/>

## Setup
To run this project, install it locally using npm. Keep in mind that you should be in the root directory before running these commands.
```
$ npm install
$ node index.js
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
    "id": 1234567890,
    "name": "Gerald",
    "surname": "Mitchell",
    "email": "gerald.mitchell@example.com",
    "birthday": {
        "day": 6,
        "month": 10,
        "year": 1973
    },
    "password": "kdsh7323£#05"
}
```
