// js/app.js

// Import fungsi dari utils.js
import { ringkasInventaris, cariAlatById, formatRingkasanAlat } from './utils.js';

// 1 & LATIHAN 1: Buat array objek komponen dengan properti 'lokasi'
const komponenLacuba = [
    { id: 1, nama: 'LED Underwater', kategori: 'Pencahayaan', jumlah: 1, kondisi: 'Baik', lokasi: 'Pesisir Amal' },
    { id: 2, nama: 'Wemos D1 Mini', kategori: 'Mikrokontroler', jumlah: 1, kondisi: 'Baik', lokasi: 'Pesisir Amal' },
    { id: 3, nama: 'RTC DS3231', kategori: 'Timer/Modul', jumlah: 1, kondisi: 'Baik', lokasi: 'Pesisir Amal' },
    { id: 4, nama: 'Baterai 18650', kategori: 'Power Supply', jumlah: 4, kondisi: 'Perlu Cek', lokasi: 'Pesisir Juata' },
    { id: 5, nama: 'Modul Step Down LM2596', kategori: 'Power Supply', jumlah: 1, kondisi: 'Baik', lokasi: 'Pesisir Amal' }
];

console.log("=== DATA SELURUH KOMPONEN LACUBA ===");
console.table(komponenLacuba);

// ==========================================
// PENYELESAIAN LATIHAN 1: Filter berdasarkan lokasi tertentu
// ==========================================
const targetLokasi = 'Pesisir Amal';
const alatDiPesisirAmal = komponenLacuba.filter(item => item.lokasi === targetLokasi);
console.log(`=== LATIHAN 1: Alat di Lokasi (${targetLokasi}) ===`);
console.table(alatDiPesisirAmal);

// ==========================================
// PENYELESAIAN LATIHAN 2: Cari alat berdasarkan ID menggunakan 'find'
// ==========================================
const cariId = 3;
const hasilCariId = cariAlatById(komponenLacuba, cariId);
console.log(`=== LATIHAN 2: Pencarian Alat Berdasarkan ID (${cariId}) ===`);
console.log(hasilCariId);

// ==========================================
// PENYELESAIAN LATIHAN 3: Destructuring & Template Literal untuk Ringkasan
// ==========================================
console.log("=== LATIHAN 3: Ringkasan String Setiap Alat ===");
komponenLacuba.forEach(item => {
    console.log(formatRingkasanAlat(item));
});

// Statistik umum modular
console.log("=== RINGKASAN STATISTIK PROYEK ===");
console.log(ringkasInventaris(komponenLacuba));