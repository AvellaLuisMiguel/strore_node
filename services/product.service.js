const faker = require('faker');

class Product{
  constructor(){
    this.products=[];
    //this.fillProducts(23);
  }

  fillProducts(number){
    for (let index = 0; index < number; index++) {
      this.products.push({
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(),10),
        image: faker.image.imageUrl(),
      });
    }
  }
}

module.exports=Product;
