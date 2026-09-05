// --- Gestion du Thème Clair / Sombre ---
function updateThemeUI(theme) {
    document.documentElement.setAttribute('data-bs-theme', theme);
    localStorage.setItem('theme', theme);

    const themeIcon = document.getElementById('themeIcon');
    if (themeIcon) {
        if (theme === 'dark') {
            themeIcon.className = 'bi bi-sun-fill text-warning';
        } else {
            themeIcon.className = 'bi bi-moon-stars-fill text-secondary';
        }
    }

    const cafecodeImg = document.getElementById('cafecodeProjectImg');
    if (cafecodeImg) {
        cafecodeImg.src = theme === 'dark' ? 'imgs/cafecode_dark.png' : 'imgs/cafecode_light.png';
    }
}

// Initialiser au chargement
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    updateThemeUI(savedTheme);

    const themeToggleBtn = document.getElementById('themeToggleBtn');
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-bs-theme') || 'light';
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            updateThemeUI(newTheme);
        });
    }
});
