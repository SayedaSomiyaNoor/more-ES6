const numbers = [12,4,7,34,16,43,21,43,54,32]
const bigNumbers = numbers.filter(number => number > 20);
console.log(bigNumbers);

const products = [
    {name: 'water bottle', price: 50, color: 'yellow'},
    {name: 'smart watch', price: 20, color: 'black'},
    {name: 'mobile phone', price: 50000, color: 'blue'},
    {name: 'water glass', price: 2, color: 'white'}
];
const productName = products.filter(product => product.price > 100);
console.log(productName);
const whiteIteam = products.find(product => product.color == "white");
console.log(whiteIteam);