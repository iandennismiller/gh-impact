/*
Ian Dennis Miller
*/

var run_location = function() {
    var account_name = location.hash;
    if (account_name != "") {
        account_name = account_name.substring(1, account_name.length);
        $("#account_name_query").val(account_name);
        request_report(account_name);
    }
    else {
        setup_search();
        show_examples();
    }
}

var index_main = function() {
    $(window).on('hashchange', run_location);

    if (location.hash != "") {
        ga('send', {
            hitType: 'event',
            eventCategory: 'index',
            eventAction: 'from_url_hash',
            eventLabel: location.hash,
            eventValue: 1
        });
        run_location();
    }
    else {
        setup_search();
        show_examples();
    }

    init_search_handlers();
}
