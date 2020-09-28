// added mew method (random)
Object.defineProperty(
    Object.prototype,
    'randElement',
    {
        value: function () {
            let rand = Math.floor(Math.random() * this.length);
            return this[rand];
        }
    }
)

// change color on small calendar
let smallCalendar = document.getElementById("small-calendar")
smallCalendar.classList.add("active")
smallCalendar.addEventListener("click", (event) => {
    if (smallCalendar.classList.contains("active")) {
        smallCalendar.innerHTML = `<img src="./assets/imgs/calendar_active.svg" alt="">`
        smallCalendar.classList.remove("active")
    } else {
        smallCalendar.innerHTML = `<img src="./assets/imgs/calendar_gray.svg" alt="">`
        smallCalendar.classList.add("active")
    }
})

const TimeTrackingDD = document.getElementById("DD-button")
TimeTrackingDD.classList.add("open")
TimeTrackingDD.addEventListener("click", (event) => DropDownMenu(event, "dropdown", "TT-more-menu"))

WorklogMoreButtonEl = document.getElementById("WorklogMoreButton")
WorklogMoreButtonEl.classList.add("open")
WorklogMoreButtonEl.addEventListener("click", (event) => {
    if (WorklogMoreButtonEl.classList.contains("open")) {
        let DropedMenu = document.createElement("div")
        DropedMenu.innerHTML = `   <div id="WorklogMoreButtonDDMenu"  class="WorklogDropdownContent">
                                       <div class="DDlinksContainer">
                                            <a   href="#">Jira link</a>
                                             <a  href="#">Duplicate</a>
                                             <a  href="#">Add to favorite</a>
                                             <a  href="#">Delete</a>
                                    </div>
                                   </div>`
        WorklogMoreButtonEl.appendChild(DropedMenu)
        WorklogMoreButtonEl.classList.remove("open")
    } else {
        let DDmenu = document.getElementById("WorklogMoreButtonDDMenu")
        DDmenu.remove()
        WorklogMoreButtonEl.classList.add("open")
    }
})

let GSCCheckBox = document.getElementById("GCS-toggle")
GSCCheckBox.addEventListener("click", (event) => GSCHandler(event))
/*show google calendar sync toggle */
const GSCHandler = (e) => {

    let GCS = document.getElementById("GCS")
    if (GSCCheckBox.checked) {
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
    } else {

        ToDell = document.getElementById("CSC")
        ToDell.remove()
    }
}

