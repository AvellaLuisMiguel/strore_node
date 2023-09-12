const express = require('express');//trae express
const Product=require('./../services/product.service')
const router= express.Router();

const product=new Product();

router.get('/:number_products', async (req,res)=>{
  const { number_products }=req.params;
  await product.fillProducts(number_products);
  res.json(product.products);
})

router.post('/create', async (req, res)=>{
  const body=req.body;
  await product.create(body);
})

router.get('/findByName/:name', async(req,res)=>{
  const { name }= req.params;
  const prouctFind=await product.findByName(name);
  res.json(prouctFind)
})



/*router.get('/', (req,res) =>{
  const products=[];
  const { size } = req.query;
  const limit = size || 10;//si le enviamos el tamaño agrega los que mandemos por parametro y si no genera 10
  for (let index = 0; index < 50; index++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(),10),
      image: faker.image.imageUrl(),
    });

  }
  res.json(products)
});

router.post('/post', (req,res)=>{
  const body=req.body
  res.json(
    {
      message:"cerate",
      data: body
    }
  )
})

router.patch('/:id', (res,req)=>{//actualiza con pocos parametros recibe objetos de forma parcial
  const body=req.body
  const { id }=req.params

  res.json(
    {
      message:"update",
      data: body,
      id
    }
  )
})

router.delete('/:id', (res,req)=>{//elimina
  const { id }=req.params
  res.json(
    {
      message:"delete",
      id
    }
  )
})*/


//Path params
/*router.get('/:id', (req,res) =>{//los dos puntos hacen referencia al parametro
  const { id }= req.params;//el req recoje el id dentro de la URL con la propiedad params
  res.json(
    {
      id,
      name: "Product 1",
      price: 1000
    },
  );
});*/

module.exports = router;
