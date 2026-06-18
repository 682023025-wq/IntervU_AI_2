// src/features/Dashboard/DashboardPage.jsx
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar, BottomNav } from '../../components';
import { useDashboardLogic } from './dashboardLogic';
import './DashboardPage.css';

export default function DashboardPage() {
  const [user, setUser] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();
  const { getUserData, getFirstName } = useDashboardLogic(navigate);

  useEffect(() => {
    const data = getUserData();
    if (data) setUser(data);
  }, [getUserData]);

  // Auto-play carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  if (!user) return <div className="loading">Memuat...</div>;

  const firstName = getFirstName(user.nama_lengkap);

  // Data dummy (nanti diganti dari API)
  const stats = [
    { label: 'Interview Selesai', value: '12', color: '#2563eb', bg: '#dbeafe' },
    { label: 'CV Dibuat', value: '3', color: '#16a34a', bg: '#dcfce7' },
    { label: 'Skor Rata-rata', value: '85', color: '#ea580c', bg: '#ffedd5' },
  ];

  const tutorialSteps = [
    { 
      step: 1, 
      title: 'Lengkapi CV Profesional', 
      description: 'Wajib! Isi data CV Anda sebagai baseline.',
      link: '/cv',
      linkText: 'Isi CV Sekarang',
      color: '#4f46e5'
    },
    { 
      step: 2, 
      title: 'Simulasi Wawancara AI', 
      description: 'Latihan interview dengan Dual AI.',
      link: '/interview',
      linkText: 'Mulai Simulasi',
      color: '#10b981'
    },
    { 
      step: 3, 
      title: 'Revisi CV & Cari Kerja', 
      description: 'Terima saran perbaikan CV otomatis.',
      link: '/jobs',
      linkText: 'Cari Lowongan',
      color: '#f59e0b'
    },
  ];

  const recentActivities = [
    { id: 1, type: 'interview', title: 'Mock Interview - Software Engineer', date: '2 jam yang lalu', score: 88 },
    { id: 2, type: 'cv', title: 'CV Updated', date: '1 hari yang lalu', score: null },
  ];

  return (
    <div className="page-container">
      {/* Navbar Desktop */}
      <Navbar />

      {/* Main Content */}
      <main className="main-content">
        {/* Welcome Section */}
        <div className="welcome-section">
          <h1 className="dashboard-title">Halo, {firstName}!</h1>
          <p className="dashboard-subtitle">Selamat datang kembali di dashboardmu.</p>
        </div>

        {/* Stats Grid */}
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <p className="stat-label">{stat.label}</p>
              <div className="stat-value-row">
                <p className="stat-value">{stat.value}</p>
                <div className="stat-icon-wrap" style={{ backgroundColor: stat.bg }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={stat.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tutorial Carousel */}
        <div className="tutorial-section">
          <div className="section-header">
            <h2 className="section-title">Panduan IntervU AI</h2>
            <div className="carousel-indicators">
              {tutorialSteps.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`carousel-dot ${currentSlide === idx ? 'carousel-dot-active' : ''}`}
                />
              ))}
            </div>
          </div>
          
          <div className="carousel-wrapper">
            <button 
              onClick={() => setCurrentSlide((currentSlide - 1 + tutorialSteps.length) % tutorialSteps.length)}
              className="carousel-btn"
            >
              ←
            </button>
            
            <div className="carousel-container">
              {tutorialSteps.map((item, index) => (
                <div 
                  key={item.step} 
                  className={`tutorial-card ${index === currentSlide ? 'tutorial-card-active' : 'tutorial-card-inactive'}`}
                  style={{
                    borderColor: item.color,
                    transform: `translateX(${(index - currentSlide) * 100}%)`
                  }}
                >
                  <div className="tutorial-header">
                    <span className="step-badge" style={{ backgroundColor: item.color }}>
                      {item.step}
                    </span>
                    <h3 className="tutorial-title">{item.title}</h3>
                  </div>
                  <p className="tutorial-desc">{item.description}</p>
                  <button 
                    onClick={() => navigate(item.link)}
                    className="tutorial-link"
                    style={{ color: item.color }}
                  >
                    {item.linkText} →
                  </button>
                </div>
              ))}
            </div>
            
            <button 
              onClick={() => setCurrentSlide((currentSlide + 1) % tutorialSteps.length)}
              className="carousel-btn"
            >
              →
            </button>
          </div>
        </div>

        {/* Recent Activities */}
        <div className="activities-section">
          <div className="activities-header">
            <h2 className="section-title">Aktivitas Terbaru</h2>
            <button className="see-all-btn">Lihat Semua</button>
          </div>
          
          <div className="activities-list">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="activity-item">
                <div className="activity-content">
                  <div className={`activity-icon-wrap ${activity.type === 'interview' ? 'bg-blue' : 'bg-green'}`}>
                    <span className="activity-icon-text">
                      {activity.type === 'interview' ? '🎤' : '📄'}
                    </span>
                  </div>
                  <div className="activity-text-wrap">
                    <p className="activity-title">{activity.title}</p>
                    <p className="activity-date">{activity.date}</p>
                  </div>
                </div>
                
                {activity.score && (
                  <div className="score-badge">
                    Skor: {activity.score}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Bottom Nav Mobile */}
      <BottomNav />
    </div>
  );
}