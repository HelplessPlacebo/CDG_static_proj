class Worklog extends HTMLElement {

    connectedCallback() {

        const StartTime = this.getAttribute("start-time");
        const EndTime = this.getAttribute("end-time");
        const ColorPoint = this.getAttribute("color-point");
        const JiraCode = this.getAttribute("jira-code")
        const TaskField = this.getAttribute("task-field")
        const TimerValue = this.getAttribute("timer-value")
        // rendering component into shadow DOM
        this.innerHTML = `  <div id=${Date.now().toString()} class="worklog-block" >
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
            <div  class="play-button">
                <p>
                    <img src="../assets/imgs/play-button.svg" alt="play-button">
                </p>
            </div>
        </div>`
    }
}

//register component like html tag
window.customElements.define("worklog-create", Worklog);