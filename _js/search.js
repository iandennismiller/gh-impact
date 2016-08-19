var handle_search = function() {
    var account_name = $("#account_name_query").val();
    if ((!account_name) || (account_name == "undefined")) {
        return(false);
    }

    ga('send', {
        hitType: 'event',
        eventCategory: 'search',
        eventAction: 'submit',
        eventLabel: account_name,
        eventValue: 1
    });

    // setting this triggers onhashchange, triggering run_location
    location.hash = account_name;
}

var handle_search_enter = function (e) {
    if (e.which == 13) {
        handle_search();
        return false;
    }
}

var init_search_handlers = function() {
    $("#search").click(handle_search);
    $('#search').keypress(handle_search_enter);
    $('#account_name_query').keypress(handle_search_enter);
}

var setup_search = function() {
    $("#masked").css("display", "none");
    $("#search_box").css("display", "block");

    $("#search").removeAttr("href");

    $("#account_name_query").val("");
    setTimeout(function(){
        $("#account_name_query").focus();
    }, 1);
}
