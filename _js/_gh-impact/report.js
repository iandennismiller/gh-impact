var request_report = function(account_name) {
    var bucket = $.md5(account_name.toLowerCase()).slice(0, 2);
    $.getJSON("/data/json/" + bucket + ".json",
        function(data) {
            var account_data = data[account_name.toLowerCase()];
            report(account_name, account_data);
        }
    );
}

var report = function(account_name, account_data) {
    setup_report();

    if (account_data != undefined) {
        ga('send', {
            hitType: 'event',
            eventCategory: 'report',
            eventAction: 'render',
            eventLabel: account_name,
            eventValue: 1
        });

        render_report(account_data);
    }
    else {
        ga('send', {
            hitType: 'event',
            eventCategory: 'report',
            eventAction: 'not_found',
            eventLabel: account_name,
            eventValue: 0
        });

        render_not_found();
    }
}

var setup_report = function() {
    // first clear all fields
    $("#account_name").html("");
    $("#impact_score").html("");
    $("#percentile").html("");
    $("#account_type").html("");

    // then hide and reveal the correct blocks
    $("#masked").css("display", "block");
    $("#examples").css("display", "none");
    $("#search_box").css("display", "none");
}

var render_report = function(account_data) {
    $("#account_name").html("<a target='_blank' href='http://github.com/" + account_data["l"] + "'>" + account_data["l"] + "</a>");
    $("#impact_score").html("<a href='http://www.gh-impact.com/#" + account_data["l"] + "'>" + account_data["s"] + "</a>");
    if (account_data["t"] == 1) {
        $("#account_type").html("Individual");
    }
    else {
        $("#account_type").html("Organization");
    }
    show_percentile(account_data["s"], account_data["t"]);
    document.title = "gh-impact report: " + account_data["l"];
}

var render_not_found = function() {
    $("#account_name").html("not found");
    $("#impact_score").html("");
}

var show_percentile = function(score, account_type) {
    var relevant_pct;
    var result;

    if (account_type == 1) { // individual
        relevant_pct = percentiles["individuals"];
    }
    else { //organziation
        relevant_pct = percentiles["organizations"];
    }

    if (score > 10) {
        result = 99;
    }
    else {
        result = Math.round(relevant_pct[score]);
    }

    if (result == 100) {
        result = 99;
    }

    $("#percentile").html(result);
}
