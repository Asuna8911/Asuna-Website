document.querySelectorAll('.menu-link').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();

        // Aktiven Link hervorheben
        document.querySelectorAll('.menu-link').forEach(link => link.classList.remove('active'));
        this.classList.add('active');

        // Alle Sektionen verstecken
        document.querySelectorAll('.content').forEach(section => section.classList.remove('active'));

        // Ziel-Sektion anzeigen
        const targetSection = document.getElementById(this.getAttribute('data-target'));
        targetSection.classList.add('active');
    });
});

document.getElementById('animatedButton').addEventListener('click', function() {
    // Hier kannst du die URL zur nächsten Seite einfügen
    window.location.href = 'suck.html';
});
