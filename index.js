const express = require('express');//trae express
const routerApi = require('./routes');

const app = express();//creacion de un aplicacion con el constructor de express()
const port = 3000;//Puerto donde se va a ejecuar el servidor

app.use(express.json())

routerApi(app)

/*app.get('/categories/:categoryId/products/:productId', (req,res)=>{
  const { categoryId, productId} = req.params;
  res.json({
    categoryId,
    productId
  });
});


//Queri params para hacer filtros o consulas dento de la URL
app.get('/users', (req,res)=>{//los parametros se envian con $
  const { limit, offset } = req.query;
  if (limit && offset) {
    res.json(
      {
        limit,
        offset
      }
    )
  }else {
    res.send("No hay params")
  }
});*/

app.listen(port,()=>{
  console.log('Mi port' + port)
})
