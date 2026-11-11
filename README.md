# Chill Movie App – Advanced Frontend Mission 1

Project ini merupakan penyelesaian tugas **Mission 1 Advanced Frontend (ReactJS)** di Bootcamp Full Stack Developer Harisenin.com. Aplikasi web streaming film **Chill** kini telah diintegrasikan dari data statis berbasis Array menjadi aplikasi dinamis menggunakan **REST API (MockAPI.io)**, **Axios**, dan **Custom Hooks**.

## ✨ Fitur Utama yang Diimplementasikan

- **Integrasi Fake API (MockAPI.io):** Menghubungkan katalog film pada section _"Top Rating Film dan Series Hari ini"_ dengan cloud database pada endpoint `/movies`.
- **Operasi CRUD Dinamis (Axios):**
  - **GET (`getMovies`):** Mengambil dan menampilkan daftar film dari server saat halaman dimuat, dilengkapi fitur _auto-seed_ serta _anti-duplicate_ untuk menangani React StrictMode.
  - **ADD / POST (`addMovie`):** Menambahkan data film baru ke server melalui Modal Form interaktif dengan fitur _Live Card Preview_.
  - **UPDATE / PUT (`updateMovie`):** Mengubah informasi film (judul, durasi, rating usia, genre, dan poster) secara permanen di server API.
  - **DELETE (`deleteMovie`):** Menghapus film dari database server dengan dialog konfirmasi.
- **Modular API Service & Interceptor (`src/services/api/movieApi.js`):** Mengelompokkan seluruh fungsi pemanggilan API ke dalam satu modul khusus lengkap dengan _Axios Request & Response Interceptors_.
- **Custom Hooks (`src/hooks/useMovies.js`):** Memisahkan logika bisnis dan state management API (`movies`, `isLoading`, `error`) dari komponen UI (`Home.jsx`).
- **Environment Variables (`.env`):** Menyimpan Base URL API (`VITE_API_BASE_URL`) secara aman agar tidak _hardcoded_ di dalam kode.
- **Responsive Design (Desktop & Mobile):** Mendukung interaksi _pop-up hover card_ pada layar desktop dan panel kontrol terpadu (**Kelola Film**) pada layar mobile.

## 🛠️ Tech Stack

- **Frontend:** React 19, Vite, Tailwind CSS, React Router DOM
- **HTTP Client:** Axios
- **Mock Backend:** MockAPI.io

## 📂 Struktur Folder Utama

- `src/services/api/movieApi.js` — Konfigurasi Axios instance, Interceptor, dan fungsi CRUD API.
- `src/hooks/useMovies.js` — Custom Hook untuk integrasi state dan pemanggilan API.
- `src/pages/Home.jsx` — Halaman utama dengan fitur manajemen katalog film.
- `src/components/` — Komponen UI modular (`MovieSection`, `MovieCard`, `Navbar`, `Footer`, dll.).

## 🔗 Link Project

- **Repository GitHub:** https://github.com/wijangx/chill-advanced-fe1
- **API Endpoint:** https://6af14da611a6aa866e801eb1.mockapi.io/movies
