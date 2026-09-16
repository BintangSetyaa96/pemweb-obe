// ==========================================

// 2. Buat array objek komponen/inventaris alat LACUBA & Bubu
const komponenLacuba = [
    { id: 1, nama: 'LED Underwater', kategori: 'Pencahayaan', jumlah: 1, kondisi: 'Baik', lokasi: 'Pesisir Amal' },
    { id: 2, nama: 'Wemos D1 Mini', kategori: 'Mikrokontroler', jumlah: 1, kondisi: 'Baik', lokasi: 'Pesisir Amal' },
    { id: 3, nama: 'RTC DS3231', kategori: 'Timer/Modul', jumlah: 1, kondisi: 'Baik', lokasi: 'Pesisir Amal' },
    { id: 4, nama: 'Baterai 18650', kategori: 'Power Supply', jumlah: 4, kondisi: 'Perlu Cek', lokasi: 'Pesisir Amal' },
    { id: 5, nama: 'Modul Step Down LM2596', kategori: 'Power Supply', jumlah: 1, kondisi: 'Baik', lokasi: 'Pesisir Amal' }
];

// 3. Gunakan filter untuk mengambil komponen dengan kondisi "Baik"
const komponenBaik = komponenLacuba.filter(item => item.kondisi === 'Baik');

// 4. Gunakan map untuk menghasilkan array nama komponen
const namaKomponen = komponenLacuba.map(({ nama }) => nama);

// 5. Gunakan reduce untuk menghitung total keseluruhan jumlah unit komponen
const totalUnitKomponen = komponenLacuba.reduce((total, item) => total + item.jumlah, 0);

// 6. Buat fungsi ringkasInventaris(data) yang mengembalikan object statistik proyek
function ringkasInventaris(data) {
    if (!Array.isArray(data)) {
        throw new TypeError('Data komponen LACUBA harus berupa array!');
    }
    return {
        totalJenisKomponen: data.length,
        totalSeluruhUnit: data.reduce((sum, item) => sum + item.jumlah, 0),
        komponenPerluCek: data.filter(item => item.kondisi !== 'Baik').length
    };
}

// 7. Tampilkan hasil pengolahan data di Console browser
console.log("=== DATA KOMPONEN LACUBA ===");
console.table(komponenLacuba);

console.log("=== KOMPONEN KONDISI BAIK ===");
console.table(komponenBaik);

console.log("Daftar Nama Komponen:", namaKomponen);
console.log("Total Unit Keseluruhan:", totalUnitKomponen);
console.log("Ringkasan Statistik Proyek:", ringkasInventaris(komponenLacuba));