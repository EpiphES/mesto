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
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ой, ошибка: ${res.status}`);
    });
  }

  getProfileInfo() {
    return fetch(`${this._baseUrl}users/me`, {
      headers: this._headers,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибочка вышла: ${res.status}`);
    });
  }

  submitProfileInfo(profileInfo) {
    return fetch(`${this._baseUrl}users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify(profileInfo),
    }).then((res) => {
      if (res.ok) {
        console.log(res);
        return res.json();
      }
      return Promise.reject(`Возникла ошибка: ${res.status}`);
    });
  }

  submitAvatar(formValues) {
    return fetch(`${this._baseUrl}users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({ avatar: formValues.avatar }),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Упс, ошибка: ${res.status}`);
    });
  }

  submitCard(formValues) {
    return fetch(`${this._baseUrl}cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({ name: formValues.title, link: formValues.link }),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Что-пошло не так: ${res.status}`);
    });
  }

  deleteCard(cardId) {
    return fetch(`${this._baseUrl}cards/${cardId}`, {
      method: "DELETE",
      headers: this._headers,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    });
  }

  addLike(cardId) {
    return fetch(`${this._baseUrl}cards/${cardId}/likes`, {
      method: "PUT",
      headers: this._headers,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Внимание, ошибка: ${res.status}`);
    });
  }

  deleteLike(cardId) {
    return fetch(`${this._baseUrl}cards/${cardId}/likes`, {
      method: "DELETE",
      headers: this._headers,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка выполененя запроса: ${res.status}`);
    });
  }
}
