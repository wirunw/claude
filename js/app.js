// Claude Cowork Course - Main JavaScript

// Show a specific screen (splash, login, or app)
function showScreen(id) {
    document.getElementById('splash').style.display = 'none';
    document.getElementById('login').style.display = 'none';
    document.getElementById('app').style.display = 'none';
    document.getElementById(id).style.display = 'flex';
}

// Handle login
async function doLogin() {
    const u = document.getElementById('uname').value;
    const p = document.getElementById('pwd').value;
    const e = document.getElementById('loginError');
    if (u === 'Phmee1' && p === 'Phmee123') {
        showScreen('app');
        e.style.display = 'none';
        await showSection('intro');
    } else {
        e.style.display = 'block';
    }
}

// Show a specific section (lesson)
async function showSection(id) {
    document.querySelectorAll('.section').forEach(s => s.style.display = 'none');
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    document.querySelector(`[data-section="${id}"]`).classList.add('active');

    // Load content if not already loaded
    const section = document.getElementById(id);
    if (!section.innerHTML.trim()) {
        try {
            const response = await fetch(`lessons/${id}.html`);
            if (response.ok) {
                section.innerHTML = await response.text();
            }
        } catch (error) {
            console.error('Error loading content:', error);
            section.innerHTML = '<p style="color: red;">เกิดข้อผิดพลาดในการโหลดเนื้อหา</p>';
        }
    }

    section.style.display = 'block';
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
