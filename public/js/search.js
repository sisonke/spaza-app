//ajax 
$(document).ready(function(){
         $("#search").keyup(function(){
             var value = $("#search").val();
             $.get("/products/search/" + value, function(results){
                 $("#products").html(results);
             });
         });
});
