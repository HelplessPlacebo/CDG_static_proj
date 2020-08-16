class WorkLogSummary extends HTMLElement {


    connectedCallback() {

        const date = this.getAttribute("date");
        const SummaryTime = this.getAttribute("summary-time");
        const ProgressValue = this.getAttribute("progress-value");
        // rendering component into shadow DOM
        this.innerHTML = `  <div class="SummaryWorklogInfo">
            <div class="date-block-container">
                <div class="date-block-size">
                    ${date}
                </div>
            </div>
            <!--********************* on this block displaying time spent on the task and  color progress bar  ***********-->
            <div class="date-time">
                ${SummaryTime}
                <div class="progress">
                    <div class=${ProgressValue === 'red' ? "progress-bar-red" 
                    : ProgressValue === "yellow" ? "progress-bar-yellow" 
                    : ProgressValue === "green" ? "progress-bar-green " 
                    : null} >
                    
            </div>
                </div>
            </div>
            <!--*********************************************-->
            <div class="download-icon">
                <p>
                    <img src="../assets/imgs/download.svg" alt="download-icon">
                </p>
            </div>
        </div>`
    }
}

//register component like html tag
window.customElements.define("summary-worklog", WorkLogSummary);