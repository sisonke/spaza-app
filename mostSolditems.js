var fs  = require("fs"); 

  var findProducts = function (fileName) {

    var productsSold = []; 
    var productMap = {};

    var fileContent = fs.readFileSync(fileName, 'utf8'); 
        //The splice method remove the items for an array
    var products = fileContent.split("\r").splice(1); 

products.forEach(function(product){ 

        var hold = product.split(";");
        var productName = hold[2];
        //
        var productQty = Number(hold[3]);

        if(productName === undefined){
        return productsSold;
}

    // console.log(product)
         //Here i check if productName is not equal to undefined,productList pushes productName to the console.log
     if(productMap[productName] === undefined){
      productMap[productName] = 0;
      productsSold.push(productName); 
 }
        //we know the productName is in the list...
        //console.log(productMap[productName]);

        // ???????
   productMap[productName] = productMap[productName] + productQty;

  }); 
     // console.log(productsSold);
      return productMap;

   }

   exports.productsSold = function(fileName){
   var productList = findProducts(fileName);
      return productList;

       }
