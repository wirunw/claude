// Claude Cowork Course - Main JavaScript

// Show a specific screen (splash, login, or app)
function showScreen(id) {
    document.getElementById('splash').style.display = 'none';
    document.getElementById('login').style.display = 'none';
    document.getElementById('app').style.display = 'none';
    document.getElementById(id).style.display = 'flex';
}

// Handle login
function doLogin() {
    const u = document.getElementById('uname').value;
    const p = document.getElementById('pwd').value;
    const e = document.getElementById('loginError');
    if (u === 'Phmee1' && p === 'Phmee123') {
        showScreen('app');
        e.style.display = 'none';
        showSection('intro');
    } else {
        e.style.display = 'block';
    }
}

// Show a specific section (lesson)
function showSection(id) {
    document.querySelectorAll('.section').forEach(s => s.style.display = 'none');
    document.getElementById(id).style.display = 'block';
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    document.querySelector(`[data-section="${id}"]`).classList.add('active');
    const content = document.querySelector('.content');
    content.scrollTop = 0;
    window.scrollTo(0, 0);
}

// Handle logout
function doLogout() {
    document.getElementById('uname').value = '';
    document.getElementById('pwd').value = '';
    showScreen('login');
}

// Initialize: add Enter key listener for login fields
document.addEventListener('DOMContentLoaded', () => {
    ['uname', 'pwd'].forEach(id => {
        document.getElementById(id).addEventListener('keydown', e => {
            if (e.key === 'Enter') doLogin();
        });
    });
});

// Show splash screen on load
window.onload = () => {
    showScreen('splash');
};
