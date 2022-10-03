const friends = ['Tom Hanks', 'Tom cruise','tom brady','Tom solaiman'];
const flength = friends.map(friend => friend.length);
console.log(flength);

const products = [
    {name: 'water bottle', price: 50, color: 'yellow'},
    {name: 'smart watch', price: 20, color: 'black'},
    {name: 'mobile phone', price: 50000, color: 'blue'}
]
const productName = products.map(product => product.name);
console.log(productName);