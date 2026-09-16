// js/app.js
import { ringkasInventaris } from './utils.js';

// 2. Buat array objek komponen/inventaris alat LACUBA & Bubu
const komponenLacuba = [
    { id: 1, nama: 'LED Underwater', kategori: 'Pencahayaan', jumlah: 1, kondisi: 'Baik', lokasi: 'Pesisir Amal' },
    { id: 2, nama: 'Wemos D1 Mini', kategori: 'Mikrokontroler', jumlah: 1, kondisi: 'Baik', lokasi: 'Pesisir Amal' },
    { id: 3, nama: 'RTC DS3231', kategori: 'Timer/Modul', jumlah: 1, kondisi: 'Baik', lokasi: 'Perairan Amal' },
    { id: 4, nama: 'Baterai 18650', kategori: 'Power Supply', jumlah: 4, kondisi: 'Perlu Cek', lokasi: 'Pesisir Juata' },
    { id: 5, nama: 'Modul Step Down LM2596', kategori: 'Power Supply', jumlah: 1, kondisi: 'Baik', lokasi: 'Perairan Amal' }
];

// 3. Gunakan filter untuk mengambil komponen dengan kondisi "Baik"
const komponenBaik = komponenLacuba.filter(item => item.kondisi === 'Baik');

// 4. Gunakan map untuk menghasilkan array nama komponen
const namaKomponen = komponenLacuba.map(({ nama }) => nama);

// 5. Gunakan reduce untuk menghitung total keseluruhan jumlah unit komponen
const totalUnitKomponen = komponenLacuba.reduce((total, item) => total + item.jumlah, 0);

// Tampilkan hasil di console browser
console.log("=== DATA KOMPONEN LACUBA (MODULAR) ===");
console.table(komponenLacuba);
console.log("=== KOMPONEN KONDISI BAIK ===");
console.table(komponenBaik);
console.log("Daftar Nama Komponen:", namaKomponen);
console.log("Total Unit Keseluruhan:", totalUnitKomponen);

// Memanggil fungsi ringkasInventaris yang di-import dari utils.js
console.log("Ringkasan Statistik Proyek:", ringkasInventaris(komponenLacuba));