let Calendar = document.getElementById("calendar-id");
let CalendarBody = document.getElementById("droped-calendar-content")
let DropDownCalendarEl = document.getElementById("dropdown-calendar")

class CalendarDay extends HTMLElement {
    connectedCallback() {
        const day = this.getAttribute("day")
        const progressColor = this.getAttribute("progress-color")
        const IsCurrentMonthDay = this.getAttribute("is-this-month-day")
        const IsActiveDay = this.getAttribute("is-active-day")
        this.innerHTML = `<div id="root-calendar-day" class="calendar-day"> 
                              <div class=${IsCurrentMonthDay === "true"
            ? "calendar-day-number"
            : IsCurrentMonthDay === "false" ? "calendar-day-number-disabled" : null}>${day}
                              </div>
                              <div id="DCPL" style="margin-left: 2px"
                              class="droped-calendar-progress-line-green">
                               </div>
                            </div>`
        DropDownCalendarEl = document.getElementById("dropdown-calendar")
        CalendarBody = document.getElementById("droped-calendar-content")
        let DCPL = document.getElementById("DCPL")
        DCPL.style.background = `${progressColor}`
        console.log(DCPL)

    }
}

window.customElements.define("drop-down-calendar-day", CalendarDay);

class DropDownCalendar extends HTMLElement {
    connectedCallback() {
        const CalendarMonth = this.getAttribute("month-title")
        this.innerHTML = `<div id="dropdown-calendar"  class="droped-calendar">
                   <div class='droped-calendar-header'> 
                     ${CalendarMonth}
                    </div>
                    <div id="calendar-body" class='droped-calendar-content-container'>
                         <div id="droped-calendar-content"
                          class="droped-calendar-content">
                           </div>
                     </div>
                     <div class='droped-calendar-footer-container '>
                     <div class="droped-calendar-footer ">   
                     <div class="droped-calendar-footer-el"> 
                            <div style="margin-top: 2px"  class="droped-calendar-progress-line-green"></div>
                              <div class="droped-calendar-progress-status">Done</div> 
                     </div>
                           <div class="droped-calendar-footer-el"> 
                            <div style="margin-top: 2px"  class="droped-calendar-progress-line-yellow"></div>
                              <div class="droped-calendar-progress-status">In progress</div> 
                     </div>
                           <div class="droped-calendar-footer-el"> 
                            <div style="margin-top: 2px" class="droped-calendar-progress-line-red"></div>
                              <div class="droped-calendar-progress-status">Missed</div> 
                     </div>
                     </div>
                      </div>
                     </div>`
        DropDownCalendarEl = document.getElementById("dropdown-calendar")
        CalendarBody = document.getElementById("droped-calendar-content")
    }
}
window.customElements.define("drop-down-calendar", DropDownCalendar);

const CreateCalendarBody = () => {
    const IntroDaysCount = 3
    const OutroDaysCount = 4
    let DaysNamesArr = ["S", "M", "T", "W", "T", "F", "S"]
    for (let i = 1; i <= DaysNamesArr.length; i++) {
        let IntroDays = document.createElement('div');
        IntroDays.innerHTML = `<div class="calendar-day-names">${DaysNamesArr[i - 1]}</div>`;
        CalendarBody.append(IntroDays);
    }
    for (let j = 1; j <= IntroDaysCount; j++) {
        let IntroDays = document.createElement('div');
        IntroDays.innerHTML =  `<drop-down-calendar-day 
                                    day=${j + 28} progress-color="red"
                                    is-this-month-day="false">
                                     </drop-down-calendar-day>`
        CalendarBody.append(IntroDays);
    }
    for (let n = 1; n <= 28; n++) {
        let IntroDays = document.createElement('div');
        IntroDays.innerHTML = `<drop-down-calendar-day 
                                    day=${n} progress-color="red"
                                    is-this-month-day="true">
                                     </drop-down-calendar-day>`
        CalendarBody.append(IntroDays);
    }
    for (let p = 1; p <= OutroDaysCount; p++) {
        let OutroDAys = document.createElement('div');
        OutroDAys.innerHTML = `<drop-down-calendar-day 
                                    day=${p} 
                                    is-this-month-day="false">
                                     </drop-down-calendar-day>`
        CalendarBody.append(OutroDAys);
    }
}

Calendar.classList.add("open")
const CalendarClicked = (e) => {
    if (Calendar.classList.contains("open")) {
        const el = document.createElement('div')
        el.innerHTML = `<drop-down-calendar month-title="June" >
                        </drop-down-calendar>`
        Calendar.append(el)
        Calendar.classList.remove("open")
    } else {
        Calendar.classList.add("open")
        DropDownCalendarEl.remove()
    }
}
Calendar.addEventListener("click", CalendarClicked);
Calendar.addEventListener("click", CreateCalendarBody);


