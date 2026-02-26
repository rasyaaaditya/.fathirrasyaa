// === DATA PENGGUNA (Default 2 Akun) ===
// Anda bisa daftar akun baru, dan data akan ditambahkan ke array ini
let users = [
    { username: 'admin', password: '123', nama: 'Administrator' },
    { username: 'user', password: '123', nama: 'Pengguna Biasa' }
];

// === ELEMEN DOM ===
const loginPage = document.getElementById('login-page');
const signupPage = document.getElementById('signup-page');
const shopPage = document.getElementById('shop-page');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const showSignup = document.getElementById('show-signup');
const showLogin = document.getElementById('show-login');
const userDisplay = document.getElementById('user-display');
const logoutBtn = document.getElementById('logout-btn');

// === TAMPILAN HALAMAN ===
showSignup.addEventListener('click', function(e) {
    e.preventDefault();
    loginPage.classList.add('hidden');
    signupPage.classList.remove('hidden');
});

showLogin.addEventListener('click', function(e) {
    e.preventDefault();
    signupPage.classList.add('hidden');
    loginPage.classList.remove('hidden');
});

// === LOGIC SIGN UP (DAFTAR) ===
signupForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;
    const nama = document.getElementById('signup-nama').value;

    // Cek apakah username sudah ada
    const userExists = users.some(u => u.username === username);

    if (userExists) {
        alert('Username sudah digunakan! Silakan pilih username lain.');
        return;
    }

    // Tambah user baru ke array
    users.push({ username, password, nama });
    
    alert('Pendaftaran berhasil! Silakan login dengan akun baru Anda.');
    
    // Reset form dan pindah ke halaman login
    signupForm.reset();
    signupPage.classList.add('hidden');
    loginPage.classList.remove('hidden');
});

// === LOGIC LOGIN ===
loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    // Cek kecocokan user
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        // Login berhasil
        loginPage.classList.add('hidden');
        signupPage.classList.add('hidden');
        shopPage.classList.remove('hidden');
        
        // Tampilkan nama user
        userDisplay.textContent = `Halo, ${user.nama}`;
    } else {
        alert('Username atau password salah!');
    }
});

// === LOGIC LOGOUT ===
logoutBtn.addEventListener('click', function(e) {
    e.preventDefault();
    
    shopPage.classList.add('hidden');
    loginPage.classList.remove('hidden');
    
    // Reset form login
    document.getElementById('login-username').value = '';
    document.getElementById('login-password').value = '';
});

// === KERANJANG BELANJA ===
let cartCount = 0;
const cartCountElement = document.getElementById('cart-count');

function addToCart() {
    cartCount++;
    cartCountElement.innerText = cartCount;
    alert('Berhasil ditambahkan ke keranjang!');
}