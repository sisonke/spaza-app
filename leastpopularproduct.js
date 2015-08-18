var fs  = require("fs"); 

var mostSolditems = require('./mostSolditems');

 exports.productsSold = function (fileName) {
 	var categoryProduct = mostSolditems.productsSold(fileName);

    
    
   	var leastpopularproduct = {};
   	var min = 172 ;// max product in this case is 172,
//using for loop and if statement,i also use literal object (containing key and the value) 
   for( var product in categoryProduct) {

   	var value = categoryProduct[product];
   	     if(categoryProduct[product] < min) {
          min = categoryProduct[product];
        
          leastpopularproduct = {
              name: product,
              amount: min

             };

   	     };
   };
        console.log(leastpopularproduct);
        return leastpopularproduct;
};