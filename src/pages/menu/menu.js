import './menu.css';

const createMenu = function() {

    const menuContainer = document.createElement('div');


    return menuContainer;
}

export const Menu = function(container) {
    container.appendChild(createMenu());
}