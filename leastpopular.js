var fs  = require("fs"); 

var mostSolditems = require('./category');

 exports.popularProduct = function (fileName) {
 	var categoryMap = mostSolditems.popularProduct(fileName);

    
    
   	var leastpopularCategory = {};
   	var min= 328;
//using for loop and if statement,i also use literal object (containing key and the value) 
   for( var product in categoryMap) {

   	var value = categoryMap[product];
   	     if(categoryMap[product] < min) {
          min = categoryMap[product];
        
          leastpopularCategory = {
              name: product,
              amount: min

             };

   	     };
   };
        console.log(leastpopularCategory);
        return leastpopularCategory;
};
