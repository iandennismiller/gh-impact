/**
* Function that tracks a click on an outbound link in Analytics.
* This function takes a valid URL string as an argument, and uses that URL string
* as the event label. Setting the transport method to 'beacon' lets the hit be sent
* using 'navigator.sendBeacon' in browser that support it.
*/

var trackOutboundLink = function(url) {
    ga('send', 'event', {
        eventCategory: 'outbound',
        eventAction: 'click',
        eventLabel: url,
        eventValue: 1,
        transport: 'beacon',
        hitCallback: function() {
            document.location = url;
            }
        }
    );
}
