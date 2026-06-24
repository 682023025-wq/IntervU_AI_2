# StyleGuide - IntervU AI

## Identitas Visual
- Palet warna utama: biru tua `#0F4C75`, biru muda `#60A5FA`, ungu `#818CF8`, putih `#ffffff`, abu-abu `#64748B`.
- Nuansa modern dan profesional, dengan aksen gradien dan transparansi kaca.
- Tipografi bersih: `Inter` atau sistem sans-serif modern.

## Tipografi
- Judul besar: bold, `1.5rem` - `2rem`, warna `#0F172A`.
- Sub-judul: medium, `0.85rem` - `1rem`, warna `#64748B`.
- Teks body: normal `0.9rem` - `1rem`, warna `#475569` atau `#0F172A`.
- Button / label: semi-bold, warna putih pada tombol utama, biru pada tautan.

## Spacing dan Layout
- Layout responsif dengan `max-width: 1366px`.
- Jarak antar blok rata-rata `1rem` - `1.5rem`.
- Border radius: `8px` untuk kartu dan tombol, `10px`-`12px` untuk panel utama.
- Padding internal kartu: `0.75rem` - `1.5rem`.

## Komponen UI Utama
### Navbar
- Desktop: putih dengan border bottom `#e2e8f0`.
- Mobile: Bottom nav putih dengan icon aktif `#4F46E5`.
- Item aktif: latar `#eef2ff`, teks `#4f46e5`.

### Tombol
- Primary: latar `#4F46E5`, teks putih, border radius `10px`, shadow lembut.
- Sekunder: latar `#f1f5f9`, teks `#475569`.
- Hover effect: sedikit gelap/naik tonal.

### Kartu & Panel
- Background kartu: putih.
- Border: `1px solid #e2e8f0`.
- Shadow: `0 4px 12px rgba(0,0,0,0.08)`.
- Panel hero dengan blur kaca: `backdrop-filter: blur(12px); background: rgba(255,255,255,0.85)`.

## Warna Status
- Sukses: `#16A34A` / `#DCFCE7`.
- Informasi: `#0F4C75` / `#E0F2FE`.
- Peringatan: `#F59E0B`.
- Error: `#EF4444` / `#FEE2E2`.

## Detail UX
- Animasi halus untuk carousel, hover, dan perubahan tab.
- Tombol `Back` atau `Kembali` menggunakan gaya konsisten: minimal, borderless, teks biru.
- Placeholder `Coming Soon` harus menampilkan pesan yang jelas, tombol kembali, dan latar netral.

## Grid & Responsive
- Desktop: layout 3 kolom untuk statistik, 2 kolom untuk builder/preview CV.
- Tablet: ubah menjadi 1-2 kolom, gunakan overflow horizontal untuk tab jika perlu.
- Mobile: tampilkan BottomNav, sembunyikan Navbar desktop.

## Form
- Input: background `#F8FAFC`, border `#E2E8F0`, radius `12px`.
- Label: warna `#475569`, ukuran `0.85rem`.
- Focus: ring biru `#60A5FA` dengan border `#0F4C75`.

## Ikon & Ilustrasi
- Gunakan ikon garis sederhana (stroke) dan warna aksen biru.
- Ikon action: gunakan warna `#4F46E5` untuk aktif, `#64748B` untuk tidak aktif.

## Mode Gelap
- Saat ini tidak ada mode gelap; fokus pada mode terang dengan kontras tinggi.

## Footer & Mobile Nav
- Fixed bottom nav untuk mobile.
- Label font kecil `0.65rem`.
- Indikator dot aktif berwarna `#4f46e5`.
