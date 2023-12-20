function closeWelcomeBox() {
    var welcomeBox = document.getElementById('welcomeBox');
    welcomeBox.style.opacity = 0;
    setTimeout(function () {
        welcomeBox.style.visibility = 'hidden';
    }, 500); // 500ms es la duración de la transición
}
