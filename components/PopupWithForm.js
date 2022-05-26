import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(handleFormSubmit, popupSelector) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popup.querySelector(".popup__form");
  }

  _getInputValues() {
    this._formValues = {};
    this._popup
      .querySelectorAll(".popup__input")
      .forEach((input) => (this._formValues[input.name] = input.value));

    return this._formValues;
  }

  _submitFormHandler = (evt) => {
    evt.preventDefault();
    this._handleFormSubmit(this._getInputValues());
    this.close();
  };

  setEventListeners() {
    this._form.addEventListener("submit", this._submitFormHandler);
    super.setEventListeners();
  }

  removeEventListeners() {
    this._form.addEventListener("submit", this._submitFormHandler);
    super.removeEventListeners();
  }

  close() {
    super.close();
    this._form.reset();
  }
}
