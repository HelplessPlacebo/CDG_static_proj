const DropDownMenu = (e, RootElId, MenuId) => {
    const clickedEl = e.currentTarget
    let rootEl = document.getElementById(RootElId)
    if (clickedEl.classList.contains("open")) {
        let DropedMenu = document.createElement("div")
        DropedMenu.innerHTML = `   <div id=${MenuId}  class="dropdown-content">
                                   <div class="DDlinksContainer">
                                            <a   href="#">Jira link</a>
                                             <a  href="#">Duplicate</a>
                                             <a  href="#">Add to favorite</a>
                                             <a  href="#">Delete</a>
                                    </div>
                                   </div>`
        rootEl.appendChild(DropedMenu)
        clickedEl.classList.remove("open")
    } else {
        let DDmenu = document.getElementById(MenuId)
        DDmenu.remove()
        clickedEl.classList.add("open")
    }
}


