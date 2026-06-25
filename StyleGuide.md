# StyleGuide - IntervU AI

## Breakpoint Utama
| Ukuran Perangkat         | Min Width | Max Width | Base Spacing |
|-------------------------|-----------|-----------|--------------|
| Mobile Small            | 320px     | 374px     | 0.5rem       |
| Mobile Large            | 375px     | 479px     | 0.625rem     |
| Mobile XL               | 480px     | 599px     | 0.75rem      |
| Tablet Portrait         | 600px     | 767px     | 0.875rem     |
| Tablet Landscape        | 768px     | 1023px    | 1rem         |
| Desktop                 | 1024px+   | -         | 1.125rem     |

## Identitas Visual
- Palet warna utama: **biru dominan**
  - Biru gelap: `#0F4C75` (primary)
  - Biru sedang: `#1B5F8C` (hover)
  - Biru muda: `#E0F2FE` (background)
  - Biru terang: `#60A5FA` (focus)
  - Abu-abu gelap: `#0F172A` (text primary)
  - Abu-abu medium: `#475569` (text secondary)
- Nuansa modern, profesional, dengan aksen gradien subtle dan transparansi kaca (glass effect)
- Tipografi bersih: `Inter`, `Segoe UI`, atau sistem sans-serif modern

## Prinsip Desain Utama
1. **Kesederhanaan**: Fokus pada tujuan utama pengguna, interface bersih dan navigasi intuitif
2. **Konsistensi**: Gunakan palet warna, tipografi, ikon dan gaya visual yang seragam
3. **Kenyamanan Visual**: Gunakan kontras warna yang cukup (minimal 4.5:1), hierarki visual yang jelas
4. **Aksesibilitas**: Desain untuk semua pengguna, gunakan warna ramah buta warna
5. **Efisiensi**: Minimalkan jumlah langkah, gunakan smart defaults dan optimalkan performa
6. **Umpan Balik**: Berikan indikasi visual saat interaksi dan status proses
7. **Fleksibilitas**: Desain responsif dan gunakan adaptive interfaces

## Tipografi
- Judul besar: bold `1.75rem` - `2.375rem`, warna `#0F172A`
- Sub-judul: semibold `1.125rem` - `2rem`, warna `#0F172A`
- Body text: normal `1rem`, warna `#475569`
- Button: semibold `0.85rem` - `1rem`, warna putih atau biru
- Font-family: `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`

## Spacing dan Layout
- Layout responsif dengan `max-width: 1366px` di desktop
- Jarak antar blok: `1rem` (mobile), `1.5rem` (tablet), `2rem` (desktop)
- Padding internal kartu: `0.75rem` (mobile), `1rem` (tablet), `1.5rem` (desktop)
- Border radius: `8px` (tombol/input), `12px` (kartu), `16px` (panel utama)

## Komponen UI Utama
- **Navbar**: Desktop (putih, border bottom `#E2E8F0`), Mobile (BottomNav fixed)
- **Tombol**: Primary (background `#0F4C75`, teks putih), Sekunder (background `#F8FAFC`)
- **Kartu**: Background putih `#FFFFFF`, border `1px solid #E2E8F0`, corner radius `12px`

## Warna Status
- Sukses: `#16A34A` (text), `#DCFCE7` (background)
- Informasi: `#0F4C75` (text), `#E0F2FE` (background)
- Peringatan: `#F59E0B` (text), `#FFFBEB` (background)
- Error: `#EF4444` (text), `#FEE2E2` (background)

## Detail UX
- Animasi: transisi `0.2s - 0.3s ease-in-out`
- Focus state: ring biru `#60A5FA` width `2px` pada input dan button
- Ikon: gunakan SVG dengan stroke width `2`, warna `#0F4C75` aktif

## Ukuran Ideal Elemen UI untuk Berbagai Perangkat

### Ukuran Tombol (Buttons)
- **Mobile Small (320px - 374px)**:
  - Primary: Min-height 48px, font-size 16px
  - Secondary: Min-height 44px, font-size 15px
- **Mobile Large (375px - 479px)**:
  - Primary: Min-height 50px, font-size 16px
  - Secondary: Min-height 46px, font-size 15px
- **Mobile XL (480px - 599px)**:
  - Primary: Min-height 52px, font-size 17px
  - Secondary: Min-height 48px, font-size 16px
- **Tablet Portrait (600px - 767px)**:
  - Primary: Min-height 54px, font-size 17px
  - Secondary: Min-height 50px, font-size 16px
- **Desktop (1024px+)**:
  - Primary: Min-height 58px, font-size 18px
  - Secondary: Min-height 54px, font-size 17px

### Ukuran Teks (Typography)
- **Mobile Small (320px - 374px)**:
  - Heading 1: 28px (1.75rem)
  - Body Text: 16px (1rem)
- **Mobile Large (375px - 479px)**:
  - Heading 1: 30px (1.875rem)
  - Body Text: 16px (1rem)
- **Mobile XL (480px - 599px)**:
  - Heading 1: 32px (2rem)
  - Body Text: 17px (1.0625rem)
- **Tablet Portrait (600px - 767px)**:
  - Heading 1: 34px (2.125rem)
  - Body Text: 17px (1.0625rem)
- **Desktop (1024px+)**:
  - Heading 1: 38px (2.375rem)
  - Body Text: 18px (1.125rem)

### Spacing & Padding
- **Mobile Small (320px - 374px)**:
  - Base spacing: 8px (0.5rem)
  - Container padding: 16px
- **Mobile Large (375px - 479px)**:
  - Base spacing: 10px (0.625rem)
  - Container padding: 18px
- **Mobile XL (480px - 599px)**:
  - Base spacing: 12px (0.75rem)
  - Container padding: 20px
- **Tablet Portrait (600px - 767px)**:
  - Base spacing: 14px (0.875rem)
  - Container padding: 22px
- **Desktop (1024px+)**:
  - Base spacing: 18px (1.125rem)
  - Container padding: 28px

## Praktik Terbaik UI/UX Profesional

### 1. Hierarki Visual
- Gunakan ukuran, warna, dan kontras untuk menunjukkan kepentingan
- Gunakan white space untuk memisahkan bagian
- Gunakan alignment untuk menunjukkan hubungan antar elemen
- Gunakan grouping untuk elemen yang terkait

### 2. Navigasi Intuitif
- Gunakan breadcrumb untuk navigasi bertingkat
- Sediakan tombol back yang jelas
- Gunakan sticky navigation untuk akses cepat
- Gunakan search functionality yang efektif
- Gunakan sitemap untuk aplikasi kompleks

### 3. Form Design
- Gunakan label yang jelas dan deskriptif
- Gunakan placeholder text secara bijak
- Validasi secara real-time
- Gunakan inline error messages
- Gunakan progress indicator untuk form panjang

### 4. Error Prevention & Recovery
- Gunakan confirmation dialogs untuk aksi destruktif
- Sediakan undo functionality
- Gunakan safe defaults
- Gunakan constraints untuk mencegah input yang salah
- Sediakan error messages yang membantu

### 5. Microinteractions
- Gunakan hover states untuk feedback
- Gunakan loading animations untuk feedback
- Gunakan success animations untuk konfirmasi
- Gunakan sound effects secara bijak
- Gunakan haptic feedback untuk mobile

### 6. Visibility of System Status
- Selalu berikan feedback tentang apa yang sedang terjadi
- Gunakan progress indicators untuk proses yang lama
- Tampilkan loading states secara jelas
- Gunakan status bar untuk informasi kontekstual

### 7. Match Between System and the Real World
- Gunakan bahasa yang familiar bagi pengguna
- Ikuti konvensi dunia nyata
- Gunakan ikon yang familiar
- Gunakan analogi yang mudah dipahami

### 8. User Control and Freedom
- Sediakan "emergency exits" dari situasi yang tidak diinginkan
- Gunakan undo dan redo
- Gunakan cancel buttons yang jelas
- Gunakan back buttons yang mudah diakses

### 9. Error Prevention
- Eliminasi kondisi error sejak awal
- Gunakan form validation yang efektif
- Gunakan constraints untuk mencegah kesalahan
- Gunakan confirmation untuk aksi penting

### 10. Recognition Rather Than Recall
- Buat objek, tindakan, dan opsi tetap terlihat
- Gunakan icons dan labels yang jelas
- Gunakan history dan bookmarks
- Gunakan defaults yang smart

### 11. Flexibility and Efficiency of Use
- Sediakan accelerators untuk pengguna yang sering
- Gunakan shortcuts yang bisa dipelajari
- Gunakan personalization options
- Gunakan adaptive interfaces

### 12. Aesthetic and Minimalist Design
- Hindari informasi yang tidak relevan
- Gunakan white space secara efektif
- Gunakan visual hierarchy yang jelas
- Gunakan desain yang seimbang

### 13. Help Users Recognize, Diagnose, and Recover From Errors
- Gunakan bahasa yang sederhana
- Identifikasi masalah secara spesifik
- Sarankan solusi untuk memperbaiki masalah
- Gunakan error codes jika diperlukan

### 14. Help and Documentation
- Gunakan instruksi yang jelas dan ringkas
- Gunakan tooltips untuk bantuan kontekstual
- Gunakan help system yang mudah dicari
- Gunakan FAQ dan tutorial jika diperlukan
- **Navbar**: Horizontal navigation dengan logo dan menu items, tidak menggunakan burger menu.
- **Layout**: Bisa menggunakan 2 kolom untuk konten utama, atau sidebar + content area.
- **BottomNav**: Hilangkan di landscape, tetap tampilkan di portrait jika diperlukan.
- **Typography**: Judul `1.5rem`, body `1rem`, bisa sedikit lebih besar dari mobile.
- **Kartu**: Bisa menampilkan 2 kartu per baris di landscape.
- **Form Input**: Lebih fleksibel, bisa menyesuaikan lebar kolom.
- **Tombol**: Bisa menyesuaikan dengan layout, tidak harus full width.

#### Desktop (1024px+)
- **Navbar**: Menu horizontal penuh dengan logo, navigasi utama, dan action items.
- **Sidebar**: Optional sidebar untuk navigasi tambahan atau info pendukung.
- **Layout**: Multi-kolom (2-3 kolom umum), dengan grid system yang fleksibel.
- **Typography**: Ukuran lebih besar, bisa menggunakan heading hingga `2rem`.
- **Kartu**: Fleksibel jumlah per baris tergantung lebar layar (2-4 kartu per baris).
- **Form Input**: Lebih fleksibel dalam layout, bisa side-by-side.
- **Tombol**: Variasi ukuran sesuai konteks, tidak selalu full width.

### Orientasi Perangkat (Portrait vs Landscape)

#### Umum untuk Semua Ukuran
- **Viewport Meta Tag**: Selalu sertakan `<meta name="viewport" content="width=device-width, initial-scale=1.0">` untuk kontrol orientasi.
- **Touch Targets**: Minimum 44px x 44px untuk elemen interaktif di semua orientasi.
- **Gesture Support**: Swipe untuk navigasi antar halaman/konten, scroll vertikal sebagai default.
- **Dynamic Content**: Sesuaikan tampilan konten berdasarkan orientasi (misalnya video player fullscreen di landscape).

#### Mobile Portrait ke Landscape
- **Navbar**: Dari bottom navigation (portrait) ke top navigation (landscape) atau kombinasi keduanya.
- **Konten**: Dari single column ke multi column (biasanya 2 kolom di landscape).
- **Input Forms**: Dari full-width ke side-by-side inputs di landscape.
- **Media**: Gambar/video bisa menyesuaikan lebar yang lebih besar di landscape.
- **Action Buttons**: Bisa diposisikan di sisi kanan atau kiri di landscape untuk aksesibilitas satu tangan.

#### Tablet Portrait ke Landscape
- **Sidebar**: Aktifkan sidebar di landscape untuk navigasi tambahan.
- **Grid Layout**: Dari 1-2 kolom (portrait) ke 2-3 kolom (landscape).
- **Detail Views**: Gunakan space ekstra di landscape untuk menampilkan detail tambahan tanpa navigasi.
- **Split Views**: Manfaatkan ruang horizontal untuk menampilkan dua panel sekaligus (misalnya daftar dan detail).

### Prinsip-Prinsip UI/UX untuk Berbagai Ukuran Layar

#### 1. Mobile-First Approach
- Mulai desain dari versi mobile terlebih dahulu, lalu skalakan ke ukuran yang lebih besar.
- Pastikan fungsionalitas inti tersedia di semua ukuran layar.
- Prioritaskan konten dan fitur yang paling penting untuk versi mobile.

#### 2. Consistent Experience
- Pertahankan identitas visual dan branding di semua ukuran layar.
- Gunakan pola navigasi yang konsisten meskipun bentuknya berbeda.
- Jaga hierarki informasi yang sama di semua ukuran layar.

#### 3. Touch-Friendly Design
- Elemen interaktif harus cukup besar untuk disentuh (minimal 44px x 44px).
- Jarak antar elemen interaktif harus cukup untuk mencegah kesalahan sentuh.
- Hindari elemen yang terlalu dekat dengan tepi layar untuk mencegah sentuhan tidak sengaja.

#### 4. Performance Optimization
- Muat hanya konten yang diperlukan untuk ukuran layar tertentu.
- Optimalkan gambar dan media untuk berbagai ukuran layar.
- Gunakan lazy loading untuk konten yang tidak terlihat secara langsung.

#### 5. Accessibility Across Devices
- Pastikan kontras warna memenuhi standar WCAG di semua ukuran layar.
- Gunakan ukuran teks yang cukup besar untuk dibaca di layar kecil.
- Sediakan dukungan keyboard untuk perangkat dengan input eksternal di layar besar.

### Responsive Typography
- Gunakan unit `rem` atau `em` untuk ukuran teks agar bisa diskalakan secara proporsional.
- Gunakan teknik fluid typography dengan `clamp()` untuk ukuran teks yang responsif:
  ```css
  .heading {
    font-size: clamp(1.25rem, 4vw, 2rem);
  }
  ```
- Jaga rasio line-height yang konsisten untuk keterbacaan di semua ukuran layar (1.4-1.6 untuk body text).

### Adaptive Images & Media
- Gunakan atribut `srcset` dan `sizes` untuk gambar responsif:
  ```html
  <img src="small.jpg" 
       srcset="small.jpg 480w, medium.jpg 800w, large.jpg 1200w"
       sizes="(max-width: 480px) 100vw, (max-width: 800px) 50vw, 33vw"
       alt="Deskripsi gambar">
  ```
- Gunakan teknik art direction untuk menyajikan gambar yang berbeda di ukuran layar yang berbeda.
- Optimalkan format gambar (WebP, AVIF) untuk performa yang lebih baik di semua perangkat.

### Testing Across Devices
- Uji aplikasi di berbagai ukuran layar nyata, bukan hanya melalui emulator browser.
- Gunakan device toolbar di browser developer tools untuk simulasi cepat.
- Lakukan uji aksesibilitas di berbagai ukuran layar dan orientasi.
- Perhatikan waktu muat dan performa di perangkat dengan spesifikasi rendah.

## Konsep-Konsep UI/UX Profesional

### Prinsip-Prinsip Dasar UI/UX

#### 1. Kesederhanaan (Simplicity)
- Fokus pada tujuan utama pengguna
- Hindari elemen yang tidak perlu
- Gunakan white space secara efektif
- Interface yang bersih dan tidak berantakan
- Navigasi yang intuitif dan mudah dipahami

#### 2. Konsistensi (Consistency)
- Gunakan palet warna yang konsisten di semua ukuran layar
- Terapkan tipografi yang seragam sesuai tabel ukuran teks
- Gunakan ikon dan gaya visual yang seragam
- Pola interaksi yang konsisten di seluruh aplikasi
- Bahasa dan istilah yang konsisten

#### 3. Kenyamanan Visual (Visual Comfort)
- Gunakan kontras warna yang cukup (minimal 4.5:1 untuk teks normal)
- Jaga hierarki visual yang jelas
- Gunakan animasi dan transisi yang halus
- Jaga keseimbangan antara elemen visual
- Gunakan grid system untuk alignment yang konsisten

#### 4. Aksesibilitas (Accessibility)
- Desain untuk semua pengguna, termasuk yang memiliki disabilitas
- Gunakan warna yang ramah buta warna
- Sediakan alternatif teks untuk gambar
- Gunakan landmark HTML yang tepat
- Pastikan aplikasi dapat dinavigasi dengan keyboard

#### 5. Efisiensi (Efficiency)
- Minimalkan jumlah langkah untuk menyelesaikan tugas
- Gunakan smart defaults dan auto-complete
- Sediakan shortcut untuk penggunaan yang sering
- Gunakan loading indicator untuk feedback
- Optimalkan waktu muat dan performa

#### 6. Umpan Balik (Feedback)
- Berikan indikasi visual saat interaksi
- Gunakan micro-interactions untuk memberikan umpan balik
- Tampilkan status proses (loading, success, error)
- Gunakan notifikasi yang tidak mengganggu
- Berikan konfirmasi untuk aksi penting

#### 7. Fleksibilitas (Flexibility)
- Desain responsif untuk berbagai ukuran layar
- Sediakan opsi personalisasi
- Gunakan progressive disclosure untuk informasi kompleks
- Sediakan multiple pathways untuk menyelesaikan tugas
- Gunakan adaptive interfaces untuk konteks yang berbeda

### Praktik Terbaik UI/UX Profesional

#### 1. Hierarki Visual
- Gunakan ukuran, warna, dan kontras untuk menunjukkan kepentingan
- Gunakan white space untuk memisahkan bagian
- Gunakan alignment untuk menunjukkan hubungan antar elemen
- Gunakan grouping untuk elemen yang terkait

#### 2. Navigasi Intuitif
- Gunakan breadcrumb untuk navigasi bertingkat
- Sediakan tombol back yang jelas
- Gunakan sticky navigation untuk akses cepat
- Gunakan search functionality yang efektif
- Gunakan sitemap untuk aplikasi kompleks

#### 3. Form Design
- Gunakan label yang jelas dan deskriptif
- Gunakan placeholder text secara bijak
- Validasi secara real-time
- Gunakan inline error messages
- Gunakan progress indicator untuk form panjang

#### 4. Error Prevention & Recovery
- Gunakan confirmation dialogs untuk aksi destruktif
- Sediakan undo functionality
- Gunakan safe defaults
- Gunakan constraints untuk mencegah input yang salah
- Sediakan error messages yang membantu

#### 5. Microinteractions
- Gunakan hover states untuk feedback
- Gunakan loading animations untuk feedback
- Gunakan success animations untuk konfirmasi
- Gunakan sound effects secara bijak
- Gunakan haptic feedback untuk mobile

### Prinsip-Prinsip Nielsen Norman Group (Diintegrasikan ke dalam praktik terbaik)

#### 1. Visibility of System Status
- Selalu berikan feedback tentang apa yang sedang terjadi
- Gunakan progress indicators untuk proses yang lama
- Tampilkan loading states secara jelas
- Gunakan status bar untuk informasi kontekstual

#### 2. Match Between System and the Real World
- Gunakan bahasa yang familiar bagi pengguna
- Ikuti konvensi dunia nyata
- Gunakan ikon yang familiar
- Gunakan analogi yang mudah dipahami

#### 3. User Control and Freedom
- Sediakan "emergency exits" dari situasi yang tidak diinginkan
- Gunakan undo dan redo
- Gunakan cancel buttons yang jelas
- Gunakan back buttons yang mudah diakses

#### 4. Consistency and Standards
- Ikuti platform conventions
- Gunakan istilah yang konsisten
- Gunakan pola interaksi yang konsisten
- Gunakan visual design yang konsisten

#### 5. Error Prevention
- Eliminasi kondisi error sejak awal
- Gunakan form validation yang efektif
- Gunakan constraints untuk mencegah kesalahan
- Gunakan confirmation untuk aksi penting

#### 6. Recognition Rather Than Recall
- Buat objek, tindakan, dan opsi tetap terlihat
- Gunakan icons dan labels yang jelas
- Gunakan history dan bookmarks
- Gunakan defaults yang smart

#### 7. Flexibility and Efficiency of Use
- Sediakan accelerators untuk pengguna yang sering
- Gunakan shortcuts yang bisa dipelajari
- Gunakan personalization options
- Gunakan adaptive interfaces

#### 8. Aesthetic and Minimalist Design
- Hindari informasi yang tidak relevan
- Gunakan white space secara efektif
- Gunakan visual hierarchy yang jelas
- Gunakan desain yang seimbang

#### 9. Help Users Recognize, Diagnose, and Recover From Errors
- Gunakan bahasa yang sederhana
- Identifikasi masalah secara spesifik
- Sarankan solusi untuk memperbaiki masalah
- Gunakan error codes jika diperlukan

#### 10. Help and Documentation
- Gunakan instruksi yang jelas dan ringkas
- Gunakan tooltips untuk bantuan kontekstual
- Gunakan help system yang mudah dicari
- Gunakan FAQ dan tutorial jika diperlukan

## Ukuran Ideal Elemen UI untuk Berbagai Perangkat

### Ukuran Tombol (Buttons)
- **Mobile Small (320px - 374px)**:
  - Primary: Min-height 48px, padding 14px 20px, font-size 16px
  - Secondary: Min-height 44px, padding 12px 16px, font-size 15px
  - Icon-only: Min-size 48px x 48px
- **Mobile Large (375px - 479px)**:
  - Primary: Min-height 50px, padding 15px 22px, font-size 16px
  - Secondary: Min-height 46px, padding 13px 18px, font-size 15px
  - Icon-only: Min-size 50px x 50px
- **Mobile XL (480px - 599px)**:
  - Primary: Min-height 52px, padding 16px 24px, font-size 17px
  - Secondary: Min-height 48px, padding 14px 20px, font-size 16px
  - Icon-only: Min-size 52px x 52px
- **Tablet Portrait (600px - 767px)**:
  - Primary: Min-height 54px, padding 17px 26px, font-size 17px
  - Secondary: Min-height 50px, padding 15px 22px, font-size 16px
  - Icon-only: Min-size 54px x 54px
- **Tablet Landscape (768px - 1023px)**:
  - Primary: Min-height 56px, padding 18px 28px, font-size 18px
  - Secondary: Min-height 52px, padding 16px 24px, font-size 17px
  - Icon-only: Min-size 56px x 56px
- **Desktop (1024px+)**:
  - Primary: Min-height 58px, padding 19px 30px, font-size 18px
  - Secondary: Min-height 54px, padding 17px 26px, font-size 17px
  - Icon-only: Min-size 58px x 58px

### Ukuran Teks (Typography)
- **Mobile Small (320px - 374px)**:
  - Heading 1: 28px (1.75rem)
  - Heading 2: 22px (1.375rem)
  - Heading 3: 20px (1.25rem)
  - Body Text: 16px (1rem)
  - Small Text: 14px (0.875rem)
  - Caption: 12px (0.75rem)
- **Mobile Large (375px - 479px)**:
  - Heading 1: 30px (1.875rem)
  - Heading 2: 24px (1.5rem)
  - Heading 3: 21px (1.3125rem)
  - Body Text: 16px (1rem)
  - Small Text: 14px (0.875rem)
  - Caption: 13px (0.8125rem)
- **Mobile XL (480px - 599px)**:
  - Heading 1: 32px (2rem)
  - Heading 2: 26px (1.625rem)
  - Heading 3: 22px (1.375rem)
  - Body Text: 17px (1.0625rem)
  - Small Text: 15px (0.9375rem)
  - Caption: 13px (0.8125rem)
- **Tablet Portrait (600px - 767px)**:
  - Heading 1: 34px (2.125rem)
  - Heading 2: 28px (1.75rem)
  - Heading 3: 24px (1.5rem)
  - Body Text: 17px (1.0625rem)
  - Small Text: 15px (0.9375rem)
  - Caption: 14px (0.875rem)
- **Tablet Landscape (768px - 1023px)**:
  - Heading 1: 36px (2.25rem)
  - Heading 2: 30px (1.875rem)
  - Heading 3: 26px (1.625rem)
  - Body Text: 18px (1.125rem)
  - Small Text: 16px (1rem)
  - Caption: 14px (0.875rem)
- **Desktop (1024px+)**:
  - Heading 1: 38px (2.375rem)
  - Heading 2: 32px (2rem)
  - Heading 3: 28px (1.75rem)
  - Body Text: 18px (1.125rem)
  - Small Text: 16px (1rem)
  - Caption: 15px (0.9375rem)

### Ukuran Gambar & Media
- **Mobile Small (320px - 374px)**:
  - Avatar: 40px x 40px
  - Thumbnail: Max-width 80px
  - Hero Image: Height 200px
  - Card Image: Height 120px
- **Mobile Large (375px - 479px)**:
  - Avatar: 44px x 44px
  - Thumbnail: Max-width 90px
  - Hero Image: Height 220px
  - Card Image: Height 140px
- **Mobile XL (480px - 599px)**:
  - Avatar: 48px x 48px
  - Thumbnail: Max-width 100px
  - Hero Image: Height 240px
  - Card Image: Height 160px
- **Tablet Portrait (600px - 767px)**:
  - Avatar: 52px x 52px
  - Thumbnail: Max-width 110px
  - Hero Image: Height 260px
  - Card Image: Height 180px
- **Tablet Landscape (768px - 1023px)**:
  - Avatar: 56px x 56px
  - Thumbnail: Max-width 120px
  - Hero Image: Height 280px
  - Card Image: Height 200px
- **Desktop (1024px+)**:
  - Avatar: 60px x 60px
  - Thumbnail: Max-width 130px
  - Hero Image: Height 320px
  - Card Image: Height 240px

### Spacing & Padding
- **Mobile Small (320px - 374px)**:
  - Base spacing: 8px (0.5rem)
  - Section padding: 12px
  - Element margin: 8px
  - Container padding: 16px
- **Mobile Large (375px - 479px)**:
  - Base spacing: 10px (0.625rem)
  - Section padding: 14px
  - Element margin: 10px
  - Container padding: 18px
- **Mobile XL (480px - 599px)**:
  - Base spacing: 12px (0.75rem)
  - Section padding: 16px
  - Element margin: 12px
  - Container padding: 20px
- **Tablet Portrait (600px - 767px)**:
  - Base spacing: 14px (0.875rem)
  - Section padding: 18px
  - Element margin: 14px
  - Container padding: 22px
- **Tablet Landscape (768px - 1023px)**:
  - Base spacing: 16px (1rem)
  - Section padding: 20px
  - Element margin: 16px
  - Container padding: 24px
- **Desktop (1024px+)**:
  - Base spacing: 18px (1.125rem)
  - Section padding: 24px
  - Element margin: 18px
  - Container padding: 28px

### Input Fields & Form Elements
- **Mobile Small (320px - 374px)**:
  - Input height: 48px
  - Input padding: 12px
  - Label font-size: 14px
  - Checkbox/Radio: 18px x 18px
- **Mobile Large (375px - 479px)**:
  - Input height: 50px
  - Input padding: 14px
  - Label font-size: 15px
  - Checkbox/Radio: 20px x 20px
- **Mobile XL (480px - 599px)**:
  - Input height: 52px
  - Input padding: 15px
  - Label font-size: 16px
  - Checkbox/Radio: 20px x 20px
- **Tablet Portrait (600px - 767px)**:
  - Input height: 54px
  - Input padding: 16px
  - Label font-size: 16px
  - Checkbox/Radio: 22px x 22px
- **Tablet Landscape (768px - 1023px)**:
  - Input height: 56px
  - Input padding: 17px
  - Label font-size: 17px
  - Checkbox/Radio: 22px x 22px
- **Desktop (1024px+)**:
  - Input height: 58px
  - Input padding: 18px
  - Label font-size: 17px
  - Checkbox/Radio: 24px x 24px
- **Navbar**: Top navbar normal dengan logo, menu horizontal di desktop atau sidebar toggle.
- **BottomNav**: Bisa hidden/static tergantung ukuran, hamburger menu muncul di atas.
- **Content**: 2-column grid untuk cards, max-width per kolom.
- **Sidebar** (jika ada): Single sidebar kiri atau kanan, content main adjustable.
- **Typography**: Judul `1.5rem`, body `0.95rem`, spacing lebih lega.
- **Kartu**: Grid 2 kolom, gap `1.5rem`.
- **Form**: Multi-column layout mulai terlihat.
- **Carousel**: 2-3 items visible per slide.

#### Desktop (1024px+)
- **Navbar**: Top navbar full horizontal menu.
- **Sidebar**: Optional side menu atau static nav.
- **Content**: Centered dengan max-width `1366px`, multi-column layout.
- **Typography**: Judul `2rem`, body `1rem`, spacing generous.
- **Kartu**: Grid 3+ kolom, gap `2rem`.
- **Carousel**: 4+ items visible atau 3-item dengan overflow.
- **Two-Pane Layout**: CV Preview left/right dengan CV Builder di seberangnya.

### Orientasi & Rotation Handling

#### Portrait Mode
- **Mobile**: Content penuh ketinggian viewport (max `100vh` untuk sections).
- **Tablet**: Sidebar mungkin hidden, main content full width.
- **Desktop**: Ignore (desktop tidak ada portrait/landscape perbedaan signifikan).

#### Landscape Mode
- **Mobile**: Visibility konten berkurang, hide non-essential UI, gunakan horizontal scroll untuk carousel.
- **Tablet**: Content height terbatas `60vh - 80vh` untuk melihat control buttons, sidebar bisa appear/disappear dynamically.
- **Desktop**: Ignore rotation.

#### CSS Media Queries & Transitions
```css
/* Mobile First Approach */
@media (orientation: landscape) and (max-height: 500px) {
  .navbar { height: 40px; }
  .content { max-height: 60vh; overflow-y: auto; }
  .bottom-nav { display: none; }
}

@media (min-width: 600px) {
  /* Tablet rules */
}

@media (min-width: 1024px) {
  /* Desktop rules */
}

@media (orientation: portrait) {
  /* Portrait-specific rules */
}

/* Smooth transitions saat rotate */
* { transition: width 0.3s ease, height 0.3s ease; }
```

### Touch Responsiveness
- **Button/Interactive**: Min-width `44px`, min-height `44px` untuk touch comfort.
- **Spacing**: Jarak antar touchable element minimal `8px`.
- **Swipe Gestures**: Carousel dan side drawer support horizontal swipe.
- **Tap Feedback**: Visual feedback immediate (active state) saat tap.
- **Hover State**: Desktop only (gunakan `:hover` dengan `@media (hover: hover)`).

### Fluid Typography & Scaling
- Gunakan `clamp()` untuk typography yang scale smooth antar breakpoint:
  ```css
  font-size: clamp(1rem, 5vw, 2rem);
  ```
- Padding dan margin juga bisa menggunakan `clamp()` untuk spacing fluid.

### Accessibility untuk Responsive
- Maintain contrast ratio `4.5:1` untuk normal text, `3:1` untuk large text.
- Focus indicators visible di semua breakpoint.
- Touch target size minimal `44x44px`.
- Readable line-width: `45-75` karakter per baris optimal.

## Grid & Responsive
- Desktop: layout 3 kolom untuk statistik, 2 kolom untuk builder/preview CV.
- Tablet: ubah menjadi 1-2 kolom, gunakan overflow horizontal untuk tab jika perlu.
- Mobile: tampilkan BottomNav, sembunyikan Navbar desktop.

## Form
- Input: background `#F8FAFC`, border `#E2E8F0`, radius `12px`.
- Label: warna `#475569`, ukuran `0.85rem`.
- Focus: ring biru `#60A5FA` dengan border `#0F4C75`.

## Ikon & Ilustrasi
- **Hanya gunakan SVG** (jangan emoji atau library ikon generic).
- Ikon action: stroke width `2`, warna `#0F4C75` untuk aktif, `#94A3B8` untuk inactive.
- Ikon status: stroke width `1.5`, warna sesuai status (hijau `#16A34A` sukses, merah `#EF4444` error, dll).
- Ukuran ikon: `18px` (small), `24px` (default), `32px` (large).
- Custom SVG lebih disukai daripada ikon library generic untuk branding konsisten.

## Mode Gelap
- Saat ini tidak ada mode gelap; fokus pada mode terang dengan kontras tinggi.

## Footer & Mobile Nav
- Fixed bottom nav untuk mobile: height `60px`, background `#FFFFFF`, border-top `1px solid #E2E8F0`.
- Label font kecil `0.65rem`, warna `#475569`.
- Indikator dot aktif berwarna `#0F4C75` (biru gelap dominan).
