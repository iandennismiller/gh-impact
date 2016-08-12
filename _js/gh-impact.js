/*
Ian Dennis Miller
*/

var query = function() {

    var account_name = $("#account_name_query").val();
    if ((!account_name) || (account_name == "undefined")) {
        return(false);
    }

    // first clear all fields
    $("#account_name").html("");
    $("#impact_score").html("");
    $("#percentile").html("");
    $("#account_type").html("");

    // then hide and reveal the correct blocks
    $("#masked").css("display", "block");
    $("#examples").css("display", "none");
    $("#search_box").css("display", "none");

    var bucket = $.md5(account_name.toLowerCase()).slice(0, 2);

    $.getJSON( "data/json/" + bucket + ".json", function(data) {
        var account = data[account_name.toLowerCase()];
        if (account != undefined) {
            $("#account_name").html("<a target='_blank' href='http://github.com/" + account["l"] + "'>" + account["l"] + "</a>");
            $("#impact_score").html("<a href='http://www.gh-impact.com/#" + account["l"] + "'>" + account["s"] + "</a>");
            if (account["t"] == 1) {
                $("#account_type").html("Individual");
            }
            else {
                $("#account_type").html("Organization");
            }
            show_percentile(account["s"], account["t"]);
            location.hash = account["l"];
            document.title = "gh-impact report: " + account["l"];

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

var show_percentile = function(score, account_type) {
    var percentiles = [
        [
            0.0000000,
            0.0000000,
            0.6885959,
            0.8671090,
            0.9351361,
            0.9648836,
            0.9800906,
            0.9877688,
            0.9918916,
            0.9944002,
            0.9960253,
            0.9970601,
            0.9977180,
            0.9982583,
            0.9986461,
            0.9989227
        ],
        [
            0.0000000,
            0.0000000,
            0.6473897,
            0.8297125,
            0.9052110,
            0.9424624,
            0.9621485,
            0.9734064,
            0.9807640,
            0.9853394,
            0.9887011,
            0.9909582,
            0.9927925,
            0.9940676,
            0.9950222,
            0.9956905
        ]
    ];

    var result;

    if (account_type == 1) { // individual
        if (score < 15) {
            result = Math.round(percentiles[0][score] * 100);
        }
        else {
            result = 99;
        }
    }
    else { //organziation
        if (score < 15) {
            result = Math.round(percentiles[1][score] * 100);
        }
        else {
            result = 99;
        }
    }

    $("#percentile").html(result);
}

var run_location = function() {
    if (location.hash != "") {
        var q = location.hash;
        q = q.substring(1, location.hash.length);
        $("#account_name_query").val(q);
        query();

        ga('send', {
            hitType: 'event',
            eventCategory: 'index',
            eventAction: 'run_location',
        });
    }
    else {
        $("#masked").css("display", "none");
        $("#account_name_query").val("");
        $("#search_box").css("display", "block");

        setTimeout(function(){
            $("#account_name_query").focus();
        }, 1);

        show_examples();
    }
}

var show_examples = function() {
    $("#examples ul").randomize("li");
    $("#examples ul li").slice(5, $("#examples ul li").length).remove();
    $("#examples").slideDown();

    ga('send', {
        hitType: 'event',
        eventCategory: 'index',
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
    $('#search').keypress(handle_enter);

    $('#account_name_query').keypress(handle_enter);

    $(window).on('hashchange', run_location);
    run_location();
});
