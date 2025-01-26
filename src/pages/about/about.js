import "./home.css"

const createAbout = function() {

    const aboutContainer = document.createElement('div');

    return aboutContainer;
}

export const About = function() {
    const content = document.querySelector('#content');
    content.appendChild(createAbout());
}