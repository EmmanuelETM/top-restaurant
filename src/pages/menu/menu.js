import "./home.css"

const createMenu = function() {

    const menuContainer = document.createElement('div');

    return menuContainer;
}

export const Menu = function() {
    const content = document.querySelector('#content');
    content.appendChild(createMenu());
}