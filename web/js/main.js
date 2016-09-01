var $logOutput = $('#log-output');
var log = function (message) {
    $logOutput.append('&gt; ' + message + "\r\n");
}

$(document).ready(function () {
    log('DOMReady');

    if ($('body.iframe-method').length > 0) {
        log('Setting download timer for 5 secs.');
        setTimeout(function () {
            triggerDownload();
        }, 5000);
    }
});

function triggerDownload() {
    var $body = $('body');
    var resourceUrl = $body.attr('data-resource-url');

    log('Download triggered');

    $('<iframe />', {
        src: resourceUrl,
        'class': 'download-iframe'
    }).appendTo($body);
}
