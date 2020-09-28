



const WorklogOnControlButtonsClick = (event) => {
    let TimeTrackingRoot = document.getElementById("TT-main-content-root")
    let  CurrentTarget = event.currentTarget
    if (CurrentTarget.classList.contains("active")){

        CurrentTarget.innerHTML = `<div class="stop-button">
                <p>
                    <img src="./assets/imgs/stop_button.svg" alt="stop-button">
                </p>
            </div>`

        TimeTrackingRoot.innerHTML = `<div class="time-tracker-container">
                  
             <input class="time-tracker-worklog-name" 
                    placeholder="add worklog "
                    value="Meeting with QA" 
                     type="text">
                     
          <input class="time-tracker-issue-name" 
                    placeholder="add issue "
                    value="ADD ISSUE"
                     type="text">

                    <div class="time-tracker-timer">01:15:00</div>
                    
                    <div class="time-tracker-control-buttons-container">
                    <div class="time-tracker-control-buttons">   
                    <div>   
                        <img src="./assets/imgs/TT-stop-button.svg" alt="">
                    </div>
                       <div>   
                        <img src="./assets/imgs/TT-pause-button.svg" alt="">
                    </div>
                    </div>
                    </div>
                </div> `

        CurrentTarget.classList.remove("active")
    }
    else{
        CurrentTarget.innerHTML = ` <div  class="play-button">
                    <p>
                        <img src="./assets/imgs/play-button.svg" alt="play-button">
                    </p>
                </div>`
        TimeTrackingRoot.innerHTML = `       <div id="TT-main-content-root" class="TT-main-content-root">
                <div class="New-worklog-container">
                    <div class="New-worklog">
                        <div class="new-worklog-button-pose">
                            <div class="js-open-modal" data-modal="1">
                                <img class="new-worklog-button-size"
                                     src="./assets/imgs/new_worklog_button.svg"
                                     alt="new_worklog_button">
                            </div>
                        </div>
                        <div class="new-worklog-button-description-container">
                            <div class="new-worklog-button-description">
                                new worklog
                            </div>
                        </div>
                    </div>
                </div>
            </div>`
        let modalButtons = document.querySelectorAll(".js-open-modal")
        modalButtons.forEach(function (item) {
            item.addEventListener('click', (event)=>{ModalInit(event)});
        });
        CurrentTarget.classList.add("active")
    }
}
let ControlButtonsRoot = document.querySelectorAll(".control-buttons-container")
ControlButtonsRoot.forEach((ControlButtonsRootEl) =>{
    ControlButtonsRootEl.classList.add("active")
    ControlButtonsRootEl.addEventListener("click", (event)=>{ WorklogOnControlButtonsClick(event) })
})
