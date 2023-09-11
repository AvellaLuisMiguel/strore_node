const productRouter = require ('./products.router')//importa product
const express = require('express');

function routerApi(app){
  const router=express.Router()
  app.use('/api/v1', router)
  router.use('/products', productRouter);
}

module.exports = routerApi
