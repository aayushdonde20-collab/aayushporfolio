function switchTab(tabName) {
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });
    document.getElementById(tabName).classList.add('active');

    // Highlight the active nav link
    document.querySelectorAll('nav ul li a').forEach(a => {
        a.classList.remove('active');
        if(a.getAttribute('data-tab') === tabName) a.classList.add('active');
    });
}

// Handle nav menu clicks
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        switchTab(this.getAttribute('data-tab'));
    });
});

// On page load, show Home tab
switchTab('home');
