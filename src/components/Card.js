export default class Card {
  _title;
  _link;
  _likesCount;
  _templateSelector;
  _handleCardClick;
  _newCard;
  _cardImage;
  _buttonLike;

  constructor({
    cardInfo,
    templateSelector,
    handleCardClick,
    handleDeleteClick,
    userId,
  }) {
    this._card = cardInfo;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
    this.userId = userId;
  }

  _getTemplate = () => {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content.querySelector(".elements__item")
      .cloneNode(true);

    return cardElement;
  };

  handleDeleteCard = () => {
    this._newCard.remove();
    this._newCard = null;
  };

  getCardId() {
    return this._card._id;
  }

  generateCard() {
    this._newCard = this._getTemplate();
    this._cardImage = this._newCard.querySelector(".elements__photo");
    this._buttonLike = this._newCard.querySelector(".elements__like-button");
    this._buttonDelete = this._newCard.querySelector(".elements__delete");

    this._cardImage.src = this._card.link;
    this._cardImage.alt = this._card.title;

    this._newCard.querySelector(".elements__title").textContent =
      this._card.name;
    this._newCard.querySelector(".elements__like-count").textContent =
      this._card.likes.length;

    // if (this._card.owner._id != this.userId) {
    //   this._buttonDelete.classList.add("elements__delete_disabled");
    //   this._buttonDelete.setAttribute("disabled", true);
    // }

    this._cardImage.addEventListener("click", () => this._handleCardClick());
    this._buttonDelete.addEventListener("click", () =>
      this._handleDeleteClick(this._newCard)
    );
    // this._buttonLike.addEventListener("click", this._toggleLikeState);

    return this._newCard;
  }
}
