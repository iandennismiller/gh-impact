var leaderboard_populate = function(element, leaderboard_array) {
    for (var idx in leaderboard_array) {
        var account = leaderboard_array[idx];
        var entry = $("<li>");
        var link = $("<a>").attr("href", "/#" + account.login).html(account.login);
        entry.append(
            // $("<span class='leader_login'>").html(account.login),
            $("<span class='leader_login'>").html(link),
            $("<span class='leader_gh_impact'>").html(account.gh_impact)
        );
        element.append(entry);
    }
}

var leaderboard_main = function() {
    $("#individuals").append($("<ul>"));
    $("#organizations").append($("<ul>"));

    leaderboard_populate($("#individuals ul"), leaderboard_individuals);
    leaderboard_populate($("#organizations ul"), leaderboard_organizations);
}
