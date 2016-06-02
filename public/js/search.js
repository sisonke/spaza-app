//ajax
$(document).ready(function() {
  $("#search").keyup(function() {
    var value = $("#search").val();
    //console.log(value);
    $.get("/products/search/" + value, function(results) {
      $("#products").html(results);

    });
  });

        $("#searchValues").keyup(function() {
          var Value = $("#searchValues").val();
        //  console.log(Value);
          $.get("/categories/search/" + Value, function(results) {
          console.log(results);
            $("#categories").html(results);
          });
        });
      });
