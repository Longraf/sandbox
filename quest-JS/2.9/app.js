/* Задание 9: Зависимые списки. Реализовать*/

var models = {
    audi: [`A3`, `A5`, `A8l`, `Q7`, `TT`, `R8`],
    bmw: [`S1000 RR`, `R1200 RS`, `HP4 RACE`, `K1600 GTL`, `F800 GT`, `R1200 GS Adventure`, `C650 Stort`],
    suzuki: [`GSX-R1000`, `SV650`, `GSX-S750`, `GSX-S1000`, `V-Strom 650`, `V-Strom 650`, `GSF 650 Bandit`],
    skoda: [`Fabia`, `Rapid`, `Octavia`, `Yeti`, `Superb`, `Kodiaq`],
    lada: [`Granta`, `Kalina`, `Priora`, `Vesta`, `4X4`]
}

let cars   = document.querySelector(`#cars`);
let model = document.querySelector(`#models`);

cars.onchange = selectCars;

function selectCars() {
    while(model.firstChild){
        model.removeChild(model.firstChild);
    }
    for (i = 0; i < models[this.value].length; i++) {
        let option = document.createElement(`option`);
        option.innerHTML = models[this.value][i];
        model.appendChild(option);
    }
}
