var examples_ready = false;

var generate_examples = function() {
    if (examples_ready) { return(false); }

    var examples = [];
    examples = examples.concat(leaderboard_individuals);
    examples = examples.concat(leaderboard_organizations);
    examples.push({login: "iandennismiller", gh_impact: 4});

    initRandomBucket(examples.length);

    var root_element = $("#examples ul");

    for (var i = 0; i < 5; i++) {
        var account = examples[getRandomFromBucket()].login;
        var link = $("<a class='exlinks'>").attr("href", "/#" + account).html(account);
        var node = $("<li>");
        node.append($("<span class='example'>").html(link));
        root_element.append(node);
    }

    $(".exlinks").click(function() {
        ga('send', 'event', {
            eventCategory: 'example',
            eventAction: 'click',
            eventLabel: $(this).attr("href"),
            eventValue: 1,
            transport: 'beacon'
            }
        );
    })

    examples_ready = true;
    return(true);
}

var show_examples = function() {
    generate_examples();
    $("#examples").show();
}
