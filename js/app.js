// js/app.js
import { ringkasInventaris, cariAlatById, formatRingkasanAlat } from './utils.js';

// Data Inventaris
const komponenLacuba = [
    { id: 1, nama: 'LED Underwater', kategori: 'Pencahayaan', jumlah: 1, kondisi: 'Baik', lokasi: 'Pesisir Amal' },
    { id: 2, nama: 'ESP32', kategori: 'Mikrokontroler', jumlah: 1, kondisi: 'Baik', lokasi: 'Pesisir Amal' },
    { id: 3, nama: 'RTC DS3231', kategori: 'Timer/Modul', jumlah: 1, kondisi: 'Baik', lokasi: 'Pesisir Amal' },
    { id: 4, nama: 'Baterai 18650', kategori: 'Power Supply', jumlah: 4, kondisi: 'Perlu Cek', lokasi: 'Pesisir Amal' },
    { id: 5, nama: 'Relay', kategori: 'Mikrokontroler', jumlah: 1, kondisi: 'Baik', lokasi: 'Pesisir Amal' }
];

// Seleksi Elemen DOM
const daftar = document.querySelector('#daftar-alat');
const tombolFilter = document.querySelectorAll('[data-filter]');
const searchInput = document.querySelector('#search');
const limitSelect = document.querySelector('#limit');

const panelDetail = document.querySelector('#panel-detail');
const detailNama = document.querySelector('#detail-nama');
const detailRingkasan = document.querySelector('#detail-ringkasan');
const btnTutupDetail = document.querySelector('#btn-tutup-detail');

// State Aplikasi
let filterAktif = 'Semua';
let kataKunci = '';

// WEB STORAGE 1: Ambil preferensi limit dari localStorage
let limitAktif = Number(localStorage.getItem('limit') ?? '5');
if (limitSelect) {
    limitSelect.value = String(limitAktif);
}

// -------------------------------------------------------------------------
// FUNGSI UTAMA RENDER ITEMS (Memanfaatkan Dynamic DOM Manipulation)
// -------------------------------------------------------------------------
function renderItems(items) {
    if (!daftar) return;
    
    // Memberisihkan container DOM
    daftar.replaceChildren();

    if (items.length === 0) {
        const pesanKosong = document.createElement('p');
        pesanKosong.textContent = 'Alat tidak ditemukan.';
        pesanKosong.style.color = 'var(--text-muted)';
        daftar.append(pesanKosong);
        return;
    }

    // Terapkan batas jumlah item per halaman (slice)
    const itemsTerbatas = items.slice(0, limitAktif);

    for (const item of itemsTerbatas) {
        const article = document.createElement('article');
        article.className = 'card';

        const title = document.createElement('h3');
        title.textContent = item.nama;

        const info = document.createElement('p');
        info.textContent = `${item.kategori} - ${item.jumlah} unit - ${item.kondisi}`;

        // Tombol Detail untuk Event Delegation
        const btnDetail = document.createElement('button');
        btnDetail.type = 'button';
        btnDetail.className = 'btn-filter';
        btnDetail.style.marginTop = '0.5rem';
        btnDetail.textContent = 'Detail';
        btnDetail.dataset.detail = item.id;

        article.append(title, info, btnDetail);
        daftar.append(article);
    }
}

// Fungsi pembantu untuk memfilter dan me-render ulang data
function updateDisplay() {
    let hasil = komponenLacuba;

    // Filter Kondisi
    if (filterAktif !== 'Semua') {
        hasil = hasil.filter(item => item.kondisi === filterAktif);
    }

    // Filter Pencarian Nama
    if (kataKunci.trim() !== '') {
        hasil = hasil.filter(item => item.nama.toLowerCase().includes(kataKunci.toLowerCase()));
    }

    renderItems(hasil);
}

// =========================================================================
// TUGAS OBE: INTERAKSI 1 - Event Listener Pencarian (Event: 'input')
// =========================================================================
if (searchInput) {
    searchInput.addEventListener('input', (event) => {
        kataKunci = event.target.value;
        updateDisplay();
    });
}

// Filter Kondisi Event
tombolFilter.forEach(button => {
    button.addEventListener('click', () => {
        filterAktif = button.dataset.filter;
        updateDisplay();
    });
});

// =========================================================================
// TUGAS OBE: INTERAKSI 2 - Event Delegation pada Container (#daftar-alat)
// =========================================================================
if (daftar) {
    daftar.addEventListener('click', (event) => {
        // Deteksi elemen target yang diklik menggunakan .closest()
        const button = event.target.closest('[data-detail]');
        if (!button) return;

        const id = Number(button.dataset.detail);
        const itemDitemukan = cariAlatById(komponenLacuba, id);

        if (itemDitemukan && panelDetail) {
            detailNama.textContent = itemDitemukan.nama;
            detailRingkasan.textContent = formatRingkasanAlat(itemDitemukan);
            panelDetail.style.display = 'block';
        }
    });
}

// Tombol Tutup Panel Detail
if (btnTutupDetail) {
    btnTutupDetail.addEventListener('click', () => {
        panelDetail.style.display = 'none';
    });
}

// WEB STORAGE 1: Simpan Limit Item ke localStorage
if (limitSelect) {
    limitSelect.addEventListener('change', () => {
        limitAktif = Number(limitSelect.value);
        localStorage.setItem('limit', limitSelect.value);
        updateDisplay();
    });
}

// =========================================================================
// TUGAS OBE: INTERAKSI 3 & WEB STORAGE 2 - Theme Preference Switcher
// =========================================================================
const themeButton = document.querySelector('#theme-button');
const savedTheme = localStorage.getItem('theme') ?? 'light';
document.documentElement.dataset.theme = savedTheme;

if (themeButton) {
    themeButton.addEventListener('click', () => {
        const currentTheme = document.documentElement.dataset.theme;
        const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.dataset.theme = nextTheme;
        localStorage.setItem('theme', nextTheme);
    });
}

// Render Awal
updateDisplay();