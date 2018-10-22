(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
let Test = require('./test');
},{"./test":2}],2:[function(require,module,exports){
module.exports = class Test {
    static _createDOM(target) { // Creates a DOM tree for the slider
        let slider  = document.createElement('div');
            slider.innerHTML = `<div class="SomeClass"></div>`;
        target.appendChild(slider);
        return slider
    }
    constructor({
                    Target       = null,
                })
    {
        let that = this;
        this._Target = rangeslider._createDOM(Target);
    }
    get Target(){
        return this._Target;
    }
    set Target(v){
        this._Target = v;
    }
};
console.log(12312321);
},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvbWFpbi5qcyIsInNyYy9qcy90ZXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJsZXQgVGVzdCA9IHJlcXVpcmUoJy4vdGVzdCcpOyIsIm1vZHVsZS5leHBvcnRzID0gY2xhc3MgVGVzdCB7XHJcbiAgICBzdGF0aWMgX2NyZWF0ZURPTSh0YXJnZXQpIHsgLy8gQ3JlYXRlcyBhIERPTSB0cmVlIGZvciB0aGUgc2xpZGVyXHJcbiAgICAgICAgbGV0IHNsaWRlciAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgc2xpZGVyLmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwiU29tZUNsYXNzXCI+PC9kaXY+YDtcclxuICAgICAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc2xpZGVyKTtcclxuICAgICAgICByZXR1cm4gc2xpZGVyXHJcbiAgICB9XHJcbiAgICBjb25zdHJ1Y3Rvcih7XHJcbiAgICAgICAgICAgICAgICAgICAgVGFyZ2V0ICAgICAgID0gbnVsbCxcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuX1RhcmdldCA9IHJhbmdlc2xpZGVyLl9jcmVhdGVET00oVGFyZ2V0KTtcclxuICAgIH1cclxuICAgIGdldCBUYXJnZXQoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5fVGFyZ2V0O1xyXG4gICAgfVxyXG4gICAgc2V0IFRhcmdldCh2KXtcclxuICAgICAgICB0aGlzLl9UYXJnZXQgPSB2O1xyXG4gICAgfVxyXG59O1xyXG4iXX0=
