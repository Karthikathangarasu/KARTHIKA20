if ("undefined" == typeof console) {
    window.console = {
        log: function() {}
    };
}
jQuery(function($) {
    var debugMode = gtm4wp_scrollerscript_debugmode;
    var callBackTime = gtm4wp_scrollerscript_callbacktime;
    var readerLocation = gtm4wp_scrollerscript_readerlocation;
    var timer = 0;
    var scroller = false;
    var endContent = false;
    var didComplete = false;
    var startTime = new Date();
    var beginning = startTime.getTime();
    var totalTime = 0;
    if (!debugMode) {
        window[gtm4wp_datalayer_name].push({
            'event': 'gtm4wp.reading.articleLoaded'
        });
    } else {
        console.log('Article loaded');
    }

    function trackLocation() {
        bottom = $(window).height() + $(window).scrollTop();
        height = $(document).height();
        if (bottom > readerLocation && !scroller) {
            currentTime = new Date();
            scrollStart = currentTime.getTime();
            timeToScroll = Math.round((scrollStart - beginning) / 1000);
            if (!debugMode) {
                window[gtm4wp_datalayer_name].push({
                    'event': 'gtm4wp.reading.startReading',
                    'timeToScroll': timeToScroll
                });
            } else {
                console.log('Started reading ' + timeToScroll);
            }
            scroller = true;
        }
        if (bottom >= $('#' + gtm4wp_scrollerscript_contentelementid).scrollTop() + $('#' + gtm4wp_scrollerscript_contentelementid).innerHeight() && !endContent) {
            currentTime = new Date();
            contentScrollEnd = currentTime.getTime();
            timeToContentEnd = Math.round((contentScrollEnd - scrollStart) / 1000);
            if (!debugMode) {
                window[gtm4wp_datalayer_name].push({
                    'event': 'gtm4wp.reading.contentBottom',
                    'timeToScroll': timeToContentEnd
                });
            } else {
                console.log('End content section ' + timeToContentEnd);
            }
            endContent = true;
        }
        if (bottom >= height && !didComplete) {
            currentTime = new Date();
            end = currentTime.getTime();
            totalTime = Math.round((end - scrollStart) / 1000);
            if (!debugMode) {
                if (totalTime < gtm4wp_scrollerscript_scannertime) {
                    window[gtm4wp_datalayer_name].push({
                        'event': 'gtm4wp.reading.readerType',
                        'readerType': 'scanner'
                    });
                } else {
                    window[gtm4wp_datalayer_name].push({
                        'event': 'gtm4wp.reading.readerType',
                        'readerType': 'reader'
                    });
                }
                window[gtm4wp_datalayer_name].push({
                    'event': 'gtm4wp.reading.pagebottom',
                    'timeToScroll': totalTime
                });
            } else {
                if (totalTime < gtm4wp_scrollerscript_scannertime) {
                    console.log('The visitor seems to be a "scanner"');
                } else {
                    console.log('The visitor seems to be a "reader"');
                }
                console.log('Bottom of page ' + totalTime);
            }
            didComplete = true;
        }
    }
    $(window).scroll(function() {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(trackLocation, callBackTime);
    });
});