const productRouter = require ('./products.router')//importa product

function routerApi(app){
  app.use('/products', productRouter);
}

module.exports = routerApi
