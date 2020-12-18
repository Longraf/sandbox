"use strict";
"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function RoundMenu() {
  var menus = _toConsumableArray(document.querySelectorAll('.round-menu'));

  menus.map(function (menu) {
    console.log('into menus');
    var items = menu.querySelectorAll('.round-menu__item');
    var button = menu.querySelector('.round-menu__button');
    var active = false;
    var length = items.length;
    var arc = 2 * Math.PI * (1 / length);
    var radius = 40;
    button.addEventListener('click', function (e) {
      e.preventDefault();
      button.classList.toggle('.round-menu__button_active');
      active = !active;

      if (active) {
        button.innerText = 'Закрыть';

        for (var i = 0; i < length; i++) {
          var angle = i * arc;
          var x = radius * Math.cos(angle);
          var y = radius * Math.sin(angle);
          items[i].style.left = 50 + x + '%';
          items[i].style.top = 50 + y + '%';
        }
      } else {
        button.innerText = 'Меню';

        for (var _i = 0; _i < length; _i++) {
          items[_i].removeAttribute('style');
        }
      }
    });
  });
}

RoundMenu();

(function () {
  var button = document.getElementById('cn-button'),
      wrapper = document.getElementById('cn-wrapper'),
      overlay = document.getElementById('cn-overlay'); //open and close menu when the button is clicked

  var open = false;
  button.addEventListener('click', handler, false);
  wrapper.addEventListener('click', cnhandle, false);

  function cnhandle(e) {
    e.stopPropagation();
  }

  function handler(e) {
    if (!e) var e = window.event;
    e.stopPropagation(); //so tha it doesn't trigger click event on document

    if (!open) {
      openNav();
    } else {
      closeNav();
    }
  }

  function openNav() {
    open = true;
    button.innerHTML = "-";
    wrapper.classList.add('opened-nav');
    overlay.classList.add('on-overlay');
  }

  function closeNav() {
    open = false;
    button.innerHTML = "+";
    wrapper.classList.remove('opened-nav');
    overlay.classList.remove('on-overlay');
  }

  document.addEventListener('click', closeNav);
})();