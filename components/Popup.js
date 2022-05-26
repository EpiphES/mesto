export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
  }

  _handleEscClose = (evt) => {
    if (evt.key === "Escape") {
      this.close();
    }
  };

  _handleCloseOnClick = (evt) => {
    if (
      evt.target === evt.currentTarget ||
      evt.target.classList.contains("popup__close-button")
    ) {
      this.close();
    }
  };

  setEventListeners() {
    this._popup.addEventListener("mousedown", this._handleCloseOnClick);
    document.addEventListener("keydown", this._handleEscClose);
  }

  removeEventListeners() {
    this._popup.removeEventListener("mousedown", this._handleCloseOnClick);
    document.removeEventListener("keydown", this._handleEscClose);
  }

  open() {
    this._popup.classList.add("popup_opened");
    this.setEventListeners();
  }

  close() {
    this._popup.classList.remove("popup_opened");
    this.removeEventListeners();
  }
}
