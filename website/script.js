document.addEventListener('DOMContentLoaded', function () {
    var button = document.getElementById('mode-toggle');
    button.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');
    });
});
