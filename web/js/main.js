var $logOutput = $('#log-output');
var log = function (message) {
    $logOutput.append('\r\n&gt; ' + message);
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
