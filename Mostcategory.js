
var fs = require('fs');
var category = require('./category');


exports.findPopularProduct  = function (fileName) {
 	var categoryProductMap = category.popularProduct (fileName);
 	//console.log(categoryProductMap)

    
   	var categoryProduct = {};
   	var max = 0 ;// max product in this case is 328,
//using for loop and if statement,i also use literal object (containing key and the value) 
   for( var product in categoryProductMap) {

   	 var value = categoryProduct[product];
   	     if(categoryProductMap[product] > max) {
          // categoryProduct[product] = categoryProduct;
        
          max = categoryProductMap[product];
             categoryProduct = {
              name: product, 
              amount: max

             };

   	     };
   };
       // console.log(categoryProductMap);
        return categoryProduct;
   
};