// js/utils.js
export function ringkasInventaris(data) {
    if (!Array.isArray(data)) {
        throw new TypeError('Data komponen LACUBA harus berupa array!');
    }
    return {
        totalJenisKomponen: data.length,
        totalSeluruhUnit: data.reduce((sum, item) => sum + item.jumlah, 0),
        komponenPerluCek: data.filter(item => item.kondisi !== 'Baik').length
    };
}