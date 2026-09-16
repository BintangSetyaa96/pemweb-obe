# Praktikum Pemrograman Web

## Identitas Mata Kuliah
* **Mata Kuliah:** Pemrograman Web Teknik Komputer FT-UBT
* **Nama:** Muhammad Bintang Prasetya
* **NPM:** 2440304023
* **Angkatan:** 2024

## Deskripsi Singkat Proyek
Proyek ini merupakan lembar kerja berbasis *Outcome-Based Education* (OBE) untuk Praktikum Pemrograman Web Modul 3 mengenai **CSS Modern, Responsive Design, Flexbox/Grid, dan Dasar UI/UX**. Proyek ini mengimplementasikan **Sistem Informasi Pemantauan Alat Pemanggil Ikan Berbasis Web** untuk nelayan di Tarakan dengan tema gradasi biru laut yang elegan, responsif di berbagai perangkat, serta aksesibel.

## Catatan Fitur & Desain yang Sudah Selesai (Modul 3)
1. **CSS Modern & Custom Properties (`:root`):** Menggunakan variabel warna tema, *spacing*, dan *border-radius* secara terpusat, termasuk gradasi biru laut (`--brand-gradient`).
2. **Flexbox & CSS Grid:** 
   * **Flexbox** diterapkan pada navigasi (`nav` dengan `flex-wrap: wrap`) agar aman di layar sempit tanpa *horizontal scroll*.
   * **CSS Grid** diterapkan pada kartu fitur (`.cards` dengan `repeat(auto-fit, minmax(16rem, 1fr)`) untuk tata letak otomatis dari 1 kolom ke 3 kolom.
3. **Media Query Responsif:** Menggunakan *breakpoint* berbasis kebutuhan konten (`min-width: 48rem`) untuk mengubah struktur *hero section* menjadi tata letak grid berdampingan pada layar yang lebih besar.
4. **Aksesibilitas Tinggi (`:focus-visible`):** Memastikan seluruh elemen interaktif (link, tombol, input, textarea) memiliki indikator fokus outline yang jelas demi aksesibilitas keyboard.

## Catatan Keputusan Desain (Design Decision)
* **Pemilihan Tema Warna:** Menggunakan gradasi biru (`#1e3a8a` ke `#38bdf8`) untuk mencerminkan identitas kelautan/pesisir Kota Tarakan sekaligus memberikan kesan profesional pada sistem pemantauan IoT.
* **Pendekatan Layout Responsif:** Menggunakan fungsi `auto-fit` dan `minmax()` pada CSS Grid agar halaman beradaptasi secara mulus di berbagai perangkat (Mobile 320px, Tablet 768px, hingga Desktop 1024px+) tanpa memunculkan *breakpoint* yang kaku.

## Cara Menjalankan Proyek Melalui Laragon 5
1. Pastikan aplikasi **Laragon 5** sudah terinstal di komputer Anda.
2. Buka aplikasi Laragon, lalu klik tombol **Start All** untuk menyalakan Apache Web Server.
3. Pastikan folder proyek ini berada di direktori `C:\laragon\www\pemweb-obe`.
4. Buka web browser pilihan Anda, lalu akses URL lokal berikut:
   * `http://localhost/pemweb-obe/`

## AI Usage Log
* **Alat AI yang Digunakan:** Gemini (Google)
* **Tujuan Penggunaan:** Digunakan sebagai panduan teknis langkah-demi-langkah, konsultasi penerapan CSS modern, *Flexbox/Grid*, media query responsif, aksesibilitas `:focus-visible`, serta penyusunan dokumentasi laporan dan README.
* **Bagian yang Dibantu:** Peninjauan kerangka kode CSS, optimalisasi layout responsif, dan penyusunan catatan keputusan desain.