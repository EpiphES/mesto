export default class Api {
  _baseUrl;
  _headers;

  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}cards`, {
      headers: this._headers,
    }).then(this._checkResponse);
  }

  getProfileInfo() {
    return fetch(`${this._baseUrl}users/me`, {
      headers: this._headers,
    }).then(this._checkResponse);
  }

  submitProfileInfo(profileInfo) {
    return fetch(`${this._baseUrl}users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify(profileInfo),
    }).then(this._checkResponse);
  }

  submitAvatar(formValues) {
    return fetch(`${this._baseUrl}users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({ avatar: formValues.avatar }),
    }).then(this._checkResponse);
  }

  submitCard(formValues) {
    return fetch(`${this._baseUrl}cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({ name: formValues.title, link: formValues.link }),
    }).then(this._checkResponse);
  }

  deleteCard(cardId) {
    return fetch(`${this._baseUrl}cards/${cardId}`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._checkResponse);
  }

  addLike(cardId) {
    return fetch(`${this._baseUrl}cards/${cardId}/likes`, {
      method: "PUT",
      headers: this._headers,
    }).then(this._checkResponse);
  }

  deleteLike(cardId) {
    return fetch(`${this._baseUrl}cards/${cardId}/likes`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._checkResponse);
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }
}
