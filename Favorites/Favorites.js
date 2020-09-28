let FavoritesButtonRoot = document.getElementById("favorites-button-container")
let AllButton = document.getElementById("AllButton")
const FavoritesButtonOnActive = (event) =>{
    let MainContentRoot = document.getElementById("main-content-root")
    FavoritesButtonRoot.classList.replace("favorites-button-container","favorites-button-container-active")
    FavoritesButtonRoot.firstElementChild.classList.replace("favorites-button","favorites-button-active")
    AllButton.classList.replace("all-button-bg-active","all-button-bg")
    AllButton.firstElementChild.classList.replace("all-button-content-active","all-button-content")
    MainContentRoot.innerHTML = `<div>
                          <div class="Favorites-message-container">   
                                  <div class="Favorites-message"> 
                                  There is no favorite issues yet
                                  </div>
                           </div> 
                              <div id="TT-main-content-root" class="">
                <div class="New-issue-container">
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
                                new issue
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                      </div>`
    let modalButtons = document.querySelectorAll(".js-open-modal")
    modalButtons.forEach(function (item) {
        item.addEventListener('click', (event)=>{ModalInit(event)});
    });

}

const AllButtonOnActive = (event) =>{
    FavoritesButtonRoot.classList.replace("favorites-button-container-active","favorites-button-container")
    FavoritesButtonRoot.firstElementChild.classList.replace("favorites-button-active","favorites-button")
    AllButton.classList.replace("all-button-bg","all-button-bg-active")
    AllButton.firstElementChild.classList.replace("all-button-content","all-button-content-active")
}
AllButton.addEventListener("click", ()=> {AllButtonOnActive()})
FavoritesButtonRoot.addEventListener("click",()=>{FavoritesButtonOnActive()})