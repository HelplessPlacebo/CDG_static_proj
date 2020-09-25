
class NestingWorklog extends HTMLElement {
    connectedCallback() {
        const BlockValue = this.getAttribute('block-value')
        const ColorPoint = this.getAttribute("color-point");
        const JiraCode = this.getAttribute("jira-code")
        const TaskField = this.getAttribute("task-field")
        const TimerValue = this.getAttribute("timer-value")
        const ContentType = this.getAttribute("content-type")
        // rendering component into shadow DOM
        this.innerHTML = `<div id="worklog-root" >
                        <div  class="nesting-worklog-block" >
            <!-- fix this in the next time -->
                    <div class="wbc-block">
                        ${ContentType === "drop-down" ?
            `<div id="WLDDL_button" class="tww-content-bg">  <span class="tww-content-text">  ${BlockValue} </span> </div>`
            : ContentType === "drop-up" ?
                `<div id="WLDDL_Drop-up_button" class="tww-content-bg"> <img class="tww-content-img" 
                    src=../assets/imgs/arrow-up.svg> </div>`
                :""}
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
            <div class="control-buttons-container">
            <div class="nesting-play-button">
                <p>
                    <img src="../assets/imgs/play-button.svg" alt="play-button">
                </p>
            </div>
            </div>
        </div>
</div>`

    }
}
window.customElements.define("nesting-worklog-create", NestingWorklog);

let WLDDL_button = document.getElementById("WLDDL_button")
WLDDL_button.addEventListener("click", (event)=>WLDLLHandler(event,"show"))
/* show/hide more worklogs by click */
const WLDLLHandler = (e, Action,optionalRootId = null) => {
    let rootEl = document.getElementById('worklog-root')
    if(optionalRootId){
        rootEl = document.getElementById(optionalRootId)
    }
    if(Action === "show"){
        rootEl.innerHTML =   ` <nesting-worklog-create 
                                            jira-code="JRM-310" task-field="Company branding"
                                            timer-value="03:50:00" color-point="yellow"
                                             content-type="drop-up">
                    </nesting-worklog-create>
                    <div style="margin-top: 15px; ">
                    <worklog-create start-time="11:30" end-time="13:00"
                            jira-code="JRM-310" task-field="Marketing strategy"
                            timer-value="01:30:00" color-point="yellow">>
                    </worklog-create>
                    </div>
                        <div style="margin-top: 15px">
                    <worklog-create start-time="13:20" end-time="16:00"
                            jira-code="JRM-310" task-field="Moodboarding"
                            timer-value="02:40:00" color-point="green">>
                    </worklog-create>
                    </div>
`
        let WLDDL_HideButton = document.getElementById('WLDDL_Drop-up_button')
        let WorkLogBlock = document.querySelectorAll('.worklog-block');
        WorkLogBlock.forEach((WorkLogBlockEl) => WorkLogBlockEl.onmouseover = IssueOnHover)
        WLDDL_HideButton.addEventListener("click", (event)=>WLDLLHandler(event,"hide"))
    }
    else if(Action === "hide"){
        rootEl.innerHTML = `<nesting-worklog-create 
                                            jira-code="JRM-310" task-field="Company branding"
                                            timer-value="03:50:00" color-point="yellow"
                                            block-value="2"
                                             content-type="drop-down">
                    </nesting-worklog-create>`
        WLDDL_button = document.getElementById("WLDDL_button")
        WLDDL_button.addEventListener("click", (event)=>WLDLLHandler(event,"show"))
    }
}