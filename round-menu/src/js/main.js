function RoundMenu() {
    let menus = [...document.querySelectorAll('.round-menu')];

    menus.map((menu) => {
        console.log('into menus');
        let items = menu.querySelectorAll('.round-menu__item');
        let button = menu.querySelector('.round-menu__button');
        let active = false;

        const length = items.length;
        const arc = 2 * Math.PI * (1 / length);
        const radius = 40;
        button.addEventListener('click', (e) => {
            e.preventDefault();
            button.classList.toggle('.round-menu__button_active');
            active = !active;
            if (active) {
                button.innerText = 'Закрыть';
                for (let i = 0; i < length; i++){
                    const angle = i * arc;
                    const x = radius * Math.cos(angle);
                    const y = radius * Math.sin(angle);
                    items[i].style.left = 50 + x + '%';
                    items[i].style.top = 50 + y + '%'
                }
            } else {
                button.innerText = 'Меню';
                for (let i = 0; i < length; i++){
                    items[i].removeAttribute('style');
                }
            }
        })
    });
}
RoundMenu();

(function(){

    var button = document.getElementById('cn-button'),
        wrapper = document.getElementById('cn-wrapper'),
        overlay = document.getElementById('cn-overlay');

    //open and close menu when the button is clicked
    var open = false;
    button.addEventListener('click', handler, false);
    wrapper.addEventListener('click', cnhandle, false);

    function cnhandle(e){
        e.stopPropagation();
    }

    function handler(e){
        if (!e) var e = window.event;
        e.stopPropagation();//so tha it doesn't trigger click event on document

        if(!open){
            openNav();
        }
        else{
            closeNav();
        }
    }
    function openNav(){
        open = true;
        button.innerHTML = "-";
        wrapper.classList.add('opened-nav');
        overlay.classList.add('on-overlay');
    }
    function closeNav(){
        open = false;
        button.innerHTML = "+";
        wrapper.classList.remove('opened-nav');
        overlay.classList.remove('on-overlay');
    }
    document.addEventListener('click', closeNav);

})();

