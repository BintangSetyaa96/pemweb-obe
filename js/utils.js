// js/utils.js

// Fungsi ringkasan inventaris lama
export function ringkasInventaris(data) {
    if (!Array.isArray(data)) {
        throw new TypeError('Data harus berupa array');
    }
    return {
        totalJenisKomponen: data.length,
        totalSeluruhUnit: data.reduce((sum, item) => sum + item.jumlah, 0),
        komponenPerluCek: data.filter(item => item.kondisi !== 'Baik').length
    };
}

// LATIHAN 2: Fungsi mencari alat berdasarkan id menggunakan 'find'
export function cariAlatById(data, targetId) {
    return data.find(item => item.id === targetId);
}

// LATIHAN 3: Fungsi menggunakan destructuring & template literal untuk ringkasan alat
export function formatRingkasanAlat(item) {
    // Destructuring properti dari objek item
    const { nama, kategori, jumlah, kondisi, lokasi } = item;
    // Menggunakan template literal
    return `Alat [${nama}] masuk kategori ${kategori}, berjumlah ${jumlah} unit, kondisi saat ini "${kondisi}", berada di lokasi ${lokasi}.`;
}