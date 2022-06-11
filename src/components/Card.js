export default class Card {
  _title;
  _link;
  _likesCount;
  _templateSelector;
  _handleCardClick;
  _newCard;
  _cardImage;
  _buttonLike;

  constructor({ title, link, likes }, templateSelector, handleCardClick) {
    (this._title = title),
      (this._link = link),
      (this._likesCount = likes.length);
    (this._templateSelector = templateSelector),
      (this._handleCardClick = handleCardClick);
  }

  _getTemplate = () => {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content.querySelector(".elements__item")
      .cloneNode(true);

    return cardElement;
  };

  _toggleLikeState = () => {
    this._buttonLike.classList.toggle("elements__like-button_active");
  };

  _handleDeleteCard = () => {
    this._newCard.remove();
    this._newCard = null;
  };

  generateCard() {
    this._newCard = this._getTemplate();

    this._cardImage = this._newCard.querySelector(".elements__photo");

    this._buttonLike = this._newCard.querySelector(".elements__like-button");

    this._newCard.querySelector(".elements__title").textContent = this._title;
    this._newCard.querySelector(".elements__like-count").textContent =
      this._likesCount;
    this._cardImage.src = this._link;
    this._cardImage.alt = this._title;

    this._buttonLike.addEventListener("click", this._toggleLikeState);

    this._newCard
      .querySelector(".elements__delete")
      .addEventListener("click", this._handleDeleteCard);

    this._cardImage.addEventListener("click", () =>
      this._handleCardClick({ title: this._title, link: this._link })
    );

    return this._newCard;
  }
}
