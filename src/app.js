import "./styles.css";
import { Home } from "./pages/home/home.js";
import { Menu } from "./pages/menu/menu.js";
import { About } from "./pages/about/about.js";

const loadContent = (function() {

    const container = document.querySelector("#content");
    const homeButton = document.querySelector('.home');
    const menuButton = document.querySelector('.menu');
    const aboutButton = document.querySelector('.about');
    const navButtons = document.querySelectorAll('.nav-button');

    const clearContainer = function(container) {
        container.innerText = " ";
    }
    
    const handleButtons = function () {

        navButtons.forEach(button => {
            button.addEventListener('click', () => {
                navButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
            });
        });


        homeButton.addEventListener('click', () => {
            clearContainer(container);
            Home(container);
        })

        menuButton.addEventListener('click', () => {
            clearContainer(container);
            Menu(container);
        })

        aboutButton.addEventListener('click', () => {
            clearContainer(container);
            About(container);
        })
    }

    handleButtons();

    const init = function () {
        clearContainer(container);
        Home(container);
    }

    return { init }
})();

loadContent.init();


