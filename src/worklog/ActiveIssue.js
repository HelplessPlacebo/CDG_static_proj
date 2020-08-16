class ActiveIssue extends HTMLElement {
    connectedCallback() {
        const StartTime = this.getAttribute("start-time");
        const EndTime = this.getAttribute("end-time");
        const ColorPoint = this.getAttribute("color-point");
        const JiraCode = this.getAttribute("jira-code")
        const TaskField = this.getAttribute("task-field")
        const TimerValue = this.getAttribute("timer-value")
        // rendering component into shadow DOM
        this.innerHTML = ` <div id="AI" class="active-worklog-block-container">
            <div class="active-worklog-block">
            <!-- fix this in the next time -->
            <div class="work-time">
                <div class="start-time">
                    ${StartTime}
                </div>
                <div class="minus">
                    -
                </div>
                <div class="end-time">
                  ${EndTime}
                </div>
                <!-- *********************************-->
            </div>
            <div id="color-point" class=${ColorPoint === 'red' ? 'color-point'
            : ColorPoint === 'green' ? 'color-point-2'
                : ColorPoint === 'yellow' ? 'color-point-3' : null}></div>
            <div class="worklog-content-container">
                <div class="jira-code">
                  ${JiraCode}
                </div>
                <div class="task-field">
                  ${TaskField}
                </div>
            </div>
            <div class="progress-bar-container">
                <div class=${ColorPoint === 'red' ? 'progress-bar-red'
            : ColorPoint === 'green' ? 'progress-bar-green'
                : ColorPoint === 'yellow' ? 'progress-bar-yellow' : null}></div>
            </div>
            <div class="timer-value-container">
                <div class="timer-value">${TimerValue}</div>
            </div>
            <div class="stop-button">
                <p>
                    <img src="../assets/imgs/stop_button.svg" alt="stop-button">
                </p>
            </div>
            <div class="more-issue">
                   <img src="../assets/imgs/active-issue-more-button.svg" alt="issue-more-info-button">
            </div>
        </div>
</div>`
    }
}
window.customElements.define("active-issue", ActiveIssue);


//////////////////////  FIX THIS TRASH IN THE NEXT TIME  ///////////////////////////
const IssuesPlayAndStopHandler = (e, clickedButton) => {
    if (e) {
        const clickedEl = e.currentTarget.parentElement  // get element with will be changing
        let AtrObj = {} // create a new obj for simplify transfer
        if (clickedButton === "play") {
            const rootEl = e.currentTarget.parentElement.parentElement // get his parent couz this el was created by a custom el
            const attributes = rootEl.attributes // get parent attributes for transfer to active-issue
            for (let i = 0; i < attributes.length; i++) {
                AtrObj[`${(attributes[i].name)}`] = attributes[i].value
            }
            clickedEl.innerHTML = ` <active-issue  start-time=${AtrObj['start-time']} end-time=${AtrObj['end-time']}
                                           jira-code=${AtrObj['jira-code']} task-field=${AtrObj[`task-field`]}
                                           timer-value=${AtrObj['timer-value']} color-point=${AtrObj['color-point']} >
                                </active-issue>`

            let stopbuttons = document.querySelectorAll('.stop-button');
            stopbuttons.forEach((stopbuttonsEl) => stopbuttonsEl.addEventListener(`click`,
                (event) => IssuesPlayAndStopHandler(event, "stop")))
            /**************  there we are creating active issues , so we need to declarate all buttons and
             add events on this buttons ****************/
            let ActiveIssueShowMoreButton = document.querySelectorAll('.more-issue');
            ActiveIssueShowMoreButton.forEach((AISBEl) => {
                AISBEl.classList.add("open")
                AISBEl.addEventListener("click", (event) => {
                    DropDownMenu(event,"AI")
                })
            })

        } else if (clickedButton === "stop") {
            const stopRootEl = clickedEl.parentElement.parentElement
            const SREA = stopRootEl.attributes
            for (let i = 0; i < SREA.length; i++) {
                AtrObj[`${(SREA[i].name)}`] = SREA[i].value
            }
            clickedEl.innerHTML = ` <worklog-create start-time=${AtrObj['start-time']} end-time=${AtrObj['end-time']}
                                           jira-code=${AtrObj['jira-code']} task-field=${AtrObj[`task-field`]}
                                           timer-value=${AtrObj['timer-value']} color-point=${AtrObj['color-point']} >
                                </worklog-create>`
            let playbuttons = document.querySelectorAll('.play-button');
            playbuttons.forEach((playbuttonEl) => playbuttonEl.addEventListener(`click`,
                (event) => IssuesPlayAndStopHandler(event, "play")))
        }
    }
}

let playbuttons = document.querySelectorAll('.play-button');
playbuttons.forEach((playbuttonEl) => playbuttonEl.addEventListener(`click`,
    (event) => IssuesPlayAndStopHandler(event, "play")))
