const faker = require('faker');

class Product{
  constructor(){
    this.products=[];
    //this.fillProducts(23);
  }

  async fillProducts(number){
    for (let index = 0; index < number; index++) {
      this.products.push({
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(),10),
        image: faker.image.imageUrl(),
      });
    }
  }

  async create(body){
    this.products.push({
      name: body.name,
      price: body.price,
      image: body.image
    })
  }

  async findByName(name){
    return this.products.find(el => el.name === name);
  }

}

module.exports=Product;
