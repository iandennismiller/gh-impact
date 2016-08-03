/*
Ian Dennis Miller
*/

var query = function() {
    $("#masked").css("display", "block");
    var account_name = $("#account_name_query").val();
    var first_letter = account_name[0];
    $.getJSON( "data/" + first_letter + ".json", function(data) {
        if (data[account_name] != undefined) {
            $("#account_name").html("<a target='_blank' href='http://github.com/" + account_name + "'>" + account_name + "</a>");
            $("#impact_score").html(data[account_name]);
            location.hash = account_name;
        }
        else {
            $("#account_name").html("not found");
            $("#impact_score").html("");
        }
    });
}

$(function() {
    $("#search").removeAttr("href");

    $("#search").click(query);

    $('#account_name_query').keypress(function (e) {
        if (e.which == 13) {
            // $('form#login').submit();
            query();
            return false;
        }
    });

    if (location.hash != "") {
        var q = location.hash;
        q = q.substring(1, location.hash.length);
        $("#account_name_query").val(q);
        query();
    }
});
