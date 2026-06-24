# PRD - IntervU AI

## Ringkasan Produk
IntervU AI adalah aplikasi web yang membantu pengguna mempersiapkan wawancara kerja dan membuat CV profesional. Aplikasi ini menyediakan autentikasi, dashboard rekomendasi, pembuat CV interaktif, halaman lowongan pekerjaan, serta ruang untuk fitur wawancara dan profil yang akan dikembangkan.

## Sasaran
- Membantu pengguna membuat CV profesional dengan template preview langsung.
- Menyediakan dashboard yang menunjukkan ringkasan progres dan panduan langkah.
- Memungkinkan pencarian dan pemfilteran lowongan kerja sesuai preferensi pengguna.
- Mengurangi friction saat masuk/login menggunakan autentikasi email dan Google.
- Menyajikan desain modern, responsif, dan mudah digunakan.

## Fitur Utama
1. **Login & Registrasi**
   - Login email/password.
   - Pendaftaran akun baru.
   - Login menggunakan Google (simulasi demo saat ini).
   - Token dan profil disimpan di `localStorage`.

2. **Dashboard**
   - Tampilan ringkas dengan statistik utama: jumlah interview selesai, CV dibuat, skor rata-rata.
   - Carousel panduan langkah pengguna.
   - Daftar aktivitas terakhir.
   - Tautan cepat ke fitur penting: CV, interview, dan lowongan.

3. **CV Builder**
   - Form builder CV multi-langkah.
   - Preview template CV langsung.
   - Pilihan template modern/classic/minimalist/professional/creative.
   - Pengaturan tampilan CV dan opsi bahasa.
   - Penyimpanan draft di `localStorage`.
   - Komponen `CVProvider` untuk state global CV.

4. **Jobs Page**
   - Daftar lowongan kerja dengan data dummy.
   - Pencarian berdasarkan judul pekerjaan atau nama perusahaan.
   - Filter berdasarkan tipe pekerjaan.
   - Kartu pekerjaan dengan informasi lokasi, tipe, gaji, dan tautan melamar.

5. **Navigasi & Routing**
   - Routing dengan `react-router-dom`.
   - Navbar desktop dan BottomNav mobile.
   - Rute utama: `/login`, `/dashboard`, `/cv`, `/jobs`, `/interview`, `/profile`.
   - Rute yang belum tersedia ditampilkan sebagai `Coming Soon`.

## Batasan Saat Ini
- Fitur `Interview` dan `Profile` masih placeholder.
- Autentikasi backend tidak terhubung; saat ini mode demo menggunakan mock data.
- Data pengguna, CV, dan lowongan belum terintegrasi ke backend nyata.
- Infrastruktur backend belum diimplementasikan di frontend.

## Teknologi Rekomendasi
- Frontend: React + Tailwind CSS (sudah berjalan di Vite).
- Backend: Python + FastAPI untuk API cepat, mudah ditest, sudah cocok dengan arsitektur REST.
- Database: bisa menggunakan PostgreSQL atau Supabase Postgres jika ingin hosting terkelola.

## Nilai Bisnis
- Mempercepat kesiapan pelamar kerja dengan CV dan simulasi wawancara.
- Menyediakan alur onboarding pengguna yang diarahkan dari dashboard.
- Mengoptimalkan konversi pengguna dari pendaftaran ke pembuatan CV.
- Memberikan wawasan aktivitas dan progress untuk meningkatkan retensi.

## Metode Pengukuran Keberhasilan
- Keberhasilan 1: Pengguna dapat membuat dan melihat preview CV dalam satu sesi.
- Keberhasilan 2: Pengguna dapat mencari dan memfilter lowongan kerja.
- Keberhasilan 3: Pengguna dapat login dan diarahkan ke dashboard.
- Keberhasilan 4: Antarmuka tetap responsif di desktop dan mobile.

## Skala Prioritas
- Tinggi: Login/registrasi, dashboard, CV Builder, navigasi.
- Sedang: Jobs page, preview template, penyimpanan lokal.
- Rendah: Interview simulasi, profil pengguna, integrasi backend.
