# StyleGuide - IntervU AI (Ringkas)

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

## Ukuran Ideal Elemen UI

### Ukuran Tombol
- Mobile Small: Primary (Min-height 48px, font-size 16px)
- Mobile Large: Primary (Min-height 50px, font-size 16px)
- Mobile XL: Primary (Min-height 52px, font-size 17px)
- Tablet Portrait: Primary (Min-height 54px, font-size 17px)
- Desktop: Primary (Min-height 58px, font-size 18px)

### Ukuran Teks
- Mobile Small: Heading 1 (28px), Body (16px)
- Mobile Large: Heading 1 (30px), Body (16px)
- Mobile XL: Heading 1 (32px), Body (17px)
- Tablet Portrait: Heading 1 (34px), Body (17px)
- Desktop: Heading 1 (38px), Body (18px)

### Spacing & Padding
- Mobile Small: Base spacing 8px (0.5rem), Container padding 16px
- Mobile Large: Base spacing 10px (0.625rem), Container padding 18px
- Mobile XL: Base spacing 12px (0.75rem), Container padding 20px
- Tablet Portrait: Base spacing 14px (0.875rem), Container padding 22px
- Desktop: Base spacing 18px (1.125rem), Container padding 28px