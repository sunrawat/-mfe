import { faker } from '@faker-js/faker';


let product = '';
for(var i=0;i<2;i++) {
    const name = faker.commerce.productName();
    product+= `<div>cart - ${name} </div>`;
}
console.log("cart page loaded")
document.getElementById('cart').innerHTML = product;