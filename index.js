const express = require('express');//trae express
const app = express();//creacion de un aplicacion con el constructor de express()
const port = 3000;//Puerto donde se va a ejecuar el servidor

app.get('/', (req,res)=>{//ruta original
  res.send("Hola mi server en express");
});

app.get('/products', (req,res) =>{
  res.json(
    [
      {
        name: "Product 1",
        price: 1000
      },
      {
        name: "Product 2",
        price: 2000
      }
    ]
  )
});


//Path params
app.get('/products/:id', (req,res) =>{//los dos puntos hacen referencia al parametro
  const { id }= req.params;//el req recoje el id dentro de la URL con la propiedad params
  res.json(
    {
      id,
      name: "Product 1",
      price: 1000
    },
  );
});

app.get('/categories/:categoryId/products/:productId', (req,res)=>{
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
});

app.listen(port,()=>{
  console.log('Mi port' + port)
})
