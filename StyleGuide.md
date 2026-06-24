# StyleGuide - IntervU AI

## Identitas Visual
- Palet warna utama: **biru dominan** dalam berbagai shade untuk konsistensi brand.
  - Biru gelap: `#0F4C75` (primary, button, accent)
  - Biru sedang: `#1B5F8C` (hover state, secondary)
  - Biru muda: `#E0F2FE` (background, highlight)
  - Biru terang: `#60A5FA` (focus ring, active state)
  - Putih: `#FFFFFF` (background, card)
  - Abu-abu gelap: `#0F172A` (text primary)
  - Abu-abu medium: `#475569` (text secondary)
  - Abu-abu muda: `#F8FAFC` (background secondary)
- Logo IntervU AI biru modern menjadi referensi warna utama — hindari warna yang bertabrakan.
- Nuansa modern, profesional, dengan aksen gradien subtle dan transparansi kaca (glass effect).
- Tipografi bersih: `Inter`, `Segoe UI`, atau sistem sans-serif modern sans fallback emoji.

## Tipografi
- Judul besar: bold `1.5rem` - `2rem`, warna `#0F172A`, leading `1.2`.
- Sub-judul: semibold `1rem` - `1.25rem`, warna `#0F172A`, leading `1.3`.
- Body text: normal `0.9rem` - `1rem`, warna `#475569`, leading `1.5`.
- Button / label: semibold `0.85rem` - `0.95rem`, warna putih atau biru sesuai state.
- Small text / caption: normal `0.75rem` - `0.85rem`, warna `#64748B`.
- Font-family: `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`.

## Spacing dan Layout
- Layout responsif dengan `max-width: 1366px` di desktop.
- Jarak antar blok: `1rem` (mobile), `1.5rem` (tablet), `2rem` (desktop).
- Padding internal kartu: `0.75rem` (mobile), `1rem` (tablet), `1.5rem` (desktop).
- Border radius: `8px` untuk tombol dan input, `12px` untuk kartu, `16px` untuk panel utama.
- Gap antar item: `0.5rem` (compact), `1rem` (standard), `1.5rem` (loose).
- Margin horizontal: `1rem` (mobile), `1.5rem` (tablet), `2rem` (desktop).

## Komponen UI Utama

### Logo & Branding
- Logo IntervU AI tetap dominan dan tidak ditutupi konten.
- Minimal padding di sekitar logo: `16px`.
- Pada navbar mobile, jangan kurangi ukuran logo terlalu kecil — tetap readable.

### Navbar
- Desktop: putih dengan border bottom `#E2E8F0` tipis.
- Mobile: BottomNav fixed dengan background putih, border top `#E2E8F0`.
- Item aktif: background `#E0F2FE`, teks `#0F4C75`.
- Hover: background `#F8FAFC`, teks tetap `#0F4C75`.
- Ikon SVG: stroke width `2`, ukuran `20px` aktif, `18px` inactive.

### Tombol
- Primary: background `#0F4C75`, teks putih, border radius `10px`, padding `12px 20px`.
- Primary hover: background `#1B5F8C`, shadow lembut `0 4px 12px rgba(15, 76, 117, 0.2)`.
- Sekunder: background `#F8FAFC`, border `1px solid #E2E8F0`, teks `#0F4C75`.
- Sekunder hover: background `#E0F2FE`, border `1px solid #60A5FA`.
- Disabled: opacity `0.5`, cursor `not-allowed`.

### Kartu & Panel
- Background kartu: putih `#FFFFFF`.
- Border: `1px solid #E2E8F0`.
- Shadow: `0 4px 12px rgba(0, 0, 0, 0.08)` hover pada kartu interaktif.
- Corner radius: `12px`.
- Panel hero dengan blur kaca: `backdrop-filter: blur(12px); background: rgba(255, 255, 255, 0.85); border: 1px solid rgba(255, 255, 255, 0.6)`.

## Warna Status
- Sukses: `#16A34A` (text), `#DCFCE7` (background).
- Informasi: `#0F4C75` (text), `#E0F2FE` (background).
- Peringatan: `#F59E0B` (text), `#FFFBEB` (background).
- Error: `#EF4444` (text), `#FEE2E2` (background).

## Detail UX
- Animasi halus: transisi `0.2s - 0.3s ease-in-out` untuk hover, tab change, carousel.
- Tombol `Back` / `Kembali`: style minimal, borderless, teks biru `#0F4C75`, ikon SVG pointing left.
- Placeholder `Coming Soon`: layout centered, ikon SVG besar, teks jelas, tombol kembali.
- Feedback user: loader SVG spinning, toast/alert dengan ikon status.
- Focus state: ring biru `#60A5FA` width `2px` pada input dan button.
- Ikon & Ilustrasi: **gunakan SVG saja** (jangan emoji/unicode).
  - Ikon action: stroke width `2`, warna `#0F4C75` aktif, `#94A3B8` inactive.
  - Ikon status: stroke width `1.5`, warna sesuai status (hijau sukses, merah error, dll).
  - Custom SVG lebih disukai daripada ikon library untuk branding konsisten.

## Responsive Design & Orientation Handling

### Breakpoint Definisi
- **Mobile Small**: `320px` - `374px` (devices kecil, portrait)
- **Mobile Large**: `375px` - `479px` (iPhone, portrait)
- **Mobile XL**: `480px` - `599px` (phablet, portrait)
- **Tablet Portrait**: `600px` - `767px` (iPad Mini, portrait)
- **Tablet Landscape**: `768px` - `1023px` (iPad, landscape / tab besar portrait)
- **Desktop Small**: `1024px` - `1365px` (desktop compact)
- **Desktop Large**: `1366px` + (monitor standar dan lebih besar)

### Layout Responsif per Breakpoint

#### Mobile (320px - 599px)
- **Navbar**: Top navbar dengan logo mini atau text "IntervU AI", burger menu.
- **BottomNav**: Fixed bottom dengan 4-5 menu items, touch-friendly height `60px`.
- **Content**: Full width dengan padding horizontal `1rem`, single column layout.
- **Typography**: Judul `1.25rem`, body `0.9rem`, prioritas readability.
- **Kartu**: Stack vertikal, margin bottom `1rem`.
- **Form Input**: Full width, height `44px` untuk touch affordance.
- **Tombol**: Full width atau min-width `120px`, height `44px`.

#### Tablet (600px - 1023px)
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
