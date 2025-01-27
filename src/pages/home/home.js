import './home.css';

const createHome = function() {

    const homeContainer = document.createElement('div');
    homeContainer.classList.add('home-container');

    const homeHeader = document.createElement("h1");
    const homeText = document.createElement("p");

    homeHeader.textContent = "Welcome to Il Pasta";
    homeText.textContent = "At Il Pasta, we bring authentic Italian flavors to your plate. From freshly made pasta to rich, slow-simmered sauces, every dish reflects Italy's culinary heritage."
    
    homeContainer.appendChild(homeHeader);
    homeContainer.appendChild(homeText);

    return homeContainer;
}

export const Home = function(container) {
    container.appendChild(createHome());
}

