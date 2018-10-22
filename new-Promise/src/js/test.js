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
