
$('#GCS-toggle').on('click', function () {
    if ($(this).is(':checked')) {
        $(' <div id="CSC" class="calendar-syncs-container">\n' +
            '                <div class="calendar-syncs">\n' +
            '                    <div class="calendar-sync">\n' +
            '                        <div class="sync-color-point-container">\n' +
            '                            <div class="sync-color-point-cyan"></div>\n' +
            '                        </div>\n' +
            '                        <div class="sync-info-container">\n' +
            '                            <div>\n' +
            '                                Logo redesign\n' +
            '                            </div>\n' +
            '                            <div>\n' +
            '                                09:00 - 10:00\n' +
            '                            </div>\n' +
            '                        </div>\n' +
            '                    </div>\n' +
            '                    <div class="calendar-sync">\n' +
            '                        <div class="sync-color-point-container">\n' +
            '                            <div class="sync-color-point-yellow"></div>\n' +
            '                        </div>\n' +
            '                        <div class="sync-info-container">\n' +
            '                            <div>\n' +
            '                                Meeting with CEO\n' +
            '                            </div>\n' +
            '                            <div>\n' +
            '                                14:00 - 14:45\n' +
            '                            </div>\n' +
            '                        </div>\n' +
            '                    </div>\n' +
            '                    <div class="calendar-sync">\n' +
            '                        <div class="sync-color-point-container">\n' +
            '                            <div class="sync-color-point-purple"></div>\n' +
            '                        </div>\n' +
            '                        <div class="sync-info-container">\n' +
            '                            <div>\n' +
            '                                Brainstorm\n' +
            '                            </div>\n' +
            '                            <div>\n' +
            '                                15:00 - 16:15\n' +
            '                            </div>\n' +
            '                        </div>\n' +
            '                    </div>\n' +
            '                </div>\n' +
            '            </div>'
        ).appendTo("#GCS");
    } else {
        $("#CSC").remove()
    }
})