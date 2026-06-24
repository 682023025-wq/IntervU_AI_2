# IntervU AI - Frontend

React 19 + Vite + Tailwind CSS frontend untuk IntervU AI - aplikasi career interview preparation.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ dan npm/yarn
- Git

### Installation

```bash
# Navigate to frontend directory
cd Frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

Aplikasi akan membuka di `http://localhost:5173`

## 📁 Project Structure

```
Frontend/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Button.jsx       # Button component
│   │   ├── Input.jsx        # Input/Password input
│   │   └── Icons.jsx        # SVG icon components
│   ├── features/            # Feature modules
│   │   └── Auth/
│   │       ├── LoginPage.jsx
│   │       └── LoginPage.css
│   ├── lib/
│   │   └── authApi.js       # Authentication API
│   ├── App.jsx              # Main app with routing
│   ├── App.css
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── index.html               # HTML template
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🎨 Design System

**Palet Warna (Blue Dominant)**
- Biru gelap: `#0F4C75` (primary)
- Biru sedang: `#1B5F8C` (hover)
- Biru muda: `#E0F2FE` (highlight)
- Biru terang: `#60A5FA` (focus)

**Typography**
- Font: Inter, Segoe UI, system sans-serif (NO emoji)
- Heading: 1.5rem - 2rem
- Body: 0.9rem - 1rem

**Responsive Breakpoints**
- Mobile: 320px - 599px
- Tablet: 600px - 1023px
- Desktop: 1024px+

Lihat [StyleGuide.md](../StyleGuide.md) untuk dokumentasi lengkap.

## 🔐 Authentication

### Demo Mode (Development)

Aplikasi saat ini menggunakan mock authentication dengan localStorage.

**Test Credentials:**
- Email: `user@example.com`
- Password: `password123`

File: `src/lib/authApi.js`

```javascript
// Mock users untuk testing
const MOCK_USERS = {
  'user@example.com': { id: '1', email: '...', name: 'John Doe' },
  'admin@example.com': { id: '2', email: '...', name: 'Admin User' }
};
```

### Backend Integration (TODO)

Akan diintegrasikan dengan FastAPI backend:
- Endpoint: `/api/auth/login`
- JWT token-based authentication
- Database: PostgreSQL

## 🛠️ Development

### Available Scripts

```bash
# Start development server (hot reload)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code (jika eslint dikonfigurasi)
npm run lint
```

## 📱 Responsive Design Features

✅ Mobile-first approach
✅ Responsive breakpoints untuk mobile/tablet/desktop
✅ Rotation/orientation handling
✅ Touch-friendly UI (44px min touch targets)
✅ Accessibility (WCAG 2.1)

## 🎯 Login Page Features

✅ Email validation
✅ Password strength check (min 6 chars)
✅ Show/hide password toggle
✅ Error handling dengan alert
✅ Demo credentials button
✅ Forgot password link (placeholder)
✅ Register link
✅ Glass morphism effect pada dekstop
✅ Responsive di semua ukuran device
✅ Loading state dengan spinner

## 📦 Dependencies

- **react** 19.2.7 - UI library
- **react-dom** 19.2.7 - DOM rendering
- **react-router-dom** 7.18.0 - Client-side routing
- **axios** 1.7.8 - HTTP client (for future backend integration)
- **tailwindcss** 3.4.19 - Utility-first CSS
- **vite** 6.0.0 - Build tool

## 🚀 Deployment

### Build untuk Production

```bash
npm run build
```

Output akan tersimpan di `/dist` folder.

### Static Hosting

Bisa di-deploy ke:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting

## 🤝 Contributing

1. Follow StyleGuide design system
2. Gunakan Tailwind CSS untuk styling
3. SVG icons only (no emoji)
4. Mobile-first responsive design
5. Accessibility features

## 📝 TODO

### Phase 1: Routing & Navigation
- [ ] Setup protected routes
- [ ] Create Navbar component
- [ ] Create BottomNav component
- [ ] Page transitions

### Phase 2: Authentication Enhancement
- [ ] Improve LoginPage
- [ ] Add RegisterPage
- [ ] Forgot password flow
- [ ] Token refresh logic

### Phase 3: Dashboard
- [ ] Dashboard layout
- [ ] CV drafts list
- [ ] Statistics cards
- [ ] Carousel/Featured jobs

### Phase 4: CV Builder
- [ ] CV context/reducer
- [ ] Form components
- [ ] Templates
- [ ] Preview

### Phase 5: Jobs Page
- [ ] Job listing
- [ ] Search & filter
- [ ] Job detail modal

## ⚠️ Notes

- Backend integration belum dilakukan (demo mode active)
- Icons menggunakan custom SVG (jangan ubah ke emoji/library)
- Warna harus sesuai blue palette (jangan purple)
- Mobile responsiveness mandatory
- Rotation support untuk landscape mode

## 📞 Support

Untuk pertanyaan atau issues, lihat dokumentasi project:
- [PRD.md](../PRD.md) - Product requirements
- [StyleGuide.md](../StyleGuide.md) - Design system
- [Task.md](../Task.md) - Implementation plan
