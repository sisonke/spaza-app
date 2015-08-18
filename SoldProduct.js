var fs  = require("fs"); 

var mostSolditems = require('./mostSolditems');

 exports.popularProduct = function (fileName) {
 	var productMap = mostSolditems.productsSold(fileName);

    
    
   	var SoldProduct = {};
   	var maximum = 0;

   for( var product in productMap) {

   	var value = productMap[product];
   	     if(productMap[product] > maximum) {
          maximum = productMap[product];
        
          SoldProduct = {
              name: product,
              amount: maximum

             };

   	     };
   };
         console.log(SoldProduct);
        return SoldProduct;
};


