var fs  = require("fs"); 
var findcat = function(fileName){
var mostSolditems = require('./mostSolditems');

    var getCategory = {

  'Milk 1l':'dairy',
  'Imasi':'dairy',
  'Bread':'grain products',
  'Chakalaka Can':'cannedfood',
  'Gold Dish Vegetable Curry Can':'cannedfood',
  'Fanta 500ml':'colddrinks',
  'Coke 500ml':'colddrinks',
  'Cream Soda 500ml':'colddrinks',
  'Iwisa Pap 5kg':'grain products',
  'Top Class Soy Mince': 'dry grocery',
  'Shampoo 1 litre':'toiletries',
  'Soap Bar':'toiletries',
  'Bananas - loose':'fruits',
  'Apples - loose':'fruits',
  'Mixed Sweets 5s':'confectionery',
  'Heart Chocolates':'confectionery',
  'Rose (plastic)':'gifts',
  'Valentine Cards':'gifts'
    }
    var productMap = mostSolditems.productsSold(fileName);
    var catMap = {};
   for(var productName in productMap) {
    var categoryName = getCategory[productName];
    var quantity = productMap[productName];
    if(catMap[categoryName] === undefined) {
       catMap[categoryName] = 0;
    };
    catMap[categoryName] = catMap[categoryName]+quantity;
   };
   //console.log(catMap);
  return catMap;
  
}
 exports.popularProduct = function (fileName) {
  var catMap = findcat(fileName);
  return catMap;
}
 