document.addEventListener('DOMContentLoaded', function () {
    function rand(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    document.getElementById('sales').textContent = '$' + rand(100000, 200000).toLocaleString();
    document.getElementById('users').textContent = rand(500, 1500);
    document.getElementById('conversion').textContent = (Math.random() * 10).toFixed(1) + '%';
    document.getElementById('tickets').textContent = rand(5, 30);
});
