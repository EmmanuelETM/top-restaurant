import "./about.css";

const createAbout = function() {

    const addText = function(container, array) {
        array.forEach(text => {
            let p = document.createElement("p");
            p.textContent = text;
            container.appendChild(p);
        });
    }

    const aboutContainer = document.createElement('div');
    aboutContainer.classList.add('about-container');

    const scheduleContainer = document.createElement("div");
    const scheduleHeader = document.createElement("h3");
    const scheduleText = [
        'Monday to Thursday: 11:00 AM – 9:00 PM',
        'Friday and Saturday: 11:00 AM – 10:30 PM',
        'Sunday: 12:00 PM – 8:00 PM'
    ];
    const locationContainer = document.createElement("div");
    const locationHeader = document.createElement("h3");
    const locationText = [
        'Il Pasta',
        '123 Bella Vista Avenue',
        'Cucina Town, IT 45678'
    ];
    const contactContainer = document.createElement("div");
    const contactHeader = document.createElement("h3");
    const contactText = [
        '(888)-888-8888',
        'contact@ilpasta.com',
    ];

    scheduleHeader.textContent = "Operational Hours";
    scheduleContainer.appendChild(scheduleHeader);
    addText(scheduleContainer, scheduleText);

    locationHeader.textContent = "Location";
    locationContainer.appendChild(locationHeader);
    addText(locationContainer, locationText);

    contactHeader.textContent = "Contact Us";
    contactContainer.appendChild(contactHeader);
    addText(contactContainer, contactText);

    aboutContainer.appendChild(scheduleContainer);
    aboutContainer.appendChild(locationContainer);
    aboutContainer.appendChild(contactContainer);

    return aboutContainer;
}

export const About = function(container) {
    container.appendChild(createAbout());
}