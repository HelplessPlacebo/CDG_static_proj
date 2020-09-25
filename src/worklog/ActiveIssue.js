

let AIs = document.querySelectorAll('.active-worklog-block-container');



const IssueOnHover = (e) => {
    let currentTarget = e.currentTarget
    let IssueAdditionalButton = document.createElement("div")
    IssueAdditionalButton.innerHTML = `<div class="more-issue">
                                          <img id="more-issue"  
                                          src="../assets/imgs/active-issue-more-button.svg"
                                           alt="issue-more-info-button">
                                                </div>`
    currentTarget.classList.replace('worklog-block', 'active-worklog-block')
    //currentTarget.append(IssueAdditionalButton)

    let ActiveWorkLogBlock = document.querySelectorAll('.active-worklog-block');
    ActiveWorkLogBlock.forEach((WorkLogBlockEl) => WorkLogBlockEl.onmouseover = IssueOnHover)
    AIs = document.querySelectorAll('.active-worklog-block');
    AIs.forEach((AIsEl) => AIsEl.onmouseout = IssueOnUnHover)


    /*    if (e) {
            let RootElToChange = e.currentTarget.parentElement  // get element with will be changing
            let AtrObj = {} // create a new obj for simplify transfer
            const attributes = RootElToChange.attributes // get parent attributes for transfer to active-issue
            for (let i = 0; i < attributes.length; i++) {
                AtrObj[`${(attributes[i].name)}`] = attributes[i].value
            }
            RootElToChange.innerHTML = ` <active-issue control-button-status="play"  start-time=${AtrObj['start-time']} end-time=${AtrObj['end-time']}
                                               jira-code=${AtrObj['jira-code']} task-field=${AtrObj[`task-field`]}
                                               timer-value=${AtrObj['timer-value']} color-point=${AtrObj['color-point']} >
                                    </active-issue>`
            AIs = document.querySelectorAll('.active-worklog-block-container');
            AIs.forEach((AIsEl) => AIsEl.onmouseout = IssueOnUnHover)
            ControlButtonsInit()

        }*/
}

const IssueOnUnHover = (e) => {
    let currentTarget = e.currentTarget
    currentTarget.classList.replace('active-worklog-block', 'worklog-block')
   //e.currentTarget.lastChild.remove()

    // area.onmouseout=function(){clearTimeout(delay); };
    /*    if (e) {
            let RootElToChange = e.currentTarget.parentElement
            const SREA = RootElToChange.attributes
            let AtrObj = []
            for (let i = 0; i < SREA.length; i++) {
                AtrObj[`${(SREA[i].name)}`] = SREA[i].value
            }
            RootElToChange.innerHTML = ` <worklog-create control-button-status="play" start-time=${AtrObj['start-time']} end-time=${AtrObj['end-time']}
                                               jira-code=${AtrObj['jira-code']} task-field=${AtrObj[`task-field`]}
                                               timer-value=${AtrObj['timer-value']} color-point=${AtrObj['color-point']} >
                                    </worklog-create>`
            WorkLogBlock = document.querySelectorAll('.worklog-block');
            WorkLogBlock.forEach((WorkLogBlockEl) => WorkLogBlockEl.onmouseover = IssueOnHover)
            ControlButtonsInit()
        }*/
}


let WorkLogBlock = document.querySelectorAll('.worklog-block');
WorkLogBlock.forEach((WorkLogBlockEl) => WorkLogBlockEl.onmouseover = IssueOnHover)





// prev code

/*
class ActiveIssue extends HTMLElement {
    connectedCallback() {
        const StartTime = this.getAttribute("start-time");
        const EndTime = this.getAttribute("end-time");
        const ColorPoint = this.getAttribute("color-point");
        const JiraCode = this.getAttribute("jira-code")
        const TaskField = this.getAttribute("task-field")
        const TimerValue = this.getAttribute("timer-value")
        const Type = this.getAttribute("type")
        const BlockValue = this.getAttribute('block-value')
        const ContentType = this.getAttribute("content-type")
        let IssueControlButton = this.getAttribute("control-button-status")
        let RootControlButtons = document.getElementById("worklog-control-buttons-container")
        // rendering component into shadow DOM
        this.innerHTML = ` <div id="AI"  class="active-worklog-block-container">
            <div class="active-worklog-block">

            ${Type === "nesting"
            ? `<div class="wbc-block">
                        ${ContentType === "drop-down" ?
                `<div id="WLDDL_button" class="tww-content-bg">  <span class="tww-content-text">  ${BlockValue} </span> </div>`
                : ContentType === "drop-up" ?
                    `<div id="WLDDL_Drop-up_button" class="tww-content-bg"> <img class="tww-content-img"
                    src=../assets/imgs/arrow-up.svg> </div>`
                    : ""}
                    </div>`
            : `<div class="work-time">
            <div class="start-time">
                ${StartTime}
            </div>
            <div class="minus">
                -
            </div>
            <div class="end-time">
                ${EndTime}
            </div>
        </div>`}

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
            <div>
          <div id="worklog-control-buttons-container" class="control-buttons-container">
              <div  class="play-button">
                <p>
                    <img src="../assets/imgs/play-button.svg" alt="play-button">
                </p>
            </div>
            </div>
                    </div>
            <div class="more-issue">
                   <img id="more-issue"  src="../assets/imgs/active-issue-more-button.svg" alt="issue-more-info-button">
            </div>
        </div>
</div>`
    }
}

window.customElements.define("active-issue", ActiveIssue);
*/

/*let playbuttons = document.querySelectorAll('.play-button');
let stopbuttons = document.querySelectorAll('.stop-button');
const ControlButtonsInit = () => {
    playbuttons = document.querySelectorAll('.play-button');
    playbuttons.forEach((playbuttonEl) => playbuttonEl.addEventListener(`click`,
        (event) => ControlButtonAction(event, "play")))
    stopbuttons = document.querySelectorAll('.stop-button');
    stopbuttons.forEach((stopbuttonsEl) => stopbuttonsEl.addEventListener(`click`,
        (event) => ControlButtonAction(event, "stop")))
}*/

/*

const ControlButtonAction = (ev, action) => {
    let el = ev.currentTarget.parentElement
    if (action === "play") {
        console.log("added active")
        el.classList.add("active")
        console.log(el.classList)
    } else if (action === "stop") {
        el.classList.remove("active")
    }
}
*/

/*
const ControlButtonAction = (ev, action) => {

    let el = ev.currentTarget.parentElement
    let currentTarget = ev.currentTarget

    switch (action) {
        case "play" : {

            el.innerHTML = `<div class=""><div class="stop-button">
                <p>
                    <img src="../assets/imgs/stop_button.svg" alt="stop-button">
                </p>
            </div></div>`
            let stop = document.getElementsByClassName("stop-button")
            stop[0].addEventListener("click", (event)=>{ControlButtonAction(event,"stop"); ButtonStatus = "play"})

        }
        break
        case "stop" : {

            el.innerHTML = `<div  class="play-button">
                <p>
                    <img src="../assets/imgs/play-button.svg" alt="play-button">
                </p>
            </div>`
            let play = document.getElementsByClassName("play-button")
            play[0].addEventListener("click", (event)=>{ControlButtonAction(event,"play"  ); ButtonStatus = "stop"})
        }
        break

    }
}*/
//////////////////////  FIX THIS TRASH IN THE NEXT TIME  ///////////////////////////




//ControlButtonsInit()


// let NestingWorkLogBlock = document.querySelectorAll('.nesting-worklog-block');
// NestingWorkLogBlock.forEach((NestingWorkLogBlockEl) => NestingWorkLogBlockEl.onmouseover = NestingIssueOnHover)
//


// in the next time try to create 1 function with may take param for change inner html on taken element
/*const NestingIssueOnHover = (e) => {
    if (e) {
        let RootElToChange = e.currentTarget.parentElement.parentElement  // get element with will be changing
        RootElToChange.innerHTML = `<active-issue block-value="2" type="nesting"
                                            jira-code="JRM-310" task-field="Company branding"
                                            timer-value="03:50:00" color-point="yellow"
                                             content-type="drop-down">
                                    </active-issue>`
        let stopbuttons = document.querySelectorAll('.stop-button');
        stopbuttons.forEach((stopbuttonsEl) => stopbuttonsEl.addEventListener(`click`,
            (event) => console.log("we need to stop this))00")))
        let ActiveIssueShowMoreButton = document.querySelectorAll('.more-issue');
        ActiveIssueShowMoreButton.forEach((AISBEl) => {
            AISBEl.classList.add("open")
            AISBEl.addEventListener("click", (event) => {
                DropDownMenu(event, "AI")
            })
        })
        WLDDL_button = document.getElementById("WLDDL_button")
        WLDDL_button.addEventListener("click", (event)=>WLDLLHandler(event,"show","AI"))

        AIs = document.querySelectorAll('.active-worklog-block-container');
        AIs.forEach((AIsEl) => AIsEl.onmouseout = NestingIssueOnUnHover)

    }
}

const NestingIssueOnUnHover = (e) => {
    if (e) {
        let RootElToChange = e.currentTarget.parentElement.parentElement
        RootElToChange.innerHTML = `<nesting-worklog-create block-value="2"
                                    jira-code="JRM-310" task-field="Company branding"
                                    timer-value="03:50:00" color-point="yellow" content-type="drop-down">
                                   </nesting-worklog-create>`
        let playbuttons = document.querySelectorAll('.play-button');
        playbuttons.forEach((playbuttonEl) => playbuttonEl.addEventListener(`click`,
            (event) => alert("we need to play this)00")))
        NestingWorkLogBlock = document.querySelectorAll('.nesting-worklog-block');
        NestingWorkLogBlock.forEach((NestingWorkLogBlockEl) => NestingWorkLogBlockEl.onmouseover = NestingIssueOnHover)

    }
}*/