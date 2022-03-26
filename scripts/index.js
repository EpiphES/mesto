let openButton = document.querySelector(".profile__edit-button");
let modalWindow = document.querySelector(".popup");
let closeButton = modalWindow.querySelector(".popup__close-button");

function toggleModalWindow() {
  modalWindow.classList.toggle("popup_visible");
}

openButton.addEventListener("click", toggleModalWindow);

closeButton.addEventListener("click", toggleModalWindow);
