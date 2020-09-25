const DropDownMenu = (e, RootElId, MenuId) => {

    const clickedEl = e.currentTarget
    let rootEl = document.getElementById(RootElId)
    if (clickedEl.classList.contains("open")) {
        let DropedMenu = document.createElement("div")
        DropedMenu.innerHTML = `   <div id=${MenuId}  class="dropdown-content">
                                  <a   href="#">Jira link</a>
                                   <a  href="#">Duplicate</a>
                                     <a  href="#">Add to favorite</a>
                                     <a  href="#">Delete</a>
                                   </div>`
        rootEl.append(DropedMenu)
        clickedEl.classList.remove("open")
    } else {
        let DDmenu = document.getElementById(MenuId)
        DDmenu.remove()
        clickedEl.classList.add("open")
    }
}

/*
let smallCalendar = document.getElementById("small-calendar")
smallCalendar.classList.add("active")
smallCalendar.addEventListener("click",(event)=>{
    if (smallCalendar.classList.contains("active")) {
        smallCalendar.innerHTML = `<img src="../assets/imgs/calendar_active.svg">`
        smallCalendar.classList.remove("active")
    } else {
        smallCalendar.innerHTML = `<img src="../assets/imgs/calendar_gray.svg">`
        smallCalendar.classList.add("active")
    }
})*/
