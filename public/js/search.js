//ajax
$(document).ready(function() {
  $("#search").keyup(function() {
    var value = $("#search").val();
    $.get("/products/search/" + value, function(results) {
      $("#products").html(results);
    });
  });

  // $(document).ready(function() {
  //   $("#search").keyup(function() {
  //     var categoryValue = $("search").Value();
  //     $.get("categories/search" + categoryValue, function(results) {
  //       $("#categories").html(results);
  //     });
  //   });
  // });
});
