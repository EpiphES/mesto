export default class UserInfo {
  _userName;
  _userAbout;

  constructor({ userName, userAbout }) {
    this._userName = document.querySelector(userName);
    this._userAbout = document.querySelector(userAbout);
  }

  getUserInfo() {
    return {
      name: this._userName.textContent,
      about: this._userAbout.textContent,
    };
  }

  setUserinfo({ name, about }) {
    this._userName.textContent = name;
    this._userAbout.textContent = about;
  }
}
