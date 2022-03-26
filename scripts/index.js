let openButton = document.querySelector(".profile__edit-button");
let modalWindow = document.querySelector(".popup");
let closeButton = modalWindow.querySelector(".popup__close-button");
let profileName = document.querySelector(".profile__name");
let profileJob = document.querySelector(".profile__job");
let editForm = modalWindow.querySelector(".popup__form");
let nameInput = modalWindow.querySelector(".popup__input_type_name");
let jobInput = modalWindow.querySelector(".popup__input_type_job");
let submitButton = modalWindow.querySelector(".popup__submit-button");

function toggleModalWindow() {
  modalWindow.classList.toggle("popup_opened");
}

function openPopup() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  toggleModalWindow();
}

openButton.addEventListener("click", openPopup);

closeButton.addEventListener("click", toggleModalWindow);

function editProfile(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  toggleModalWindow();
}

editForm.addEventListener("submit", editProfile);
