import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  _image;
  _caption;

  constructor(popupSelector) {
    super(popupSelector);
    this._image = this._popup.querySelector(".popup__image");
    this._caption = this._popup.querySelector(".popup__caption");
  }

  open({ title, link }) {
    this._image.src = link;
    this._image.alt = title;
    this._caption.textContent = title;
    super.open();
  }
}
