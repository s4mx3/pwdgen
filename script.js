// --- Constants & Config ---
const translations = {
    en: {
        title: "Password Generator",
        subtitle: "Generate strong, unique passwords instantly. Your passwords are created locally and never stored.",
        statusText: "Secure & Private",
        length: "Length",
        includeLower: "Lowercase",
        includeUpper: "Uppercase",
        includeNumbers: "Numbers",
        includeSymbols: "Symbols",
        strength: "Strength",
        weak: "Weak",
        medium: "Medium",
        strong: "Strong",
        excellent: "Excellent",
        copyAria: "Copy password",
        regenerateAria: "Regenerate password",
        password: "Generated Password",
        language: "English",
        passwordsCreated: "Passwords created:",
        spaceHint: "Press <kbd>Space</kbd> to regenerate",
        infoTitle: "What makes a strong password?",
        long: "Long",
        longDesc: "Use at least 12 characters. Length is the single most important factor.",
        complex: "Complex",
        complexDesc: "Mix uppercase, lowercase, numbers, and symbols to maximize entropy.",
        unique: "Unique",
        uniqueDesc: "Never reuse passwords. Each account needs its own fortress.",
        copied: "Password copied!",
        generated: "New password generated!"
    },
    es: {
        title: "Generador de Contraseñas",
        subtitle: "Genera contraseñas fuertes y únicas al instante. Se crean localmente y nunca se almacenan.",
        statusText: "Seguro y Privado",
        length: "Longitud",
        includeLower: "Minúsculas",
        includeUpper: "Mayúsculas",
        includeNumbers: "Números",
        includeSymbols: "Símbolos",
        strength: "Fortaleza",
        weak: "Débil",
        medium: "Media",
        strong: "Fuerte",
        excellent: "Excelente",
        copyAria: "Copiar contraseña",
        regenerateAria: "Regenerar contraseña",
        password: "Contraseña generada",
        language: "Español",
        passwordsCreated: "Contraseñas creadas:",
        spaceHint: "Presiona <kbd>Espacio</kbd> para regenerar",
        infoTitle: "¿Qué hace una contraseña fuerte?",
        long: "Larga",
        longDesc: "Usa al menos 12 caracteres. La longitud es el factor más importante.",
        complex: "Compleja",
        complexDesc: "Mezcla mayúsculas, minúsculas, números y símbolos para máxima seguridad.",
        unique: "Única",
        uniqueDesc: "Nunca reutilices contraseñas. Cada cuenta necesita su propia fortaleza.",
        copied: "¡Contraseña copiada!",
        generated: "¡Nueva contraseña generada!"
    },
    fr: {
        title: "Générateur de Mots de Passe",
        subtitle: "Créez instantanément des mots de passe forts et uniques. Générés localement, jamais stockés.",
        statusText: "Sécurisé et Privé",
        length: "Longueur",
        includeLower: "Minuscules",
        includeUpper: "Majuscules",
        includeNumbers: "Chiffres",
        includeSymbols: "Symboles",
        strength: "Force",
        weak: "Faible",
        medium: "Moyenne",
        strong: "Forte",
        excellent: "Excellente",
        copyAria: "Copier le mot de passe",
        regenerateAria: "Régénérer le mot de passe",
        password: "Mot de passe généré",
        language: "Français",
        passwordsCreated: "Mots de passe créés :",
        spaceHint: "Appuyez sur <kbd>Espace</kbd> pour régénérer",
        infoTitle: "Qu'est-ce qu'un mot de passe fort ?",
        long: "Long",
        longDesc: "Utilisez au moins 12 caractères. La longueur est le facteur le plus important.",
        complex: "Complexe",
        complexDesc: "Mélangez majuscules, minuscules, chiffres et symboles pour une sécurité maximale.",
        unique: "Unique",
        uniqueDesc: "Ne réutilisez jamais vos mots de passe. Chaque compte a besoin de sa propre forteresse.",
        copied: "Mot de passe copié !",
        generated: "Nouveau mot de passe généré !"
    },
    tr: {
        title: "Şifre Oluşturucu",
        subtitle: "Güçlü ve benzersiz şifreler anında oluşturun. Şifreleriniz yerel olarak oluşturulur.",
        statusText: "Güvenli ve Gizli",
        length: "Uzunluk",
        includeLower: "Küçük Harf",
        includeUpper: "Büyük Harf",
        includeNumbers: "Rakamlar",
        includeSymbols: "Semboller",
        strength: "Güç",
        weak: "Zayıf",
        medium: "Orta",
        strong: "Güçlü",
        excellent: "Mükemmel",
        copyAria: "Şifreyi kopyala",
        regenerateAria: "Şifreyi yeniden oluştur",
        password: "Oluşturulan şifre",
        language: "Türkçe",
        passwordsCreated: "Oluşturulan şifreler:",
        spaceHint: "Yeniden oluşturmak için <kbd>Boşluk</kbd>'a basın",
        infoTitle: "Güçlü bir şifre ne yapar?",
        long: "Uzun",
        longDesc: "En az 12 karakter kullanın. Uzun şifreler kırılması çok daha zordur.",
        complex: "Karmaşık",
        complexDesc: "Büyük-küçük harf, rakam ve sembolleri karıştırarak maksimum güvenlik sağlayın.",
        unique: "Benzersiz",
        uniqueDesc: "Şifreleri asla yeniden kullanmayın. Her hesabın kendi güçlü şifresine ihtiyacı vardır.",
        copied: "Şifre kopyalandı!",
        generated: "Yeni şifre oluşturuldu!"
    }
};

// --- Cached DOM elements ---
const elements = {
    password: document.getElementById("password"),
    copyBtn: document.getElementById("copy-btn"),
    regenerateBtn: document.getElementById("regenerate-btn"),
    lengthSlider: document.getElementById("length-slider"),
    lengthNumber: document.getElementById("length-number"),
    lowercase: document.getElementById("lowercase"),
    uppercase: document.getElementById("uppercase"),
    numbers: document.getElementById("numbers"),
    symbols: document.getElementById("symbols"),
    strengthBar: document.getElementById("strength-bar"),
    strengthLabel: document.getElementById("strength-label"),
    counter: document.getElementById("counter"),
    langTrigger: document.getElementById("lang-trigger"),
    langDropdown: document.getElementById("lang-dropdown"),
    currentLang: document.getElementById("current-lang"),
    title: document.getElementById("title"),
    subtitle: document.getElementById("subtitle"),
    statusText: document.getElementById("status-text"),
    lengthLabel: document.getElementById("length-label"),
    placeholderFallback: document.getElementById("password-placeholder-fallback"),
    passwordGroup: document.querySelector('.password-group'),
    toast: document.getElementById("toast")
};

// --- State ---
let passwordCount = 0;
let lastGenerated = null;
let currentLang = localStorage.getItem('pwdgen-lang') || 'en';

// --- Character sets ---
const CHARS = {
    lower: "abcdefghijklmnopqrstuvwxyz",
    upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    number: "0123456789",
    symbol: "!@#$%^&*()-_=+~`|:;,.<>?"
};

// --- Utility functions ---
function nowTimeString() {
    return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
}

function getCharset(opts) {
    let chars = "";
    if (opts.lower) chars += CHARS.lower;
    if (opts.upper) chars += CHARS.upper;
    if (opts.number) chars += CHARS.number;
    if (opts.symbol) chars += CHARS.symbol;
    return chars;
}

// Securely get a random integer from 0 to max (exclusive)
function getSecureRandomInt(max) {
    const array = new Uint32Array(1);
    window.crypto.getRandomValues(array);
    return array[0] % max; // Bias is negligible for max << 2^32
}

function generatePassword(length, opts) {
    const charset = getCharset(opts);
    if (!charset) return "";

    const result = [];
    const requiredSets = [];
    if (opts.lower) requiredSets.push(CHARS.lower);
    if (opts.upper) requiredSets.push(CHARS.upper);
    if (opts.number) requiredSets.push(CHARS.number);
    if (opts.symbol) requiredSets.push(CHARS.symbol);

    // 1. Guarantee at least one char from each selected set
    for (const set of requiredSets) {
        result.push(set[getSecureRandomInt(set.length)]);
    }

    // 2. Fill the rest of the length
    const remainingLength = length - result.length;
    for (let i = 0; i < remainingLength; i++) {
        result.push(charset[getSecureRandomInt(charset.length)]);
    }

    // 3. Fisher-Yates Shuffle (Cryptographically Secure)
    for (let i = result.length - 1; i > 0; i--) {
        const j = getSecureRandomInt(i + 1);
        [result[i], result[j]] = [result[j], result[i]];
    }

    return result.join("");
}

function getOptions() {
    return {
        lower: elements.lowercase.getAttribute('aria-pressed') === 'true',
        upper: elements.uppercase.getAttribute('aria-pressed') === 'true',
        number: elements.numbers.getAttribute('aria-pressed') === 'true',
        symbol: elements.symbols.getAttribute('aria-pressed') === 'true'
    };
}

function hasAnyOption(opts) {
    return opts.lower || opts.upper || opts.number || opts.symbol;
}

function calculateEntropy(pw, opts) {
    const charset = getCharset(opts);
    if (!pw || !charset) return 0;
    return Math.log2(charset.length) * pw.length;
}

function formatCrackTime(entropy) {
    // Assume 10 billion guesses per second (modern GPU cluster)
    const guessesPerSecond = 10e9;
    const totalCombinations = Math.pow(2, entropy);
    const seconds = totalCombinations / guessesPerSecond / 2; // Average is half

    if (seconds < 1) return 'Less than a second';
    if (seconds < 10) return 'A few seconds';
    if (seconds < 60) return 'Under a minute';
    if (seconds < 300) return 'A few minutes';
    if (seconds < 3600) return 'Under an hour';
    if (seconds < 86400) return 'Several hours';
    if (seconds < 604800) return 'A few days';
    if (seconds < 2592000) return 'A few weeks';
    if (seconds < 31536000) return 'Several months';
    if (seconds < 31536000 * 10) return 'A few years';
    if (seconds < 31536000 * 100) return 'Decades';
    if (seconds < 31536000 * 1000) return 'Centuries';
    if (seconds < 31536000 * 1e6) return 'Millennia';
    if (seconds < 31536000 * 1e9) return 'Millions of years';
    return 'Eternity';
}

function estimateStrength(pw, opts) {
    const t = translations[currentLang];
    const charset = getCharset(opts);
    if (!pw || !charset) return { score: 0, label: t.weak, color: "var(--danger)", glow: "glow-danger" };

    const entropy = Math.log2(charset.length) * pw.length;
    if (entropy < 40) return { score: 1, label: t.weak, color: "var(--danger)", glow: "glow-danger" };
    if (entropy < 60) return { score: 2, label: t.medium, color: "var(--warning)", glow: "glow-warning" };
    if (entropy < 80) return { score: 3, label: t.strong, color: "var(--success)", glow: "glow-success" };
    return { score: 4, label: t.excellent, color: "var(--excellent)", glow: "glow-excellent" };
}

function updateStrengthMeter(pw, opts) {
    const { score, label, color, glow } = estimateStrength(pw, opts);
    const widths = [0, 30, 55, 80, 100];

    // Update strength bar
    elements.strengthBar.style.width = widths[score] + "%";
    elements.strengthBar.style.background = color;
    elements.strengthBar.className = glow;
    elements.strengthLabel.textContent = label;
    elements.strengthLabel.style.color = color;

    // Update entropy display
    const entropy = calculateEntropy(pw, opts);
    document.getElementById('entropy-value').textContent = `${Math.round(entropy)} bits`;

    // Update crack time display
    const crackTime = formatCrackTime(entropy);
    const crackTimeEl = document.getElementById('crack-time');
    crackTimeEl.textContent = crackTime;

    // Color code the crack time
    if (entropy < 40) {
        crackTimeEl.style.color = 'var(--danger)';
    } else if (entropy < 60) {
        crackTimeEl.style.color = 'var(--warning)';
    } else {
        crackTimeEl.style.color = 'var(--success)';
    }
}


function showToast(message, icon = '', type = 'info') {
    if (elements.toast.timeout) clearTimeout(elements.toast.timeout);
    elements.toast.classList.remove('show', 'toast-success', 'toast-info');
    void elements.toast.offsetWidth;

    const iconHtml = icon ? `<i class="${icon}" aria-hidden="true"></i>` : '';
    elements.toast.innerHTML = iconHtml + `<span>${message}</span>`;
    elements.toast.classList.add('show', `toast-${type}`);

    elements.toast.timeout = setTimeout(() => {
        elements.toast.classList.remove('show');
    }, 2000);
}

function updateCopyButton() {
    const hasPassword = elements.password.value && elements.password.value.length > 0;
    elements.copyBtn.disabled = !hasPassword;
}

function syncLengthInputs(val) {
    elements.lengthSlider.value = val;
    elements.lengthNumber.value = val;
    updateSliderFill();
}

function updateSliderFill() {
    const slider = elements.lengthSlider;
    const min = parseInt(slider.min);
    const max = parseInt(slider.max);
    const val = parseInt(slider.value);
    const percent = ((val - min) / (max - min)) * 100;
    slider.style.background = `linear-gradient(to right, var(--accent-primary) 0%, var(--accent-tertiary) ${percent}%, rgba(255, 255, 255, 0.1) ${percent}%)`;
}

// --- Stats ---
async function fetchStats() {
    try {
        const response = await fetch('/api/stats');
        if (!response.ok) throw new Error('Failed to fetch stats');
        const data = await response.json();
        if (data && typeof data.count === 'number') {
            passwordCount = data.count;
            lastGenerated = data.lastGenerated;
            updateStatsDisplay();
        }
    } catch (error) {
        // Fallback to localStorage
        const savedCount = localStorage.getItem('pwdgen-count');
        if (savedCount) {
            passwordCount = parseInt(savedCount, 10);
            lastGenerated = localStorage.getItem('pwdgen-last');
            updateStatsDisplay();
        }
    }
}

function updateStatsDisplay() {
    elements.counter.textContent = passwordCount;
}

async function updateStats() {
    updateStatsDisplay();
    localStorage.setItem('pwdgen-count', passwordCount.toString());
    localStorage.setItem('pwdgen-last', lastGenerated);

    try {
        await fetch('/api/stats', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ count: passwordCount, lastGenerated: lastGenerated })
        });
    } catch (error) {
        // Silent fail, local storage is backup
    }
}

// --- Preferences ---
function savePreferences() {
    const preferences = {
        length: parseInt(elements.lengthSlider.value, 10),
        options: getOptions()
    };
    localStorage.setItem('pwdgen-preferences', JSON.stringify(preferences));
}

function loadPreferences() {
    try {
        const saved = localStorage.getItem('pwdgen-preferences');
        if (saved) {
            const prefs = JSON.parse(saved);
            syncLengthInputs(prefs.length);
            elements.lowercase.setAttribute('aria-pressed', prefs.options.lower);
            elements.uppercase.setAttribute('aria-pressed', prefs.options.upper);
            elements.numbers.setAttribute('aria-pressed', prefs.options.number);
            elements.symbols.setAttribute('aria-pressed', prefs.options.symbol);
            return true;
        }
    } catch (e) {
        console.warn('Failed to load preferences');
    }
    return false;
}

// --- Generation ---
function showNoOptionsState() {
    elements.password.value = '';
    elements.passwordGroup.classList.add('fallback-active');
    elements.strengthBar.style.width = '0%';
    elements.strengthLabel.textContent = translations[currentLang].weak;
    elements.strengthLabel.style.color = 'var(--text-muted)';
    updateCopyButton();
}

function doGenerate() {
    const length = parseInt(elements.lengthSlider.value, 10);
    const opts = getOptions();

    if (!hasAnyOption(opts)) {
        showNoOptionsState();
        return;
    }

    elements.password.value = generatePassword(length, opts);
    elements.passwordGroup.classList.remove('fallback-active');
    updateStrengthMeter(elements.password.value, opts);
    passwordCount++;
    lastGenerated = nowTimeString();
    updateStats();
    updateCopyButton();
}

// --- i18n ---
function updateI18n() {
    const t = translations[currentLang];

    elements.title.textContent = t.title;
    elements.subtitle.textContent = t.subtitle;
    elements.statusText.textContent = t.statusText;
    elements.lengthLabel.textContent = t.length;
    elements.currentLang.textContent = t.language;
    elements.copyBtn.setAttribute("aria-label", t.copyAria);
    elements.regenerateBtn.setAttribute("aria-label", t.regenerateAria);

    // Stats section
    document.getElementById('passwords-generated-label').textContent = t.passwordsCreated;
    document.getElementById('space-hint').innerHTML = t.spaceHint;

    // Toggle buttons - get the last span (the label, not the icon)
    elements.lowercase.querySelectorAll('span')[1].textContent = t.includeLower;
    elements.uppercase.querySelectorAll('span')[1].textContent = t.includeUpper;
    elements.numbers.querySelectorAll('span')[1].textContent = t.includeNumbers;
    elements.symbols.querySelectorAll('span')[1].textContent = t.includeSymbols;

    // Info panel
    document.getElementById('info-title').textContent = t.infoTitle;
    document.getElementById('info-long-title').textContent = t.long;
    document.getElementById('info-long-desc').textContent = t.longDesc;
    document.getElementById('info-complex-title').textContent = t.complex;
    document.getElementById('info-complex-desc').textContent = t.complexDesc;
    document.getElementById('info-unique-title').textContent = t.unique;
    document.getElementById('info-unique-desc').textContent = t.uniqueDesc;

    // Update strength if password exists
    if (elements.password.value) {
        updateStrengthMeter(elements.password.value, getOptions());
    }

    // Update language dropdown active state
    document.querySelectorAll('.lang-option').forEach(opt => {
        opt.classList.toggle('active', opt.dataset.lang === currentLang);
    });
}

function handleCopy() {
    if (!elements.password.value || elements.copyBtn.disabled) return;

    navigator.clipboard.writeText(elements.password.value).then(() => {
        elements.copyBtn.classList.add('success');
        elements.copyBtn.innerHTML = '<i class="fas fa-check" aria-hidden="true"></i>';
        showToast(translations[currentLang].copied, 'fas fa-check-circle', 'success');

        setTimeout(() => {
            elements.copyBtn.classList.remove('success');
            elements.copyBtn.innerHTML = '<i class="fas fa-clipboard" aria-hidden="true"></i>';
        }, 1500);
    }).catch(() => {
        elements.password.select();
        document.execCommand('copy');
        showToast(translations[currentLang].copied, 'fas fa-check-circle', 'success');
    });
}

function handleRegenerate() {
    const opts = getOptions();
    if (!hasAnyOption(opts)) return; // Don't do anything if no options selected

    // Add spin animation
    elements.regenerateBtn.classList.add('spinning');
    setTimeout(() => elements.regenerateBtn.classList.remove('spinning'), 500);

    doGenerate();
    showToast(translations[currentLang].generated, 'fas fa-sync-alt', 'info');
}

// --- Initialization ---
async function init() {
    await fetchStats();

    if (!loadPreferences()) {
        syncLengthInputs(16);
    } else {
        updateSliderFill();
    }

    // Toggle button handlers
    [elements.lowercase, elements.uppercase, elements.numbers, elements.symbols].forEach(btn => {
        btn.addEventListener('click', () => {
            const newState = btn.getAttribute('aria-pressed') !== 'true';
            btn.setAttribute('aria-pressed', newState);
            doGenerate();
            savePreferences();
        });
    });

    // Length handlers
    elements.lengthSlider.addEventListener('input', e => {
        syncLengthInputs(e.target.value);
        doGenerate();
        savePreferences();
    });

    elements.lengthNumber.addEventListener('input', e => {
        let val = parseInt(e.target.value, 10);
        if (val < 8) val = 8;
        if (val > 128) val = 128;
        syncLengthInputs(val);
        doGenerate();
        savePreferences();
    });

    // Button handlers
    elements.copyBtn.addEventListener('click', handleCopy);
    elements.regenerateBtn.addEventListener('click', handleRegenerate);

    // Language selector
    elements.langTrigger.addEventListener('click', e => {
        e.stopPropagation();
        elements.langDropdown.hidden = !elements.langDropdown.hidden;
    });

    document.querySelectorAll('.lang-option').forEach(option => {
        option.addEventListener('click', () => {
            currentLang = option.dataset.lang;
            localStorage.setItem('pwdgen-lang', currentLang);
            elements.langDropdown.hidden = true;
            updateI18n();
        });
    });

    document.addEventListener('click', e => {
        if (!elements.langTrigger.contains(e.target) && !elements.langDropdown.contains(e.target)) {
            elements.langDropdown.hidden = true;
        }
    });

    // Keyboard shortcuts
    document.addEventListener('keydown', e => {
        const isInputFocused = document.activeElement.tagName === 'INPUT';
        if (e.code === 'Space' && !isInputFocused) {
            e.preventDefault();
            handleRegenerate();
        }
    });

    updateI18n();
    doGenerate();
}

// Start the app
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
