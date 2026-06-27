# StyleGuide - IntervU AI

## Breakpoint Utama
| Nama     | Lebar     | Perubahan Utama |
|----------|----------|----------------|
| Wide     | ≥ 1440px | Full container width; mockup scale |
| Desktop  | 1024–1440px | Max-width content; pricing 4-up |
| Tablet   | 768–1023px | Pricing 2-up; single mockup |
| Mobile   | < 768px | Pricing 1-up; hamburger nav; display 64→36px |

## Identitas Visual
- Palet warna utama: **emerald green dominant**
  - Emerald: `#3ecf8e` (primary)
  - Emerald Deep: `#24b47e` (hover)
  - Emerald Soft: `#4ade80` (accent)
  - Ink: `#171717` (text primary)
  - Ink Secondary: `#212121` (text secondary)
  - Ink Mute: `#707070` (text tertiary)
  - Canvas: `#ffffff` (background)
  - Canvas Night: `#1c1c1c` (dark background)
- Nuansa modern, teknis, dengan minimal chrome dan near-monochrome palette
- Tipografi bersih: `Circular`, `Inter`, atau sistem sans-serif modern

## Prinsip Desain Utama
1. **Kesederhanaan**: Fokus pada tujuan utama pengguna, interface bersih dan navigasi intuitif
2. **Konsistensi**: Gunakan palet warna, tipografi, ikon dan gaya visual yang seragam
3. **Kenyamanan Visual**: Gunakan kontras warna yang cukup (minimal 4.5:1), hierarki visual yang jelas
4. **Aksesibilitas**: Desain untuk semua pengguna, gunakan warna ramah buta warna
5. **Efisiensi**: Minimalkan jumlah langkah, gunakan smart defaults dan optimalkan performa
6. **Umpan Balik**: Berikan indikasi visual saat interaksi dan status proses
7. **Fleksibilitas**: Desain responsif dan gunakan adaptive interfaces

## Tipografi
- Display XXL: 64px, weight 500, letter-spacing -1.92px, font-family "Circular, 'Helvetica Neue', Helvetica, Arial, sans-serif"
- Display XL: 48px, weight 500, letter-spacing -1.44px, font-family "Circular, 'Helvetica Neue', Helvetica, Arial, sans-serif"
- Display LG: 36px, weight 500, letter-spacing -0.72px, font-family "Circular, 'Helvetica Neue', Helvetica, Arial, sans-serif"
- Display MD: 28px, weight 500, letter-spacing -0.42px, font-family "Circular, 'Helvetica Neue', Helvetica, Arial, sans-serif"
- Heading LG: 22px, weight 500, line-height 1.2, letter-spacing 0, font-family "Circular, 'Helvetica Neue', Helvetica, Arial, sans-serif"
- Heading MD: 18px, weight 500, line-height 1.4, letter-spacing 0, font-family "Circular, 'Helvetica Neue', Helvetica, Arial, sans-serif"
- Body LG: 18px, weight 400, line-height 1.55, font-family "Circular, 'Helvetica Neue', Helvetica, Arial, sans-serif"
- Body MD: 16px, weight 400, line-height 1.5, font-family "Circular, 'Helvetica Neue', Helvetica, Arial, sans-serif"
- Button MD: 14px, weight 500, line-height 1.0, font-family "Circular, 'Helvetica Neue', Helvetica, Arial, sans-serif"
- Caption: 13px, weight 400, line-height 1.45, font-family "Circular, 'Helvetica Neue', Helvetica, Arial, sans-serif"
- Micro: 12px, weight 400, line-height 1.45, font-family "Circular, 'Helvetica Neue', Helvetica, Arial, sans-serif"
- Code: 14px, weight 400, line-height 1.5, font-family "ui-monospace, Menlo, Monaco, Consolas, 'Liberation Mono', monospace"

### Prinsip Tipografi
- Weight 500 untuk seluruh tier display
- Negative tracking pada tier display (-1.92px pada 64px, proporsional turun)
- Mono untuk code blocks`

## Spacing dan Layout
- Base unit: 8px (dengan sub-tokens 2/4/12)
- Tokens: `{spacing.xxs}` 2px · `{spacing.xs}` 4px · `{spacing.sm}` 8px · `{spacing.md}` 12px · `{spacing.lg}` 16px · `{spacing.xl}` 24px · `{spacing.xxl}` 32px · `{spacing.huge}` 64px
- Section padding: 64–96px pada marketing surfaces
- Card internal padding: 32px pada feature/pricing cards
- Grid & Container: Marketing pages center di ~1280px container dengan no edge-bleed

## Komponen UI Utama

### Tombol

**`button-primary-green`** — the signature CTA.
- Background `{colors.primary}`, text `{colors.on-primary}` (near-black, NOT white), type `{typography.button-md}`, padding `{spacing.sm} {spacing.lg}` (8px 16px), rounded `{rounded.sm}` 6px.
- Pressed state `button-primary-green-pressed` shifts to `{colors.primary-deep}`.

**`button-secondary-outline`** — outline alternative on white.
- Background `{colors.canvas}`, text `{colors.ink}`, 1px solid `{colors.hairline-strong}` border, same shape.

**`button-on-dark`** — used on dark surfaces / code-block CTAs.
- Background `{colors.canvas-night}`, text `{colors.on-dark}`, same shape.

**`button-link`** — text-only inline button.
- Transparent background, text `{colors.ink}` rendered in `{typography.button-md}`, no padding, with a subtle underline on hover.

### Cards & Containers

**`card-feature-light`** — feature card on white.
- Background `{colors.canvas}`, padding `{spacing.xxl}`, rounded `{rounded.lg}` 12px, 1px `{colors.hairline}` border.

**`card-pricing`** — standard pricing tier.
- Background `{colors.canvas}`, padding `{spacing.xxl}`, rounded `{rounded.lg}`, 1px `{colors.hairline}` border. Title in `{typography.heading-lg}`, price in `{typography.display-md}`, body in `{typography.body-md}`, CTA `button-primary-green` pinned bottom.

**`card-pricing-featured`** — inverted dark featured tier.
- Background `{colors.canvas-night}`, text `{colors.on-dark}`, otherwise identical structure.

**`card-feature-dark`** — feature card with deep dark fill.
- Background `{colors.canvas-night}`, text `{colors.on-dark}`, padding `{spacing.xxl}`, rounded `{rounded.lg}`. Used for code-heavy feature explanations.

**`code-block`** — code snippet container.
- Background `{colors.canvas-night}`, text `{colors.on-dark}` rendered in `{typography.code}`. Padding `{spacing.lg}` 16px, rounded `{rounded.sm}` 6px.

### Inputs & Forms

**`text-input`** — standard form input.
- Background `{colors.canvas}`, text `{colors.ink}`, type `{typography.body-md}`, padding `{spacing.sm} {spacing.md}` (8px 12px), rounded `{rounded.sm}` 6px, 1px `{colors.hairline}` border.

### Navigation

**`nav-bar-light`** — top nav across the site.
- Background `{colors.canvas}`, text `{colors.ink}`, padding `{spacing.lg} {spacing.xl}`. Logo on the left, primary nav center, "Sign In" link + filled `button-primary-green` on the right.

### Pills, Tags, and Chips

**`pill-tag-green`** — small green pill used for "new" or featured indicators.
- Background `{colors.primary}`, text `{colors.on-primary}`, type `{typography.micro}`, padding `{spacing.xxs} {spacing.sm}`, rounded `{rounded.full}`.

**`pill-tag-soft`** — neutral pill on light surfaces.
- Background `{colors.canvas-soft}`, text `{colors.ink}`, otherwise same shape.

### Signature Components

**Composited Product UI Mockups** — multi-layer dashboard / SQL editor / log pane composites with subtle Level 2 shadows. The product is the brand's argument; mockups always sit on white canvas with no surrounding decoration.

**`link-on-light`** — inline links in body copy.
- Text `{colors.ink}` rendered in `{typography.body-md}` with a persistent underline.

**`footer-light`** — site-wide footer.
- Background `{colors.canvas}`, text `{colors.ink-mute}`, type `{typography.caption}`, padding `{spacing.huge} {spacing.xl}` (64px 24px). Holds 4–5 columns of link groups, social icons, and a small legal row.

## Do's and Don'ts

### Do
- Reserve `{colors.primary}` emerald for filled CTAs and the wordmark accent — it should appear sparingly.
- Render display tiers at weight 500 with negative letter-spacing — the engineered tightness is part of the brand.
- Use `{rounded.sm}` 6px for buttons — square-ish radii, never pill-shaped.
- Composite product UI mockups inside `{rounded.lg}` containers with subtle Level 2 shadows.
- Use near-black `{colors.ink}` on the emerald button (not white) — the green reads as "lit" with dark type, which is the brand's idiosyncratic choice.
- Apply system mono for every code block.

### Don't
- Don't introduce additional accent colors as system colors — purples, yellows, and pinks belong inside chart points and integration logos only.
- Don't bump display weight above 500 — the brand's calibrated mid-weight breaks at 600+.
- Don't use pill-shaped buttons; the brand's button radius is square-ish 6px.
- Don't use white text on the emerald button — the brand specifically uses near-black on green.
- Don't add atmospheric gradients to hero bands — the white canvas is the design.

## Detail UX
- Animasi: transisi `0.2s - 0.3s ease-in-out`
- Focus state: ring emerald `#3ecf8e` width `2px` pada input dan button
- Ikon: gunakan SVG dengan stroke width `2`, warna `#3ecf8e` aktif yang konsisten

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
