!function (e) {
    "function" != typeof e.matches && (e.matches = e.msMatchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || function (e) {
        for (var t = this, o = (t.document || t.ownerDocument).querySelectorAll(e), n = 0; o[n] && o[n] !== t;) ++n;
        return Boolean(o[n])
    }), "function" != typeof e.closest && (e.closest = function (e) {
        for (var t = this; t && 1 === t.nodeType;) {
            if (t.matches(e)) return t;
            t = t.parentNode
        }
        return null
    })
}(window.Element.prototype);

let modalButtons = document.querySelectorAll(".js-open-modal")
let overlay = document.querySelector(".js-overlay-modal")
let closeButtons = document.querySelectorAll(".js-modal-close")
let submitButtons = document.querySelectorAll(".js-modal-submit")

let ModalInit = (event) => {
    event.preventDefault()
    let modalElem = document.querySelector('.modal');
    modalElem.classList.add('active')
    overlay.classList.add('active')
}

document.addEventListener('DOMContentLoaded', function () {


    /* Перебираем массив кнопок */
    modalButtons.forEach(function (item) {
        item.addEventListener('click', (event) => {
            ModalInit(event)
        });
    }); // end foreach


    closeButtons.forEach(function (item) {

        item.addEventListener('click', function (e) {
            let parentModal = this.closest('.modal')
            parentModal.classList.remove('active')
            overlay.classList.remove('active')
        });

    }); // end foreach

// on submit
    submitButtons.forEach(function (item) {
        let ModalForm = document.forms.NewWorklogContent
        item.addEventListener('click', function (e) {
            // close modal window
            let messages = []
            let NewWorklogName = ModalForm.NewWorklogName
            let NewWorklogIssue = ModalForm.NewIssueName
            let NewWorklogErrEl = document.getElementById("new-worklog-name-err")
            let NewIssueErrEl = document.getElementById("new-issue-err")
            if (NewWorklogName.value === "" || null) {
                messages.push("Please, enter worklog name ")
                NewWorklogErrEl.innerHTML = `<span class="validationErr"> Please, enter worklog name </span>`
            }
            if (NewWorklogIssue.value === "" || null) {
                NewIssueErrEl.innerHTML = `<span class="validationErr"> Please, enter issue name </span>`
                messages.push("Please, enter issue name ")

            }
            if (messages.length > 0) {
                e.preventDefault()
            } else {
                // add new worklog
                let parentModal = this.closest('.modal')
                parentModal.classList.remove('active')
                overlay.classList.remove('active')
                let ModalForm = document.forms.NewWorklogContent
                let dts = document.querySelectorAll(".dt")
                let StartAndEndTimes = []
                dts.forEach(function (item) {
                    StartAndEndTimes.push(item.innerHTML)
                })

                let ParsedTimes = ParseNormalDate(StartAndEndTimes)
                let NewWorklogNameValue = ModalForm.NewWorklogName.value
                let NewWorklogIssueValue = ModalForm.NewIssueName.value
                let TimerValue = DifferenceInTime(ParsedTimes)

                // add new worklog with form data
                let WorkLogRoot = document.getElementById("firs-worklog-block-root") // fix this to find root el by event
                let theFirstChild = WorkLogRoot.firstChild
                let newWorkLog = document.createElement("div")
                newWorkLog.innerHTML = ` <div class="worklog-block-container"><div style="margin-top: 10px; margin-bottom: 10px;">
                   <worklog-create control-button-status="play" start-time=${ParsedTimes[0]}
                                                end-time=${ParsedTimes[1]}
                                                 jira-code="JRM-310" 
                                                 issue-name=${NewWorklogIssueValue}
                                                 timer-value=${TimerValue} color-point="red"
                            task-field=${NewWorklogNameValue ? NewWorklogNameValue : ""}>
            </worklog-create>
            </div>
                </div>
                 <div class="line-stroke"></div>`
                //console.log( newWorkLog.getElementsByClassName("control-buttons-container"))
                WorkLogRoot.insertBefore(newWorkLog, theFirstChild)
                let ControlButtons = document.querySelectorAll(".control-buttons-container")
                ControlButtons[0].classList.add("active")
                ControlButtons[0].addEventListener("click", (event) => WorklogOnControlButtonsClick(event))
                // add new time tracker

            }
        });
    });

    document.body.addEventListener('keyup', function (e) {
        let key = e.keyCode;

        if (key === 27) {

            document.querySelector('.modal.active').classList.remove('active')
            document.querySelector('.overlay').classList.remove('active')
        }
        ;
    }, false)


    overlay.addEventListener('click', function () {
        document.querySelector('.modal.active').classList.remove('active')
        this.classList.remove('active')
    });

}); // end ready