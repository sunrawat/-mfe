import { faker } from '@faker-js/faker';


let product = '';
for(var i=0;i<5;i++) {
    const name = faker.commerce.productName();
    product+= `<div>${name} </div>`;
}
console.log("product page loaded")
document.getElementById('products').innerHTML = product;