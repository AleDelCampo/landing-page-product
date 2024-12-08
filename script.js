// Funzione per generare le stelle casualmente
function generateStars(id) {
    const container = document.getElementById(id);
    container.innerHTML = ''; // Resetta il contenitore

    let fullStars = Math.floor(Math.random() * 6); // Numero casuale di stelle piene 0-5
    let emptyStars = 5 - fullStars; // Il resto saranno stelle vuote

    // Aggiungo le stelle piene
    for (let i = 0; i < fullStars; i++) {
        const star = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        star.setAttribute("class", "star");
        star.setAttribute("viewBox", "0 0 16 16");
        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path.setAttribute("d", "M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z");
        star.appendChild(path);
        star.classList.add('star-filled');
        container.appendChild(star);
    }

    // Aggiungo le stelle vuote
    for (let i = 0; i < emptyStars; i++) {
        const star = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        star.setAttribute("class", "star");
        star.setAttribute("viewBox", "0 0 16 16");
        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path.setAttribute("d", "M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z");
        star.appendChild(path);
        star.classList.add('star-empty');
        container.appendChild(star);
    }
}

// Chiamata per ogni contenitore di stelle
generateStars('stars1');
generateStars('stars2');
generateStars('stars3');
generateStars('stars4');
generateStars('stars5');
generateStars('stars6');



// Funzione per generare stelle casuali
function generateStars(id) {
    const container = document.getElementById(id);
    container.innerHTML = ''; // Resetta il contenitore

    let fullStars = Math.floor(Math.random() * 6); // Numero casuale di stelle piene 0-5
    let emptyStars = 5 - fullStars; // Il resto saranno stelle vuote

    // Aggiungo le stelle piene
    for (let i = 0; i < fullStars; i++) {
        const star = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        star.setAttribute("class", "star");
        star.setAttribute("viewBox", "0 0 16 16");
        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path.setAttribute("d", "M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z");
        star.appendChild(path);
        star.classList.add('star-filled');
        container.appendChild(star);
    }

    // Aggiungo le stelle vuote
    for (let i = 0; i < emptyStars; i++) {
        const star = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        star.setAttribute("class", "star");
        star.setAttribute("viewBox", "0 0 16 16");
        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path.setAttribute("d", "M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z");
        star.appendChild(path);
        star.classList.add('star-empty');
        container.appendChild(star);
    }
}

// Chiamate alle funzioni per ogni immagine
generateStars('stars7');

generateStars('stars8');

generateStars('stars9');

// Aggiungo un evento di scroll
window.addEventListener('scroll', function () {
    // Trovo la posizione della section
    let section = document.querySelector('.content-section');
    let navbar = document.querySelector('.navbar');

    // Calcolo la posizione della section nella pagina
    let rect = section.getBoundingClientRect();

    // Se la sezione è nella parte superiore della finestra (quando la top è <= 0), nasconde la navbar
    if (rect.top <= 0) {
        navbar.classList.add('navbar-hidden');
    } else {
        navbar.classList.remove('navbar-hidden');
    }
});

// Inizializzo EmailJS con la mia Public Key
(function() {
    emailjs.init("rL0LsG1kN3CcwjKsX"); // Sostituisco con la mia Public Key
})();
// Funzione per gestire l'invio del form
document.getElementById('newsletterForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;

    // Invio l'email tramite EmailJS
    emailjs.sendForm("service_03o9iwt", "template_ioo4eub", this)
        .then(function(response) {
            alert("Email inviata con successo!");
            // Pulisci il campo dell'input
            document.getElementById('email').value = '';
        }, function(error) {
            alert("Errore nell'invio dell'email: " + error.text);
        });
});
