# 📊 Progress IntervU AI

> **Terakhir diperbarui:** 25 Juni 2026  
> **Frontend:** React 19 + Vite 6 + Tailwind CSS 3  
> **Port:** http://localhost:5173

---

## 🟢 Ringkasan Status

| Area | Status | Progress |
|------|--------|----------|
| **Setup Proyek** | ✅ Selesai | 100% |
| **Design System** | ✅ Selesai | 100% |
| **Autentikasi** | ✅ Selesai (Mock) | 100% |
| **Dashboard** | ❌ Placeholder | 5% |
| **CV Builder** | ❌ Belum Dimulai | 0% |
| **Halaman Lowongan** | ❌ Belum Dimulai | 0% |
| **Interview** | ❌ Belum Dimulai | 0% |
| **Profil** | ❌ Belum Dimulai | 0% |
| **Navigasi** | ❌ Belum Dibuat | 0% |
| **Backend** | ❌ Belum Dimulai | 0% |
| **Total Keseluruhan** | 🟡 ~15% | |

---

## ✅ Sudah Selesai

### 1. Setup & Konfigurasi Proyek
- [x] **Vite + React** — Berjalan di port 5173
- [x] **Tailwind CSS** — Terkonfigurasi dengan palet warna kustom
- [x] **react-router-dom** — Routing sudah siap (7 rute terdefinisi)
- [x] **Axios** — Terinstal, siap untuk integrasi backend
- [x] **index.html** — Entry point dengan font Inter dari Google Fonts
- [x] **index.css** — Tailwind directives + utility glass-effect

### 2. Design System (StyleGuide)
- [x] **Palet Warna** — Biru dominan, abu-abu, putih (sesuai StyleGuide)
- [x] **Tipografi** — Font Inter, ukuran responsif dengan `clamp()`
- [x] **Spacing & Layout** — Breakpoint mobile/tablet/desktop
- [x] **Button Component** — 3 varian (primary/secondary/ghost), 3 ukuran
- [x] **Input Component** — Text input + PasswordInput (show/hide toggle)
- [x] **Icons (SVG)** — 10 ikon SVG kustom (Logo, Mail, Lock, Eye, dll)
- [x] **Warna Status** — Sukses, info, peringatan, error

### 3. Autentikasi (Mock/Demo)
- [x] **LoginPage** — Form email/username + password, validasi, error display
- [x] **RegisterPage** — Form registrasi (username, name, email, password)
- [x] **Login Google (Demo)** — Tombol login Google simulasi
- [x] **authApi.js** — Fungsi login, register, loginWithGoogle, logout
- [x] **localStorage** — Penyimpanan token dan profil user
- [x] **ProtectedRoute** — Redirect ke `/login` jika belum login
- [x] **Demo Credentials** — Tombol isi otomatis kredensial `user@example.com`

---

## 🔄 Perlu Diperbaiki / Disempurnakan

### ⚠️ Minor Issues (Mudah Diperbaiki)

| Issue | Lokasi | Deskripsi | Prioritas |
|-------|--------|-----------|-----------|
| **Link `<a>` bukan `<Link>`** | `LoginPage.jsx`, `RegisterPage.jsx` | Pakai `<a href="...">` menyebabkan reload halaman, harusnya `<Link to="...">` dari react-router | 🟡 Sedang |
| **Duplikasi ikon SVG** | `Input.jsx` | `LockIcon`, `EyeIcon`, `EyeOffIcon` didefinisikan ulang di Input.jsx padahal sudah ada di `Icons.jsx` | 🟢 Rendah |
| **PasswordInput tidak dipakai** | `Icons.jsx` | Ekspor `PasswordInput` dari `Input.jsx` tidak digunakan di RegisterPage | 🟢 Rendah |
| **CSS LoginPage minim** | `RegisterPage.css` | Hanya komentar, tidak ada aturan CSS sendiri | 🟢 Rendah |
| **Hero section tidak muncul** | `LoginPage.css` | Panel kiri (hero) di-`display:none` di semua ukuran layar | ✅ Selesai (Fixed) |
| **Inline styles vs Tailwind** | `App.jsx` | `DashboardPlaceholder` pakai inline styles, tidak konsisten | 🟢 Rendah |
| **Emoji bukan SVG** | `App.jsx` | Pakai `👋` emoji, melanggar StyleGuide yang mewajibkan SVG | 🟢 Rendah |
| **ESLint tidak terinstal** | `package.json` | Script `lint` ada tapi dependensi eslint tidak ada | 🟢 Rendah |
| **Redirect pakai window.location** | `App.jsx` | `handleLogout` pakai `window.location.href` bukan `useNavigate` | 🟡 Sedang |
| **Password input overlap** | `LoginPage.jsx`, `LoginPage.css` | Ikon password tumpang tindih dengan teks input | ✅ Selesai (Fixed) |
| **Mobile sizing** | `LoginPage.css` | Ukuran mobile terlalu besar, perlu lebih compact | ✅ Selesai (Fixed) |
| **2-column layout** | `LoginPage.jsx`, `LoginPage.css` | Tidak ada layout 2 kolom untuk desktop (kiri: penjelasan, kanan: form) | ✅ Selesai (Fixed) |
| **Google login button** | `LoginPage.jsx`, `LoginPage.css` | Tombol Google login tidak menarik dan tidak ada logo | ✅ Selesai (Fixed) |
| **Demo login** | `LoginPage.jsx`, `LoginPage.css` | Demo login dalam bentuk tombol besar, harusnya teks link | ✅ Selesai (Fixed) |
| **Footer links** | `LoginPage.jsx`, `LoginPage.css` | Tata letak "Lupa password" dan "Bantuan" tidak sesuai | ✅ Selesai (Fixed) |

---

## ❌ Belum Dibuat / Perlu Dikerjakan

### 📌 Prioritas Tinggi (High)

| Fitur | File yang Dibutuhkan | Status |
|-------|---------------------|--------|
| **Dashboard Page** | `features/Dashboard/DashboardPage.jsx`, `.css`, `dashboardLogic.js` | ❌ Belum ada |
| **CV Builder** | `features/CV/CVPage.jsx`, `CVBuilder.jsx`, `CVPreview.jsx`, `CVForm.jsx`, `cvLogic.jsx`, `forms/*.jsx`, `templates/*.jsx`, CSS files | ❌ Belum ada |
| **Halaman Lowongan** | `features/Jobs/JobsPage.jsx`, `jobsData.js`, `.css` | ❌ Belum ada |
| **Navigasi Desktop** | `components/Navbar.jsx`, `navbarLogic.js`, `.css` | ❌ Belum ada |
| **Navigasi Mobile** | `components/BottomNav.jsx`, `.css` | ❌ Belum ada |
| **Route `/cv`** | Harus ditambahkan di `App.jsx` | ❌ Belum ada |
| **Route `/jobs`** | Harus ditambahkan di `App.jsx` | ❌ Belum ada |

### 📌 Prioritas Sedang (Medium)

| Fitur | File yang Dibutuhkan | Status |
|-------|---------------------|--------|
| **Halaman Interview** | `features/Interview/` (Coming Soon dulu) | ❌ Belum ada |
| **Halaman Profil** | `features/Profile/` (Coming Soon dulu) | ❌ Belum ada |
| **Route `/interview`** | Placeholder component | ❌ Belum ada |
| **Route `/profile`** | Placeholder component | ❌ Belum ada |
| **ComingSoon Component** | Komponen reusable untuk halaman yang belum tersedia | ❌ Belum ada |

### 📌 Prioritas Rendah (Low)

| Fitur | File yang Dibutuhkan | Status |
|-------|---------------------|--------|
| **Axios Config** | `lib/axios.js` — base URL untuk backend | ❌ Belum ada |
| **Integrasi Backend** | Ganti `DEMO_MODE = true` jadi `false`, sambungkan ke API | ❌ Belum ada |
| **Responsive Breakpoints Desktop** | `LoginPage.css` — tambahkan breakpoint 768px+ dan 1024px+ | ❌ Belum ada |
| **Dokumentasi README** | Perbarui `Frontend/README.md` dengan instruksi lengkap | ❌ Belum ada |

---

## 🗺️ Rute yang Terdefinisi

| Path | Status | Auth? | Komponen |
|------|--------|-------|----------|
| `/` | ✅ Aktif | Redirect | → `/dashboard` atau `/login` |
| `/login` | ✅ Aktif | ❌ Publik | `LoginPage` |
| `/register` | ✅ Aktif | ❌ Publik | `RegisterPage` |
| `/dashboard` | 🟡 Placeholder | ✅ Perlu Login | `DashboardPlaceholder` (inline) |
| `/cv` | ❌ Belum Ada | 🔜 | — |
| `/jobs` | ❌ Belum Ada | 🔜 | — |
| `/interview` | ❌ Belum Ada | 🔜 | — |
| `/profile` | ❌ Belum Ada | 🔜 | — |
| `*` (404) | ✅ Redirect | — | → `/dashboard` atau `/login` |

---

## 📦 Struktur File Lengkap

```
IntervU_AI_2/
├── PRD.md                      # Dokumen produk
├── StyleGuide.md               # Panduan desain
├── Task.md                     # Daftar task
├── progress.md                 # <-- INI (file baru)
└── Frontend/
    ├── index.html              ✅ Siap
    ├── package.json            ✅ Siap (dependencies terinstall)
    ├── vite.config.js          ✅ Siap
    ├── tailwind.config.js      ✅ Siap
    ├── postcss.config.js       ✅ Siap
    ├── README.md               ⚠️ Perlu diperbarui
    └── src/
        ├── main.jsx            ✅ Entry point
        ├── App.jsx             ⚠️ Placeholder dashboard, rute tidak lengkap
        ├── App.css             ✅ Loader & print styles
        ├── index.css           ✅ Tailwind directives
        ├── components/
        │   ├── Button.jsx      ✅ Selesai
        │   ├── Icons.jsx       ✅ Selesai (10 ikon SVG)
        │   └── Input.jsx       ✅ Selesai (Input + PasswordInput)
        ├── features/
        │   └── Auth/
        │       ├── LoginPage.jsx   ✅ Selesai
        │       ├── LoginPage.css   ⚠️ Kurang breakpoint desktop
        │       ├── RegisterPage.jsx ✅ Selesai
        │       └── RegisterPage.css ⚠️ Hanya komentar
        └── lib/
            └── authApi.js      ✅ Selesai (mock)
```

---

## 🎯 Rekomendasi Urutan Pengerjaan Selanjutnya

1. **Buat komponen ComingSoon** — Untuk halaman `/interview`, `/profile`
2. **Buat Navbar & BottomNav** — Navigasi dasar
3. **Buat Dashboard** — Statistik, carousel, aktivitas
4. **Tambahkan route `/cv`, `/jobs`, `/interview`, `/profile`** di App.jsx
5. **Buat CV Builder** — Fitur utama aplikasi
6. **Buat Halaman Lowongan** — Search + filter + grid
7. **Perbaiki minor issues** — `<a>` jadi `<Link>`, duplikasi ikon, dll.
8. **Integrasi Backend** — FastAPI + Supabase/PostgreSQL