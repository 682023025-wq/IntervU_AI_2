# Task - IntervU AI

## Ringkasan Scope
Aplikasi IntervU AI adalah frontend React/Vite untuk fitur onboarding karir. Fokus utama:
- Autentikasi pengguna
- Dashboard ringkasan aktivitas
- Pembuat CV interaktif
- Halaman lowongan kerja
- Navigasi desktop dan mobile

## Struktur MVC dan Pembagian Tugas

### 1. Model
Model diimplementasikan sebagai state React dan mock data.
- `CVProvider` (`src/features/CV/cvLogic.jsx`)
  - Menyimpan state `cvData`, `currentStep`, `selectedTemplate`, `language`, `paperSize`.
  - Menyediakan action: `setCurrentStep`, `setTemplate`, `setLanguage`, `setPaperSize`, `exportCVData`, `resetCV`, dan updater untuk bagian CV.
- `localStorage`
  - Menyimpan draft CV, pilihan template, bahasa, ukuran kertas.
  - Menyimpan `token` dan `user_profile` untuk autentikasi.
- Data dummy `mockJobs` dan `createMockProfile` untuk simulasi.

### 2. View
View adalah komponen React presentasional.
- `src/features/Auth/LoginPage.jsx`
  - Halaman login / registrasi.
  - Komponen form input dan tombol.
- `src/features/Dashboard/DashboardPage.jsx`
  - Halaman dashboard dengan statistik, carousel, aktivitas.
- `src/features/CV/CVPage.jsx`
  - Halaman CV builder dengan tab `Builder`, `Preview`, `Settings`.
- `src/features/Jobs/JobsPage.jsx`
  - Halaman lowongan dengan search/filter dan kartu pekerjaan.
- `src/components/Navbar.jsx` dan `src/components/BottomNav.jsx`
  - Navigasi utama untuk desktop dan mobile.

### 3. Controller (Logic)
Controller memetakan interaksi pengguna ke state dan navigasi.
- `src/features/Auth/authApi.js`
  - Logika login/email, pendaftaran, login Google demo.
- `src/components/navbarLogic.js`
  - Ambil nama depan user dari `localStorage`.
  - Logout dan redirect.
- `src/features/Dashboard/dashboardLogic.js`
  - Dapatkan data user, ambil nama depan untuk tampilan.
- `src/features/CV/cvLogic.jsx`
  - Reducer untuk semua aksi CV.
- `src/features/CV/CVBuilder.jsx`
  - Logika drag panel, preview, simpan CV, dan langkah form.
- `src/features/Jobs/JobsPage.jsx`
  - Filter dan pencarian lowongan.

## Detail Task per Menu / Modul
### A. Login & Autentikasi
1. `LoginPage.jsx`
   - Perbaiki validasi form.
   - Tampilkan pesan kesalahan yang lebih informatif.
   - Gunakan `Button` dan `Input` dari `src/components`.
2. `authApi.js`
   - Buat mode `DEMO_MODE` agar bisa diganti dengan backend nyata.
   - Simulasikan endpoint `login`, `signup`, `google`.
3. `App.jsx`
   - Pastikan redirect ke `/dashboard` bila sudah login.
   - Rute root (`/`) otomatis menuju `/login` atau `/dashboard`.

### B. Dashboard
1. `DashboardPage.jsx`
   - Tampilkan `Navbar` desktop dan `BottomNav` mobile.
   - Hitung dan tampilkan `stats` dan `recentActivities`.
   - Carousel item navigasi ke CV, interview, jobs.
2. `dashboardLogic.js`
   - Ambil `user_profile` dari localStorage.
   - Parse nama depan dan redirect otomatis bila tidak login.
3. `DashboardPage.css`
   - Pastikan layout responsif.
   - Style card, carousel, aktivitas terbaru.

### C. CV Builder
1. `CVPage.jsx`
   - Komposisi `Navbar`, `CVProvider`, `CVBuilder`, `CVPreview`, `SettingsPanel`.
   - Tab `Builder` / `Preview` / `Settings`.
2. `cvLogic.jsx`
   - Kelola action state CV.
   - Persist draft dengan `localStorage`.
3. `CVBuilder.jsx`
   - Panel form multi-langkah.
   - Preview langsung di kolom samping.
   - FAB drag panel pada mobile.
4. `CVForm.jsx` dan `forms/*.jsx`
   - Form input personal info, skill, pengalaman, pendidikan, proyek, organisasi.
   - Form dinamis untuk tambah / hapus baris.
5. `CVPreview.jsx`
   - Render template berdasarkan `selectedTemplate`.
   - Transformasi data CV menjadi format preview.
6. `templates/*.jsx`
   - Template tampilan CV: `Modern`, `Classic`, `Minimalist`, `Professional`, `Creative`.
   - Konsistensi visual dan kelas CSS untuk setiap template.
7. `CVPage.css`, `CVPreview.css`, `CVBuilder.css`, `CVForm.css`
   - Perbaiki responsive layout untuk form dan preview.
   - Style input, tombol, modal, empty state.

### D. Jobs Page
1. `JobsPage.jsx`
   - Search bar dan filter tipe pekerjaan.
   - Grid lowongan dengan kartu job.
2. `jobsData.js`
   - Tambahkan skema lowongan dummy terstruktur.
3. `JobsPage.css` (jika ada)
   - Atur spacing, grid, state tanpa hasil.

### E. Navigasi & Routing
1. `App.jsx`
   - Definisikan rute login, dashboard, cv, interview, jobs, profile.
   - `ComingSoon` untuk interview/profile.
2. `Navbar.jsx`, `BottomNav.jsx`
   - Navigasi aktif, click handler.
3. `Navbar.css`
   - Hide desktop nav di mobile.
   - Hide bottom nav di desktop.

## Tambahan Perbaikan
- Perbaiki konsistensi `navbarLogic.js` dengan `Navbar.jsx`/`BottomNav.jsx`.
- Validasi route `/jobs` dan `/cv` bila token hilang.
- Tambahkan `README.md` lebih detail untuk setup `Frontend`.
- Jika ada backend: sambungkan `src/lib/axios.js` dengan baseURL API.

## Urutan Pengerjaan Rekomendasi
1. Finalisasi autentikasi dan routing.
2. Selesaikan halaman Dashboard.
3. Lengkapi fitur CV Builder dan preview.
4. Selesaikan halaman Jobs.
5. Buka placeholder Interview / Profile bila ada waktu.
6. Tambahkan integrasi API backend / Supabase.

## Catatan Teknis
- Teknologi: React 19, Vite 8, Tailwind CSS, react-router-dom 7.
- Status saat ini: frontend berjalan dengan mock/demo state.
- Komponen reusable: `Button`, `Input`, `Navbar`, `BottomNav`.
- Logika state utama: `CVProvider` + `useReducer`.
