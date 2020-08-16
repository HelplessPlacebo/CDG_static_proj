let GSCCheckBox = document.getElementById("GCS-toggle")
/*show google calendar sync toggle */
const GSCHandler = (e) =>{

    let GCS = document.getElementById("GCS")
    if(GSCCheckBox.checked){
        let el = document.createElement("div")
        el.innerHTML = ' <div id="CSC" class="calendar-syncs-container">\n' +
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
        GCS.append(el)
    }
    else{

        ToDell = document.getElementById("CSC")
        ToDell.remove()
    }
}

GSCCheckBox.addEventListener("click",(event)=>GSCHandler(event))
/* fix this in the next time*/

const TimeTrackingDD = document.getElementById("DD-button")
TimeTrackingDD.classList.add("open")
TimeTrackingDD.addEventListener("click", (event)=>DropDownMenu(event,"dropdown"))

// $("#DD-button").addClass("open");
//
// $('#DD-button').on('click', function (e) {
//
//     if ($(this).hasClass("open")) {
//         $("<div>\n" +
//             "                                <div id=\"dropdown-menu\"   class=\"dropdown-content\">\n" +
//             "                                    <a href=\"#\">Jira link</a>\n" +
//             "                                    <a href=\"#\">Duplicate</a>\n" +
//             "                                    <a href=\"#\">Add to favorite</a>\n" +
//             "                                    <a href=\"#\">Delete</a>\n" +
//             "                                </div></div>").appendTo("#dropdown")
//         $(this).removeClass("open");
//     } else {
//         $(this).addClass("open");
//         $("#dropdown-menu").remove()
//     }
// })

/* fix this in the next time*/

/*show more worklogs */



