/*
Ian Dennis Miller
*/

/*
http://stackoverflow.com/a/1533945/1146681
*/
(function($) {
$.fn.randomize = function(childElem) {
        return this.each(function() {
        var $this = $(this);
        var elems = $this.children(childElem);

        elems.sort(function() { return (Math.round(Math.random())-0.5); });

        $this.detach(childElem);

        for(var i=0; i < elems.length; i++)
        $this.append(elems[i]);

        });
    }
})(jQuery);

/*
*/

var query = function() {

    var account_name = $("#account_name_query").val();
    if ((!account_name) || (account_name == "undefined")) {
        return(false);
    }

    $("#masked").css("display", "block");
    $("#examples").css("display", "none");
    $("#search_box").css("display", "none");

    var first_letter = account_name[0];

    $.getJSON( "data/json/" + first_letter + ".json", function(data) {
        if (data[account_name] != undefined) {
            $("#account_name").html("<a target='_blank' href='http://github.com/" + account_name + "'>" + account_name + "</a>");
            $("#impact_score").html(data[account_name]);
            location.hash = account_name;
            document.title = "gh-impact report: " + account_name;

            ga('send', {
                hitType: 'event',
                eventCategory: 'search',
                eventAction: 'query',
            });
        }
        else {
            $("#account_name").html("not found");
            $("#impact_score").html("");

            ga('send', {
                hitType: 'event',
                eventCategory: 'search',
                eventAction: 'not_found',
            });
        }
    });
}

var run_location = function() {
    if (location.hash != "") {
        var q = location.hash;
        q = q.substring(1, location.hash.length);
        $("#account_name_query").val(q);
        query();

        ga('send', {
            hitType: 'event',
            eventCategory: 'search',
            eventAction: 'run_location',
        });
    }
    else {
        $("#masked").css("display", "none");
        $("#search_box").css("display", "block");
        show_examples();
    }
}

var show_examples = function() {
    $("#examples ul").randomize("li");
    $("#examples ul li").slice(5, $("#examples ul li").length).remove();
    $("#examples").slideDown();

    ga('send', {
        hitType: 'event',
        eventCategory: 'search',
        eventAction: 'show_examples',
    });
}

var handle_enter = function (e) {
    if (e.which == 13) {
        query();
        return false;
    }
}

$(function() {
    $("#search").removeAttr("href");

    $("#search").click(query);

    $(window).on('hashchange', run_location);

    $('#account_name_query').keypress(handle_enter);
    $('#search').keypress(handle_enter);

    run_location();
});
