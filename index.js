document.getElementById('hamburger-icon').addEventListener('click', function() {
    var sidebar = document.getElementById('sidebar');
    if (sidebar.style.left === '-50%') {
        sidebar.style.left = '0';
    } else {
        sidebar.style.left = '-50%';
    }
});

document.getElementById('close-sidebar').addEventListener('click', function() {
    var sidebar = document.getElementById('sidebar');
    sidebar.style.left = '-50%';
});