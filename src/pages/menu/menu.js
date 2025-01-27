import './menu.css';
import Bolognese from '../../img/bolognese.jpg';
import Carbonara from '../../img/carbonara.jpg';
import Pomodoro from '../../img/pomodoro.jpg';
import Vodka from '../../img/vodka.jpg';
import Pesto from '../../img/pesto.jpg';
import Aglio from '../../img/aglio.jpg';

const createMenu = function() {

    const createCell = function(img, text, price) {
        const div = document.createElement('div');
        let image = document.createElement("img");
        image.src = img;
        image.classList.add("img");
        let h4 = document.createElement('h4');
        h4.textContent = text;
        let p = document.createElement("p");
        p.textContent = price;

        div.appendChild(image);
        div.appendChild(h4);
        div.appendChild(p);

        div.classList.add('cell');

        return div;
    };

    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');
    
    const bolognese = createCell(Bolognese, 'Pasta Bolognese', 10.50);
    const carbonara = createCell(Carbonara, 'Pasta Bolognese', 10.50);
    const pomodoro = createCell(Pomodoro, 'Pasta Bolognese', 10.50);
    const vodka = createCell(Vodka, 'Penne a la Vodka', 12.00);
    const pesto = createCell(Pesto, 'Penne al Pesto', 12.00);
    const aglio = createCell(Aglio, 'Pasta Aglio e Oleo', 12.00);

    menuContainer.appendChild(bolognese);
    menuContainer.appendChild(carbonara);
    menuContainer.appendChild(pomodoro);
    menuContainer.appendChild(vodka);
    menuContainer.appendChild(pesto);
    menuContainer.appendChild(aglio);

    return menuContainer;
}

export const Menu = function(container) {
    container.appendChild(createMenu());
}