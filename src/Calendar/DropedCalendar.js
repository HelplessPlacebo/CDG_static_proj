const Calendar = document.getElementById("calendar-id");
const CalendarBody = document.getElementById("calendar-body")
const DropDownCalendarEl = document.getElementById("drop-down-calendar")


class DropDownCalendar extends HTMLElement {

    connectedCallback() {
        const CalendarMonth = this.getAttribute("month-title=")
        this.innerHTML = `<div id="dropdown-calendar"  class="droped-calendar">
                   <div class='droped-calendar-header'> 
                     ${CalendarMonth}
                    </div>
                    <div id="calendar-body" class='droped-calendar-content-container'>
                     Content 
                     </div>
                     <div class='droped-calendar-footer-container '>
                        <div id class="droped-calendar-progress-line"></div>
                      </div>
                     </div>`

    }
}
window.customElements.define("drop-down-calendar", DropDownCalendar);

const CreateCalendarBody = () => {
    console.log("wqe")
/*    const IntroDaysCount = 3
    const OutroDaysCount = 4

    for (let i = 1; i <= 5; i++) {
        let IntroDays = document.createElement('div');
        IntroDays.innerHTML = '1';
        CalendarBody.appendChild(IntroDays);
    }
    for (let j = 1; j <= 7; j++) {
        let OutroDAys = document.createElement('div');
        OutroDAys.innerHTML = '3';
        CalendarBody.appendChild(OutroDAys);
    }*/
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


