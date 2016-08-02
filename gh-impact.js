/*
Ian Dennis Miller
*/

var query = function() {
  $("#masked").css("display", "block");
  var account_name = $("#account_name_query").val();
  var first_letter = account_name[0];
  $.getJSON( "data/" + first_letter + ".json", function(data) {
    $("#account_name").html("<a target='_blank' href='http://github.com/" + account_name + "'>" + account_name + "</a>");
    $("#impact_score").html(data[account_name]);
  });
}

$(function() {
  $("#search").removeAttr("href");
  $("#search").click(query);
});
