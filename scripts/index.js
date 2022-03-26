let openButton = document.querySelector(".profile__edit-button");
let modalWindow = document.querySelector(".popup");
let closeButton = modalWindow.querySelector(".popup__close-button");

function toggleModalWindow() {
  modalWindow.classList.toggle("popup_opened");
}

openButton.addEventListener("click", toggleModalWindow);

closeButton.addEventListener("click", toggleModalWindow);

let profileName = document.querySelector(".profile__name");
let profileJob = document.querySelector(".profile__job");
let editForm = document.querySelector(".popup__form");
let nameInput = document.querySelector(".popup__input_type_name");
let jobInput = document.querySelector(".popup__input_type_job");
let submitButton = modalWindow.querySelector(".popup__submit-button");

nameInput.value = profileName.textContent;
jobInput.value = profileJob.textContent;

function editProfile(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  toggleModalWindow();
}

editForm.addEventListener("submit", editProfile);
