

let WLDDL_button = document.getElementById("WLDDL_button")
WLDDL_button.addEventListener("click", (event) => WLDLLHandler(event, "show"))
/* show/hide more worklogs by click */
const WLDLLHandler = (e, Action, optionalRootId = null) => {
    let WLDDL_button_container = document.getElementById("WLDDL_button_container")
    let rootEl = document.getElementById('nesting-worklog-root')
    if (optionalRootId) {
        rootEl = document.getElementById(optionalRootId)
    }
    if (Action === "show") {
        WLDDL_button_container.innerHTML = `<div  id="WLDDL_Drop-up_button" class="tww-content-bg">
                                <img class="tww-content-img" src=../assets/imgs/arrow-up.svg> 
                                </div>`

        let NestedWorklogs = document.createElement("div")
        NestedWorklogs.innerHTML = ` <div  class="nestedWorklogs" id="NestedWorklogs">
                    <div id="NestedWorklogs" style="margin-top: 15px; ">
                    <div class="worklog-block-container">
                    <div class="worklog">
                        <div class="worklog-active">
                            <div class="worklog-block">
                                <div class="work-time">
                                    <div class="start-time">
                                        11:30
                                    </div>
                                    <div class="minus">
                                        -
                                    </div>
                                    <div class="end-time">
                                        13:00
                                    </div>

                                </div>
                                <div class='color-point-3'></div>
                                <div class="worklog-content-container">
                                    <div class="jira-code">
                                        JRM-310
                                    </div>
                                    <div class="task-field">
                                        Marketing strategy 
                                    </div>
                                </div>
                                <div class="progress-bar-container">
                                    <div class='progress-bar-yellow'></div>
                                </div>
                                <div class="timer-value-container">
                                    <div class="timer-value">01:30:00</div>
                                </div>
                                <div class="control-buttons-container">

                                    <div class="play-button">
                                        <p>
                                            <img src="../assets/imgs/play-button.svg" alt="play-button">
                                        </p>
                                    </div>

                                </div>
                                       <div id="WorklogMoreButton3"    >
                                    <div class="WorklogMoreButton">
                                        <img src="../assets/imgs/worklogMoreButtonBG.svg"
                                             alt="issue-more-info-button">
                                    </div>
                                    <img class="WorklogMoreVertical" src="../assets/imgs/worklogMoreVertical.svg" alt="more-vertical">
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
                    </div>
                        <div style="margin-top: 15px">
                 <div class="worklog-block-container">
                    <div class="worklog">
                        <div class="worklog-active">
                            <div class="worklog-block">
                                <div class="work-time">
                                    <div class="start-time">
                                        13:20
                                    </div>
                                    <div class="minus">
                                        -
                                    </div>
                                    <div class="end-time">
                                        16:00
                                    </div>

                                </div>
                                <div class='color-point-2'></div>
                                <div class="worklog-content-container">
                                    <div class="jira-code">
                                        JRM-310
                                    </div>
                                    <div class="task-field">
                                        Moodboarding
                                    </div>
                                </div>
                                <div class="progress-bar-container">
                                    <div class='progress-bar-green'></div>
                                </div>
                                <div class="timer-value-container">
                                    <div class="timer-value">02:40:00</div>
                                </div>
                                <div class="control-buttons-container">

                                    <div class="play-button">
                                        <p>
                                            <img src="../assets/imgs/play-button.svg" alt="play-button">
                                        </p>
                                    </div>

                                </div>
                                    <div id="WorklogMoreButton4"    >
                                    <div class="WorklogMoreButton">
                                        <img src="../assets/imgs/worklogMoreButtonBG.svg"
                                             alt="issue-more-info-button">
                                    </div>
                                    <img class="WorklogMoreVertical" src="../assets/imgs/worklogMoreVertical.svg" alt="more-vertical">
                                </div>

                            </div>

                        </div>
                    </div>
       </div>
  </div>
</div>
`
        rootEl.appendChild(NestedWorklogs)
        let WLDDL_HideButton = document.getElementById('WLDDL_Drop-up_button')
        WLDDL_HideButton.addEventListener("click", (event) => WLDLLHandler(event, "hide"))

    } else if (Action === "hide") {
        WLDDL_button_container.innerHTML = `<div id="WLDDL_button" class="tww-content-bg">
                                            <span class="tww-content-text"> 2 </span>
                                        </div>`
        document.getElementById("NestedWorklogs").remove()
        WLDDL_button = document.getElementById("WLDDL_button")
        WLDDL_button.addEventListener("click", (event) => WLDLLHandler(event, "show"))

    }
}