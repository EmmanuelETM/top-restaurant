import "./home.css"

const createHome = function() {

    const homeContainer = document.createElement('div');

    return homeContainer;
}

export const Home = function() {
    const content = document.querySelector('#content');
    content.appendChild(createHome());
}