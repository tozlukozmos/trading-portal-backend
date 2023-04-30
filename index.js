const express = require("express");
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const helmet = require("helmet");
const cors = require("cors");

require("dotenv").config();

var app = express();
app.use(express.json());
app.use(helmet());
app.use(express.urlencoded({extended: true}));



// SWAGGER

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'API Title',
    version: '1.0.0',
    description: 'API Description',
  },
  servers: [
    {
      url: 'http://localhost:3000',
      description: 'Development server',
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ['./src/routes/*.js'],
};
const swaggerSpec = swaggerJSDoc(options);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));






// ROUTES
const userRoutes = require("./src/routes/user");
const authRoutes = require("./src/routes/auth");
const productRoutes = require("./src/routes/product");
const transactionRoutes = require("./src/routes/transaction");

const corsOptions = {
  credentials: true,
  origin: [
    "http://localhost:3000",
    "http://192.168.2.112:3000",
  ],
  allowedHeaders: [
    "Content-Type",
    "Authorization",
    "Access-Control-Allow-Origin",
  ],
  exposedHeaders: [
    "Content-Range",
    "X-Content-Range",
  ],
  maxAge: 600,
  preflightContinue: false,
};

app.use(cors(corsOptions));

// USER
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

// PRODUCT
app.use("/api/products", productRoutes);

// TRANSACTION
app.use("/api/transactions", transactionRoutes);

app.use((req, res, next) => {
  res.status(404).send({error: true, message: 'Route bulunamadı!', result: null})
  next();
})

const port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log("Started application on port %d", port);
});
