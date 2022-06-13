import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  _handleConfirm;

  constructor(handleConfirm, popupSelector) {
    super(popupSelector);
    this._handleConfirm = handleConfirm;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popup
      .querySelector(".popup__submit-button")
      .addEventListener("click", () => this._handleConfirm());
  }

  open(targetCard) {
    this.targetCard = targetCard;
    super.open();
  }
}
