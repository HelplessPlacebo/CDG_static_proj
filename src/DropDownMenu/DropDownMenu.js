const DropDownMenu = (e, RootElId) => {
    const clickedEl = e.currentTarget
    let rootEl = document.getElementById(RootElId)
    if (clickedEl.classList.contains("open")) {
        let DropedMenu = document.createElement("div")
        DropedMenu.innerHTML = `<div>
                                <div id="dropdown-menu"   class="dropdown-content">
                                  <a href="#">Jira link</a>
                                   <a href="#">Duplicate</a>
                                     <a href="#">Add to favorite</a>
                                     <a href="#">Delete</a>
                                   </div></div>`
        rootEl.append(DropedMenu)
        clickedEl.classList.remove("open")
    } else {
        DDmenu = document.getElementById("dropdown-menu")
        DDmenu.remove()
        clickedEl.classList.add("open")
    }
}