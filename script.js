// --- Gestion automatique du Thème selon le périphérique ---
function applyDeviceTheme() {
    const isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = isDark ? 'dark' : 'light';
    document.documentElement.setAttribute('data-bs-theme', theme);

    const cafecodeImg = document.getElementById('cafecodeProjectImg');
    if (cafecodeImg) {
        cafecodeImg.src = isDark ? 'imgs/cafecode_dark.png' : 'imgs/cafecode_light.png';
    }
}

// Appliquer immédiatement et au chargement du DOM
applyDeviceTheme();
document.addEventListener('DOMContentLoaded', applyDeviceTheme);

// Écouter les changements en temps réel (si l'utilisateur bascule son OS en mode sombre/clair)
if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', applyDeviceTheme);
}
