// src/features/Dashboard/DashboardPage.jsx
import { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDashboardLogic } from './dashboardLogic';

// --- ICONS (SVG Manual) ---
const Icons = {
  Home: ({ size = 20, active = false }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill={active ? "#4f46e5" : "none"} stroke={active ? "#4f46e5" : "#64748b"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
    </svg>
  ),
  Video: ({ size = 20, active = false, color = "#64748b" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m22 8-6 4 6 4V8Z"/><rect width="14" height="12" x="2" y="6" rx="2" ry="2"/>
    </svg>
  ),
  FileText: ({ size = 20, active = false, color = "#64748b" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/>
    </svg>
  ),
  Award: ({ size = 20, active = false, color = "#64748b" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
    </svg>
  ),
  Briefcase: ({ size = 20, active = false, color = "#64748b" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
    </svg>
  ),
  User: ({ size = 20, active = false }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={active ? "#4f46e5" : "#64748b"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
    </svg>
  ),
  LogOut: ({ size = 18 }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/>
    </svg>
  ),
  BookOpen: ({ size = 20, color = "#4f46e5" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
    </svg>
  ),
  AlertCircle: ({ size = 20, color = "#f59e0b" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/>
    </svg>
  ),
  ChevronLeft: ({ size = 20 }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#4f46e5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m15 18-6-6 6-6"/>
    </svg>
  ),
  ChevronRight: ({ size = 20 }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#4f46e5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m9 18 6-6-6-6"/>
    </svg>
  )
};

export default function DashboardPage() {
  const [user, setUser] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const carouselRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { getUserData, handleLogout, getFirstName } = useDashboardLogic(navigate);

  // Check if CV is complete (from user data)
  const isCVComplete = user?.data_cv && user.data_cv.isComplete;
  const cvProgress = user?.data_cv ? user.data_cv.progress || 0 : 0;

  const navItems = [
    { path: '/dashboard', label: 'Home', Icon: Icons.Home },
    { path: '/interview', label: 'Interview', Icon: Icons.Video },
    { path: '/cv', label: 'CV', Icon: Icons.FileText },
    { path: '/jobs', label: 'Jobs', Icon: Icons.Briefcase },
    { path: '/profile', label: 'Profile', Icon: Icons.User }
  ];

  const stats = [
    { label: 'Interview Selesai', value: '12', Icon: Icons.Video, color: '#2563eb', bg: '#dbeafe' },
    { label: 'CV Dibuat', value: isCVComplete ? '1' : '0', Icon: Icons.FileText, color: '#16a34a', bg: '#dcfce7' },
    { label: 'Skor Rata-rata', value: '85', Icon: Icons.Award, color: '#ea580c', bg: '#ffedd5' },
  ];

  // Pindahkan tutorialSteps ke atas (sebelum useEffect)
  const tutorialSteps = [
    { 
      step: 1, 
      title: 'Lengkapi CV Profesional', 
      description: 'Wajib! Isi data CV Anda sebagai baseline. AI akan menganalisis dan memberikan skor awal.',
      Icon: Icons.FileText,
      link: '/cv',
      linkText: 'Isi CV Sekarang',
      priority: !isCVComplete,
      color: '#4f46e5'
    },
    { 
      step: 2, 
      title: 'Simulasi Wawancara AI', 
      description: 'Latihan interview dengan Dual AI. Dapatkan feedback real-time untuk jawaban Anda.',
      Icon: Icons.Video,
      link: '/interview',
      linkText: 'Mulai Simulasi',
      priority: isCVComplete,
      color: '#10b981'
    },
    { 
      step: 3, 
      title: 'Revisi CV & Cari Kerja', 
      description: 'Terima saran perbaikan CV otomatis, dan temukan lowongan dengan skor kecocokan AI.',
      Icon: Icons.Briefcase,
      link: '/jobs',
      linkText: 'Cari Lowongan',
      priority: false,
      color: '#f59e0b'
    },
  ];

  const recentActivities = [
    { id: 1, type: 'interview', title: 'Mock Interview - Software Engineer', date: '2 jam yang lalu', score: 88 },
    { id: 2, type: 'cv', title: 'CV Updated', date: '1 hari yang lalu', score: null },
    { id: 3, type: 'interview', title: 'Mock Interview - Product Manager', date: '3 hari yang lalu', score: 82 },
  ];

  useEffect(() => {
    const data = getUserData();
    if (data) setUser(data);
    
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [getUserData]); // Sekarang aman karena getUserData sudah di-wrap useCallback

  
  // PERBAIKAN: Auto-play carousel tanpa infinite loop
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(timer);
  }, []); // Empty array = jalan sekali saat mount
  
  const goToSlide = (index) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToNextSlide = () => {
    goToSlide((currentSlide + 1) % tutorialSteps.length);
  };

  const goToPrevSlide = () => {
    goToSlide((currentSlide - 1 + tutorialSteps.length) % tutorialSteps.length);
  };

  if (!user) return <div style={styles.loading}>Memuat...</div>;

  const firstName = getFirstName(user.nama_lengkap);
  const currentPath = location.pathname;

  return (
    <div style={styles.pageContainer}>
      {/* Desktop Top Navbar */}
      {!isMobile && (
        <nav style={styles.topNav}>
          <div style={styles.topNavContent}>
            <div style={styles.brand}>
              <img src="https://res.cloudinary.com/dxvryfbpz/image/upload/Logo_IntervU_AI_ksikyh.png" alt="Logo" style={styles.logo} />
              <span style={styles.brandName}>IntervU AI</span>
            </div>
            <div style={styles.topNavMenu}>
              {navItems.map(({ path, label }) => (
                <button
                  key={path}
                  onClick={() => navigate(path)}
                  style={{
                    ...styles.topNavItem,
                    ...(currentPath === path ? styles.topNavItemActive : {})
                  }}
                >
                  {label}
                </button>
              ))}
            </div>
            <button onClick={handleLogout} style={styles.logoutBtn}>
              <Icons.LogOut size={16} />
            </button>
          </div>
        </nav>
      )}

      {/* Main Content */}
      <main style={isMobile ? styles.mainMobile : styles.mainDesktop}>
        {/* Welcome Section with CV Status */}
        <div style={styles.welcomeSection}>
          <div style={styles.welcomeHeader}>
            <div>
              <h1 style={styles.title}>Halo, {firstName}!</h1>
              <p style={styles.subtitle}>Selamat datang kembali di dashboardmu.</p>
            </div>
            {!isCVComplete && (
              <div style={styles.cvAlert} onClick={() => navigate('/cv')}>
                <Icons.AlertCircle size={16} color="#f59e0b" />
                <span style={styles.cvAlertText}>Lengkapi CV dulu!</span>
              </div>
            )}
          </div>
          
          {/* CV Progress Bar */}
          <div style={styles.cvProgressContainer}>
            <div style={styles.cvProgressHeader}>
              <span style={styles.cvProgressLabel}>Status CV</span>
              <span style={styles.cvProgressValue}>{cvProgress}%</span>
            </div>
            <div style={styles.progressBar}>
              <div style={{...styles.progressFill, width: `${cvProgress}%`}}></div>
            </div>
            {!isCVComplete && (
              <p style={styles.cvHint}>Lengkapi CV untuk mulai simulasi wawancara</p>
            )}
          </div>
        </div>

        {/* Stats Grid */}
        <div style={styles.statsGrid}>
          {stats.map((stat, index) => {
            const Icon = stat.Icon;
            return (
              <div key={index} style={styles.statCard}>
                <p style={styles.statLabel}>{stat.label}</p>
                <div style={styles.statValueRow}>
                  <p style={styles.statValue}>{stat.value}</p>
                  <div style={{...styles.statIconWrap, backgroundColor: stat.bg}}>
                    <Icon size={14} color={stat.color} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Tutorial Section with Animated Carousel */}
        <div style={styles.tutorialSection}>
          <div style={styles.sectionHeader}>
            <div style={styles.sectionTitleRow}>
              <Icons.BookOpen size={14} color="#4f46e5" />
              <h2 style={styles.sectionTitle}>Panduan IntervU AI</h2>
            </div>
            <div style={styles.carouselIndicators}>
              {tutorialSteps.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  style={{
                    ...styles.carouselDot,
                    ...(currentSlide === idx ? styles.carouselDotActive : {})
                  }}
                />
              ))}
            </div>
          </div>
          
          <div style={styles.carouselWrapper}>
            <button 
              onClick={goToPrevSlide}
              style={styles.carouselBtn}
              aria-label="Previous slide"
            >
              <Icons.ChevronLeft size={20} />
            </button>
            
            <div style={styles.carouselContainer} ref={carouselRef}>
              {tutorialSteps.map((item, index) => {
                const Icon = item.Icon;
                const isActive = index === currentSlide;
                const isPriority = item.priority;
                
                return (
                  <div 
                    key={item.step} 
                    style={{
                      ...styles.tutorialCard,
                      ...(isPriority ? styles.tutorialCardPriority : {}),
                      transform: `translateX(${(index - currentSlide) * 100}%)`,
                      opacity: isActive ? 1 : 0,
                      transition: 'all 0.5s ease-in-out'
                    }}
                  >
                    {isPriority && (
                      <div style={styles.priorityBadge}>
                        <Icons.AlertCircle size={12} color="#f59e0b" />
                        <span>Prioritas</span>
                      </div>
                    )}
                    
                    <div style={styles.tutorialHeader}>
                      <span style={{
                        ...styles.stepBadge,
                        backgroundColor: item.color
                      }}>
                        {item.step}
                      </span>
                      <div style={styles.tutorialTitleWrap}>
                        <h3 style={styles.tutorialTitle}>{item.title}</h3>
                      </div>
                    </div>
                    
                    <p style={styles.tutorialDesc}>{item.description}</p>
                    
                    <button 
                      onClick={() => navigate(item.link)}
                      style={{
                        ...styles.tutorialLink,
                        color: item.color
                      }}
                    >
                      {item.linkText} →
                    </button>
                  </div>
                );
              })}
            </div>
            
            <button 
              onClick={goToNextSlide}
              style={styles.carouselBtn}
              aria-label="Next slide"
            >
              <Icons.ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Recent Activities */}
        <div style={styles.activitiesSection}>
          <div style={styles.activitiesHeader}>
            <h2 style={styles.sectionTitle}>Aktivitas Terbaru</h2>
            <button style={styles.seeAllBtn}>Lihat Semua</button>
          </div>
          
          <div style={styles.activitiesList}>
            {recentActivities.map((activity) => {
              const getIconConfig = () => {
                switch (activity.type) {
                  case 'interview':
                    return { Icon: Icons.Video, bgColor: '#dbeafe', iconColor: '#2563eb' };
                  case 'cv':
                    return { Icon: Icons.FileText, bgColor: '#dcfce7', iconColor: '#16a34a' };
                  default:
                    return { Icon: Icons.FileText, bgColor: '#f1f5f9', iconColor: '#64748b' };
                }
              };

              const { Icon: IconComponent, bgColor, iconColor } = getIconConfig();

              return (
                <div key={activity.id} style={styles.activityItem}>
                  <div style={styles.activityContent}>
                    <div style={{...styles.activityIconWrap, backgroundColor: bgColor}}>
                      <IconComponent size={12} color={iconColor} />
                    </div>
                    <div style={styles.activityTextWrap}>
                      <p style={styles.activityTitle}>{activity.title}</p>
                      <p style={styles.activityDate}>{activity.date}</p>
                    </div>
                  </div>
                  
                  {activity.type === 'interview' && activity.score && (
                    <div style={styles.scoreBadge}>
                      Skor: {activity.score}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </main>

      {/* Mobile Bottom Navigation */}
      {isMobile && (
        <nav style={styles.bottomNav}>
          {navItems.map(({ path, label, Icon }) => {
            const isActive = currentPath === path;
            return (
              <button
                key={path}
                onClick={() => navigate(path)}
                style={styles.bottomNavItem}
              >
                <Icon size={20} active={isActive} />
                <span style={{
                  ...styles.bottomNavLabel,
                  color: isActive ? '#4f46e5' : '#64748b',
                  fontWeight: isActive ? '600' : '500'
                }}>
                  {label}
                </span>
                {isActive && <div style={styles.activeDot}></div>}
              </button>
            );
          })}
        </nav>
      )}
    </div>
  );
}

// Sub-components dan styles tetap sama seperti sebelumnya...
// (Copy dari kode sebelumnya, tidak berubah)

function StatCard({ title, value, Icon, color, bg }) {
  return (
    <div style={styles.statCard}>
      <p style={styles.statLabel}>{title}</p>
      <div style={styles.statValueRow}>
        <p style={styles.statValue}>{value}</p>
        <div style={{...styles.statIconWrap, backgroundColor: bg}}>
          <Icon size={14} color={color} />
        </div>
      </div>
    </div>
  );
}

// --- CSS LAYER (DIPISAH DI BAWAH) ---
const styles = {
  pageContainer: {
    minHeight: '100vh',
    backgroundColor: '#f8fafc',
    fontFamily: "'Inter', sans-serif",
    display: 'flex',
    flexDirection: 'column'
  },
  loading: {
    display: 'flex',
    height: '100vh',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#94a3b8',
    fontSize: '0.9rem'
  },

  // Top Navbar (Desktop)
  topNav: {
    backgroundColor: '#ffffff',
    borderBottom: '1px solid #e2e8f0',
    height: '60px',
    position: 'sticky',
    top: 0,
    zIndex: 50
  },
  topNavContent: {
    maxWidth: '1366px',
    margin: '0 auto',
    height: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 1.5rem'
  },
  brand: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px'
  },
  logo: {
    height: '32px'
  },
  brandName: {
    fontWeight: '700',
    fontSize: '1.1rem',
    color: '#0f172a'
  },
  topNavMenu: {
    display: 'flex',
    gap: '8px'
  },
  topNavItem: {
    padding: '8px 16px',
    border: 'none',
    backgroundColor: 'transparent',
    color: '#64748b',
    fontSize: '0.9rem',
    fontWeight: '500',
    cursor: 'pointer',
    borderRadius: '8px',
    transition: 'all 0.2s'
  },
  topNavItemActive: {
    backgroundColor: '#eef2ff',
    color: '#4f46e5',
    fontWeight: '600'
  },
  logoutBtn: {
    padding: '8px',
    border: 'none',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    borderRadius: '8px'
  },

  // Main Content
  mainDesktop: {
    flex: 1,
    width: '100%',
    maxWidth: '1366px',
    margin: '0 auto',
    padding: '1.5rem',
    boxSizing: 'border-box'
  },
  mainMobile: {
    flex: 1,
    width: '100%',
    padding: '1rem 0.75rem 5rem 0.75rem',
    boxSizing: 'border-box'
  },

  // Welcome Section
  welcomeSection: {
    marginBottom: '1rem'
  },
  welcomeHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '12px'
  },
  title: {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: '#0f172a',
    margin: '0 0 4px 0',
    lineHeight: 1.2
  },
  subtitle: {
    fontSize: '0.85rem',
    color: '#64748b',
    margin: 0
  },
  cvAlert: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    backgroundColor: '#fffbeb',
    border: '1px solid #fcd34d',
    padding: '6px 12px',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.2s'
  },
  cvAlertText: {
    fontSize: '0.75rem',
    fontWeight: '600',
    color: '#f59e0b'
  },
  cvProgressContainer: {
    backgroundColor: '#ffffff',
    padding: '12px',
    borderRadius: '8px',
    border: '1px solid #e2e8f0'
  },
  cvProgressHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '6px'
  },
  cvProgressLabel: {
    fontSize: '0.75rem',
    fontWeight: '600',
    color: '#0f172a'
  },
  cvProgressValue: {
    fontSize: '0.75rem',
    fontWeight: '700',
    color: '#4f46e5'
  },
  progressBar: {
    width: '100%',
    height: '8px',
    backgroundColor: '#e2e8f0',
    borderRadius: '4px',
    overflow: 'hidden'
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#4f46e5',
    borderRadius: '4px',
    transition: 'width 0.5s ease'
  },
  cvHint: {
    fontSize: '0.7rem',
    color: '#64748b',
    marginTop: '6px',
    margin: '6px 0 0 0'
  },

  // Stats Grid
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '0.5rem',
    marginBottom: '1rem'
  },
  statCard: {
    backgroundColor: '#ffffff',
    padding: '0.75rem',
    borderRadius: '8px',
    border: '1px solid #e2e8f0',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '60px'
  },
  statLabel: {
    fontSize: '0.65rem',
    fontWeight: '500',
    color: '#64748b',
    margin: '0 0 4px 0',
    lineHeight: 1.2,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  },
  statValueRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '2px'
  },
  statValue: {
    fontSize: '1.15rem',
    fontWeight: '700',
    color: '#0f172a',
    margin: 0,
    lineHeight: 1
  },
  statIconWrap: {
    padding: '4px',
    borderRadius: '6px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0
  },

  // Tutorial Section with Carousel
  tutorialSection: {
    backgroundColor: '#ffffff',
    padding: '0.75rem',
    borderRadius: '8px',
    border: '1px solid #e2e8f0',
    marginBottom: '1rem',
    overflow: 'hidden'
  },
  sectionHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '0.75rem'
  },
  sectionTitleRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  },
  sectionTitle: {
    fontSize: '0.9rem',
    fontWeight: '600',
    color: '#0f172a',
    margin: 0
  },
  carouselIndicators: {
    display: 'flex',
    gap: '4px'
  },
  carouselDot: {
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    backgroundColor: '#cbd5e1',
    border: 'none',
    cursor: 'pointer',
    padding: 0,
    transition: 'all 0.3s'
  },
  carouselDotActive: {
    backgroundColor: '#4f46e5',
    width: '16px',
    borderRadius: '3px'
  },
  carouselWrapper: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  },
  carouselBtn: {
    backgroundColor: '#eef2ff',
    border: 'none',
    borderRadius: '50%',
    width: '28px',
    height: '28px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    flexShrink: 0,
    transition: 'all 0.2s',
    color: '#4f46e5'
  },
  carouselContainer: {
    flex: 1,
    position: 'relative',
    overflow: 'hidden',
    height: '140px'
  },
  tutorialCard: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: '#f8fafc',
    padding: '0.75rem',
    borderRadius: '8px',
    border: '1px solid #e2e8f0',
    display: 'flex',
    flexDirection: 'column'
  },
  tutorialCardPriority: {
    border: '2px solid #f59e0b',
    backgroundColor: '#fffbeb'
  },
  priorityBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '4px',
    backgroundColor: '#fffbeb',
    padding: '2px 8px',
    borderRadius: '12px',
    fontSize: '0.6rem',
    fontWeight: '600',
    color: '#f59e0b',
    marginBottom: '6px',
    width: 'fit-content'
  },
  tutorialHeader: {
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: '6px'
  },
  stepBadge: {
    flexShrink: 0,
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '0.65rem',
    fontWeight: '700',
    color: '#ffffff'
  },
  tutorialTitleWrap: {
    marginLeft: '6px',
    flex: 1,
    minWidth: 0
  },
  tutorialTitle: {
    fontSize: '0.75rem',
    fontWeight: '600',
    color: '#0f172a',
    margin: 0,
    lineHeight: 1.3,
    display: '-webkit-box',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden'
  },
  tutorialDesc: {
    fontSize: '0.65rem',
    color: '#64748b',
    margin: '0 0 8px 0',
    lineHeight: 1.4,
    flex: 1,
    display: '-webkit-box',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden'
  },
  tutorialLink: {
    fontSize: '0.65rem',
    fontWeight: '500',
    background: 'none',
    border: 'none',
    padding: 0,
    cursor: 'pointer',
    textAlign: 'left',
    marginTop: 'auto'
  },

  // Activities Section
  activitiesSection: {
    backgroundColor: '#ffffff',
    padding: '0.75rem',
    borderRadius: '8px',
    border: '1px solid #e2e8f0'
  },
  activitiesHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '0.75rem'
  },
  seeAllBtn: {
    fontSize: '0.65rem',
    color: '#4f46e5',
    fontWeight: '500',
    background: 'none',
    border: '1px solid #e2e8f0',
    padding: '4px 8px',
    borderRadius: '6px',
    cursor: 'pointer',
    minHeight: '28px'
  },
  activitiesList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px'
  },
  activityItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '6px',
    backgroundColor: '#f8fafc',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: 'background-color 0.2s'
  },
  activityContent: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    flex: 1,
    minWidth: 0
  },
  activityIconWrap: {
    padding: '4px',
    borderRadius: '6px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0
  },
  activityTextWrap: {
    flex: 1,
    minWidth: 0
  },
  activityTitle: {
    fontSize: '0.7rem',
    fontWeight: '500',
    color: '#0f172a',
    margin: 0,
    lineHeight: 1.2,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  },
  activityDate: {
    fontSize: '0.6rem',
    color: '#94a3b8',
    margin: '2px 0 0 0',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  },
  scoreBadge: {
    fontSize: '0.6rem',
    color: '#16a34a',
    backgroundColor: '#dcfce7',
    padding: '2px 6px',
    borderRadius: '4px',
    fontWeight: '500',
    whiteSpace: 'nowrap',
    marginLeft: '6px',
    flexShrink: 0
  },

  // Bottom Navigation (Mobile)
  bottomNav: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#ffffff',
    borderTop: '1px solid #e2e8f0',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '60px',
    zIndex: 50,
    paddingBottom: 'env(safe-area-inset-bottom)'
  },
  bottomNavItem: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '2px',
    padding: '8px 4px',
    border: 'none',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    position: 'relative'
  },
  bottomNavLabel: {
    fontSize: '0.65rem'
  },
  activeDot: {
    position: 'absolute',
    bottom: '4px',
    width: '4px',
    height: '4px',
    backgroundColor: '#4f46e5',
    borderRadius: '50%'
  }
};

// --- MOBILE/TABLET OPTIMIZATION ---
if (typeof window !== 'undefined') {
  const w = window.innerWidth;
  if (w < 768) {
    styles.title.fontSize = '1.15rem';
    styles.subtitle.fontSize = '0.75rem';
    styles.sectionTitle.fontSize = '0.8rem';
    styles.carouselContainer.height = '120px';
    
    styles.statsGrid.gap = '0.4rem';
    styles.statCard.padding = '0.6rem';
    styles.statCard.minHeight = '55px';
    styles.statLabel.fontSize = '0.6rem';
    styles.statValue.fontSize = '1rem';
    styles.statIconWrap.padding = '3px';
    
    styles.tutorialSection.padding = '0.6rem';
    styles.tutorialCard.padding = '0.6rem';
    styles.stepBadge.width = '18px';
    styles.stepBadge.height = '18px';
    styles.stepBadge.fontSize = '0.6rem';
    styles.tutorialTitle.fontSize = '0.7rem';
    styles.tutorialDesc.fontSize = '0.6rem';
    styles.tutorialLink.fontSize = '0.6rem';
    
    styles.activitiesSection.padding = '0.6rem';
    styles.seeAllBtn.fontSize = '0.6rem';
    styles.seeAllBtn.padding = '3px 6px';
    styles.activityItem.padding = '5px';
    styles.activityTitle.fontSize = '0.65rem';
    styles.activityDate.fontSize = '0.55rem';
    styles.scoreBadge.fontSize = '0.55rem';
    styles.scoreBadge.padding = '1px 4px';
    
    styles.cvProgressContainer.padding = '10px';
    styles.progressBar.height = '6px';
    styles.cvHint.fontSize = '0.65rem';
  } else if (w < 1024) {
    styles.title.fontSize = '1.25rem';
    styles.statCard.padding = '0.7rem';
    styles.statLabel.fontSize = '0.65rem';
    styles.statValue.fontSize = '1.1rem';
    styles.carouselContainer.height = '130px';
    styles.tutorialTitle.fontSize = '0.75rem';
    styles.tutorialDesc.fontSize = '0.65rem';
  }
}