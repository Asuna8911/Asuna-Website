document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const validCredentials = {
        'Yahya': 'Klassenzimmer',
        'admin': 'A',
        'Ketten': 'Wald',
        'Developer': 'Developer-Zugang'
    };

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    if (validCredentials[username] && validCredentials[username] === password) {
        // Erfolgreicher Login, Weiterleitung
        window.location.href = 'suck.html';
    } else {
        // Fehlgeschlagen, Fehler anzeigen
        errorMessage.textContent = 'Falscher Benutzername oder Passwort!';
        errorMessage.style.display = 'block';
    }
});
