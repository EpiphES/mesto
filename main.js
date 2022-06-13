(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function t(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var n=function(){function n(e){var r=this,o=e.cardInfo,i=e.templateSelector,a=e.handleCardClick,u=e.handleDelete,c=e.handleLike,s=e.userId;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),t(this,"_card",void 0),t(this,"_templateSelector",void 0),t(this,"_handleCardClick",void 0),t(this,"_handleDelete",void 0),t(this,"_handleLike",void 0),t(this,"_userId",void 0),t(this,"_newCard",void 0),t(this,"_cardImage",void 0),t(this,"_buttonLike",void 0),t(this,"_buttonDelete",void 0),t(this,"_likesCount",void 0),t(this,"_getTemplate",(function(){return document.querySelector(r._templateSelector).content.querySelector(".elements__item").cloneNode(!0)})),t(this,"handleDeleteCard",(function(){r._newCard.remove(),r._newCard=null})),this._card=o,this._templateSelector=i,this._handleCardClick=a,this._handleDelete=u,this._handleLike=c,this._userId=s}var r,o;return r=n,(o=[{key:"getCardId",value:function(){return this._card._id}},{key:"_isMine",value:function(){return this._card.owner._id===this._userId}},{key:"isLiked",value:function(){var e=this;return this._card.likes.some((function(t){return t._id===e._userId}))}},{key:"setLikeState",value:function(e){this._card=e,this.isLiked()?this._buttonLike.classList.add("elements__like-button_active"):this._buttonLike.classList.remove("elements__like-button_active"),this._likesCount.textContent=this._card.likes.length}},{key:"generateCard",value:function(){return this._newCard=this._getTemplate(),this._cardImage=this._newCard.querySelector(".elements__photo"),this._buttonLike=this._newCard.querySelector(".elements__like-button"),this._buttonDelete=this._newCard.querySelector(".elements__delete"),this._likesCount=this._newCard.querySelector(".elements__like-count"),this._cardImage.src=this._card.link,this._cardImage.alt=this._card.title,this._newCard.querySelector(".elements__title").textContent=this._card.name,this._isMine()||(this._buttonDelete.classList.add("elements__delete_disabled"),this._buttonDelete.setAttribute("disabled",!0)),this._setEventListeners(),this.setLikeState(this._card),this._newCard}},{key:"_setEventListeners",value:function(){var e=this;this._cardImage.addEventListener("click",(function(){return e._handleCardClick({name:e._card.name,link:e._card.link})})),this._buttonDelete.addEventListener("click",(function(){return e._handleDelete(e)})),this._buttonLike.addEventListener("click",(function(){return e._handleLike(e)}))}}])&&e(r.prototype,o),Object.defineProperty(r,"prototype",{writable:!1}),n}();function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var i=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),o(this,"_renderer",void 0),o(this,"_container",void 0),this._renderer=t,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){return t.addItem(e)}))}},{key:"addItem",value:function(e){var t=this._renderer(e);this._container.prepend(t)}}])&&r(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=function(){function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),u(this,"_popup",void 0),u(this,"_handleEscClose",(function(e){"Escape"===e.key&&n.close()})),u(this,"_handleCloseOnClick",(function(e){(e.target===e.currentTarget||e.target.classList.contains("popup__close-button"))&&n.close()})),this._popup=document.querySelector(t)}var t,n;return t=e,(n=[{key:"setEventListeners",value:function(){this._popup.addEventListener("mousedown",this._handleCloseOnClick)}},{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}}])&&a(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(){return f="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=p(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},f.apply(this,arguments)}function p(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=y(e)););return e}function d(e,t){return d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},d(e,t)}function h(e,t){if(t&&("object"===s(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return _(e)}function _(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var v=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&d(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=y(r);if(o){var n=y(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return h(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),b(_(t=i.call(this,e)),"_image",void 0),b(_(t),"_caption",void 0),t._image=t._popup.querySelector(".popup__image"),t._caption=t._popup.querySelector(".popup__caption"),t}return t=a,(n=[{key:"open",value:function(e){var t=e.name,n=e.link;this._image.src=n,this._image.alt=t,this._caption.textContent=t,f(y(a.prototype),"open",this).call(this)}}])&&l(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(c);function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function k(){return k="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=w(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},k.apply(this,arguments)}function w(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=O(e)););return e}function C(e,t){return C=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},C(e,t)}function S(e,t){if(t&&("object"===m(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return E(e)}function E(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function O(e){return O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},O(e)}function L(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var j=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&C(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=O(r);if(o){var n=O(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return S(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),L(E(n=i.call(this,t)),"_handleFormSubmit",void 0),L(E(n),"form",void 0),L(E(n),"_inputList",void 0),L(E(n),"_formValues",void 0),L(E(n),"_submitButton",void 0),L(E(n),"_submitFormHandler",(function(e){e.preventDefault(),n._handleFormSubmit(n._getInputValues())})),n._handleFormSubmit=e,n.form=n._popup.querySelector(".popup__form"),n._inputList=n._popup.querySelectorAll(".popup__input"),n._submitButton=n.form.querySelector(".popup__submit-button"),n}return t=a,(n=[{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputList.forEach((function(t){return e._formValues[t.name]=t.value})),this._formValues}},{key:"setInputValues",value:function(e){this._inputList.forEach((function(t){return t.value=e[t.name]}))}},{key:"setEventListeners",value:function(){this.form.addEventListener("submit",this._submitFormHandler),k(O(a.prototype),"setEventListeners",this).call(this)}},{key:"close",value:function(){k(O(a.prototype),"close",this).call(this),this.form.reset()}},{key:"renderLoading",value:function(e,t){this._submitButton.textContent=e?"Сохранение..":t}}])&&g(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(c);function P(e){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},P(e)}function I(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function R(){return R="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=A(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},R.apply(this,arguments)}function A(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=D(e)););return e}function q(e,t){return q=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},q(e,t)}function T(e,t){if(t&&("object"===P(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return B(e)}function B(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function D(e){return D=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},D(e)}var U=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&q(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=D(r);if(o){var n=D(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return T(this,e)});function a(e,t){var n,r,o,u;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),u=void 0,(o="_handleConfirm")in(r=B(n=i.call(this,t)))?Object.defineProperty(r,o,{value:u,enumerable:!0,configurable:!0,writable:!0}):r[o]=u,n._handleConfirm=e,n}return t=a,(n=[{key:"setEventListeners",value:function(){var e=this;R(D(a.prototype),"setEventListeners",this).call(this),this._popup.querySelector(".popup__submit-button").addEventListener("click",(function(){return e._handleConfirm(e.targetCard)}))}},{key:"open",value:function(e){this.targetCard=e,R(D(a.prototype),"open",this).call(this)}}])&&I(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(c);function x(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function V(e,t,n){return t&&x(e.prototype,t),n&&x(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function N(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var F=V((function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),N(this,"_formElement",void 0),N(this,"_disabledButtonClass",void 0),N(this,"_inputErrorClass",void 0),N(this,"_errorClass",void 0),N(this,"_inputList",void 0),N(this,"_buttonElement",void 0),N(this,"_showInputError",(function(e,t){var n=r._formElement.querySelector(".".concat(e.id,"-error"));e.classList.add(r._inputErrorClass),n.textContent=t,n.classList.add(r._errorClass)})),N(this,"_hideInputError",(function(e){var t=r._formElement.querySelector(".".concat(e.id,"-error"));e.classList.remove(r._inputErrorClass),t.classList.remove(r._errorClass),t.textContent=""})),N(this,"_hasInvalidInput",(function(){return r._inputList.some((function(e){return!e.validity.valid}))})),N(this,"_toggleButtonState",(function(){r._hasInvalidInput()?(r._buttonElement.classList.add(r._disabledButtonClass),r._buttonElement.setAttribute("disabled",!0)):(r._buttonElement.classList.remove(r._disabledButtonClass),r._buttonElement.removeAttribute("disabled"))})),N(this,"_checkValidity",(function(e){e.validity.valid?r._hideInputError(e):r._showInputError(e,e.validationMessage)})),N(this,"resetValidation",(function(){r._inputList.forEach((function(e){return r._hideInputError(e)})),r._toggleButtonState()})),N(this,"enableValidation",(function(){r._toggleButtonState(),r._inputList.forEach((function(e){e.addEventListener("input",(function(){r._checkValidity(e),r._toggleButtonState()}))}))})),this._formElement=n,this._disabledButtonClass=t.disabledButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._inputList=Array.from(n.querySelectorAll(t.inputSelector)),this._buttonElement=n.querySelector(t.submitButtonSelector)}));function H(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function M(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var J=function(){function e(t){var n=t.userNameSelector,r=t.userAboutSelector,o=t.userAvatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),M(this,"_userName",void 0),M(this,"_userAbout",void 0),M(this,"_userAvatar",void 0),M(this,"userId",void 0),this._userName=document.querySelector(n),this._userAbout=document.querySelector(r),this._userAvatar=document.querySelector(o)}var t,n;return t=e,n=[{key:"getUserInfo",value:function(){return{name:this._userName.textContent,about:this._userAbout.textContent}}},{key:"setUserInfo",value:function(e){this._userName.textContent=e.name,this._userAbout.textContent=e.about,this._userAvatar.style.backgroundImage="url(".concat(e.avatar,")"),this.userId=e._id}}],n&&H(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function z(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function $(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var G=".profile__avatar";function K(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var Q,W,X=new(function(){function e(t){var n=t.baseUrl,r=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),$(this,"_baseUrl",void 0),$(this,"_headers",void 0),this._baseUrl=n,this._headers=r}var t,n;return t=e,(n=[{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"cards"),{headers:this._headers}).then(this._checkResponse)}},{key:"getProfileInfo",value:function(){return fetch("".concat(this._baseUrl,"users/me"),{headers:this._headers}).then(this._checkResponse)}},{key:"submitProfileInfo",value:function(e){return fetch("".concat(this._baseUrl,"users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify(e)}).then(this._checkResponse)}},{key:"submitAvatar",value:function(e){return fetch("".concat(this._baseUrl,"users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.avatar})}).then(this._checkResponse)}},{key:"submitCard",value:function(e){return fetch("".concat(this._baseUrl,"cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.title,link:e.link})}).then(this._checkResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._baseUrl,"cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"addLike",value:function(e){return fetch("".concat(this._baseUrl,"cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers}).then(this._checkResponse)}},{key:"deleteLike",value:function(e){return fetch("".concat(this._baseUrl,"cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}}])&&z(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-43/",headers:{authorization:"1bffef03-9768-4f1e-8e85-138575e6daba","Content-Type":"application/json"}}),Y=new i((function(e){return new n({cardInfo:e,templateSelector:".elements__template",handleCardClick:ae,handleDelete:ue,handleLike:ce,userId:Z.userId}).generateCard()}),".elements"),Z=new J({userNameSelector:".profile__name",userAboutSelector:".profile__about",userAvatarSelector:G}),ee=new j((function(e){ee.renderLoading(!0),X.submitProfileInfo(e).then((function(e){Z.setUserInfo(e),ee.close()})).catch((function(e){return console.log(e)})).finally((function(){return ee.renderLoading(!1,"Сохранить")}))}),".popup_type_edit-profile"),te=new j((function(e){te.renderLoading(!0),X.submitCard(e).then((function(e){Y.addItem(e),te.close()})).catch((function(e){return console.log(e)})).finally((function(){return te.renderLoading(!1,"Cоздать")}))}),".popup_type_add-element"),ne=new v(".popup_type_image"),re=new U((function(e){X.deleteCard(e.getCardId()).then((function(){e.handleDeleteCard(),re.close()})).catch((function(e){return console.log(e)}))}),".popup_type_confirm"),oe=new j((function(e){oe.renderLoading(!0),X.submitAvatar(e).then((function(e){Z.setUserInfo(e),oe.close()})).catch((function(e){return console.log(e)})).finally((function(){oe.renderLoading(!1,"Сохранить")}))}),".popup_type_update-avatar"),ie={};function ae(e){var t=e.name,n=e.link;ne.open({name:t,link:n})}function ue(e){re.open(e)}function ce(e){e.isLiked()?X.deleteLike(e.getCardId()).then((function(t){e.setLikeState(t)})).catch((function(e){return console.log(e)})):X.addLike(e.getCardId()).then((function(t){e.setLikeState(t)})).catch((function(e){return console.log(e)}))}Q={inputSelector:".popup__input",formSelector:".popup__form",submitButtonSelector:".popup__submit-button",disabledButtonClass:"popup__submit-button_disabled",inputErrorClass:"popup__input_invalid",errorClass:"popup__input-error_visible"},W=Array.from(document.querySelectorAll(Q.formSelector)),console.log(W),W.forEach((function(e){var t=new F(Q,e),n=e.getAttribute("name");ie[n]=t,t.enableValidation()})),Promise.all([X.getProfileInfo(),X.getInitialCards()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,u=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){u=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return K(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?K(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];Z.setUserInfo(o),Y.renderItems(i.reverse())})).catch((function(e){return console.log(e)})),ee.setEventListeners(),te.setEventListeners(),ne.setEventListeners(),re.setEventListeners(),oe.setEventListeners(),document.querySelector(".profile__edit-button").addEventListener("click",(function(){ee.setInputValues(Z.getUserInfo()),ie["profile-form"].resetValidation(),ee.open()})),document.querySelector(".profile__add-button").addEventListener("click",(function(){ie["add-form"].resetValidation(),te.open()})),document.querySelector(G).addEventListener("click",(function(){ie["avatar-form"].resetValidation(),oe.open()}))})();
//# sourceMappingURL=main.js.map