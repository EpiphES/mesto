import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  _handleFormSubmit;
  _form;
  _inputList;

  constructor(handleFormSubmit, popupSelector) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popup.querySelector(".popup__form");
    this._inputList = this._popup.querySelectorAll(".popup__input");
  }

  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach(
      (input) => (this._formValues[input.name] = input.value)
    );

    return this._formValues;
  }

  setInputValues(data) {
    this._inputList.forEach((input) => (input.value = data[input.name]));
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

  close() {
    super.close();
    this._form.reset();
  }
}
