const express = require('express');//trae express
const faker = require('faker');
const router= express.Router();

router.get('/', (req,res) =>{
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


//Path params
router.get('/:id', (req,res) =>{//los dos puntos hacen referencia al parametro
  const { id }= req.params;//el req recoje el id dentro de la URL con la propiedad params
  res.json(
    {
      id,
      name: "Product 1",
      price: 1000
    },
  );
});

module.exports = router;
