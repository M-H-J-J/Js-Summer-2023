//1
let products = [
    {name: "Strong Balm", price: 24, quantity: 5},
    {name: "Lip Tro", price: 22, quantity: 3},
    {name: "Tingle Lips", price: 10, quantity: 7},
    {name: "Coco Lips", price: 11, quantity: 2},
    {name: "Lip Nourish", price: 14, quantity: 4},
];

//2
for(let i = 0; i < products.length; i++) {
    console.log(products[i].name + ": $" + products[i].price)
}

//3
let i = 0
let lowestPrice = 0
while (i < products.length) {
    if (products[i].price < products[lowestPrice].price) {
        lowestPrice = i
    }
    i++
};
console.log(products[lowestPrice].name + ' is the cheapest at $' +products[lowestPrice].price);

//4
totalValue = 0
for (let number of products) {
    totalValue += number.price
}
console.log('Total value of all products: $' + totalValue)

//5
for(let key in products) {
    console.log('\nName: ' + products[key].name + '\nPrice: $' + products[key].price + '\nQuantity: ' + products[key].quantity)
}

//6
for (let i = 1; i <= 100; i++) {
    if((i % 3 === 0) && (i % 5 === 0)) {
        console.log('FizzBuzz')
    } else if(i % 3 === 0) {
        console.log('Fizz')
    } else if(i % 5 === 0) {
        console.log('Buzz')
    } else {
    console.log(i);
    }
}