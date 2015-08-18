var fs  = require("fs"); 

var findProducts = function (fileName) {

    var productList = []; 
    var productMap = {};

    var fileContent = fs.readFileSync(fileName, 'utf8'); 
    //The splice method remove the items for an array
    var products = fileContent.split("\r").splice(1); 
     
products.forEach(function(product){ 
      
    var hold = product.split(";"); 
    var productName = hold[2];
         // console.log(product)
         //Here i check if productName is not equal to undefined,productList pushes productName to the console.log
      if(productMap[productName] === undefined && productName != undefined){
        productMap[productName] = 0;
        productList.push(productName); 
       }
      
  }); 
 // console.log(productList);
  return productList;

}

exports.linesInFiles = function(fileName){
  var productList = findProducts(fileName);
  return productList;
}