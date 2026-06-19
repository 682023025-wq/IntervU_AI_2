// src/features/CV/cvData.js

export const DEFAULT_CV_DATA = {
  profileSummary: '',
  photo: { url: '', publicId: '' },
  contactInfo: [],
  skills: [],
  workExperience: [],
  internshipExperience: [],
  organizationExperience: [],
  committeeExperience: [],
  education: [],
  certifications: [],
  projects: [],
  achievements: [],
  languages: [],
  additionalInfo: '',
  template: 'modern',
  lastUpdated: new Date().toISOString()
};

// Data Demo untuk testing tampilan & backend
export const DEMO_CV_DATA = {
  profileSummary: 'Mahasiswa Sistem Informasi dengan minat kuat di Backend Development. Berpengalaman membangun RESTful API menggunakan Python dan Node.js. Memiliki kemampuan problem-solving yang baik dan terbiasa bekerja dalam tim Agile.',
  photo: { url: 'https://ui-avatars.com/api/?name=Raihan+Agil&background=0F4C75&color=fff&size=256', publicId: 'demo_photo' },
 // Update bagian contactInfo di DEMO_CV_DATA:
  contactInfo: [
    { type: 'email', value: 'raihan.agil@email.com' },
    { type: 'phone', value: '+62 812-3456-7890' },
    { type: 'address', value: 'Jakarta, Indonesia' },
    { type: 'linkedin', value: 'linkedin.com/in/raihanagil' },
    { type: 'github', value: 'github.com/raihanagil' },
    { type: 'website', value: 'raihanagil.dev' },
    { type: 'stackoverflow', value: 'stackoverflow.com/users/12345/raihanagil' },
    { type: 'instagram', value: '@raihan.agil' },
    { type: 'devto', value: 'dev.to/raihanagil' }
  ],
  skills: [
    { id: 's1', name: 'JavaScript', level: 4 },
    { id: 's2', name: 'Python', level: 3 },
    { id: 's3', name: 'React.js', level: 3 },
    { id: 's4', name: 'Node.js', level: 3 },
    { id: 's5', name: 'PostgreSQL', level: 2 },
    { id: 's6', name: 'Docker', level: 2 }
  ],
  // Ganti bagian projects di DEMO_CV_DATA menjadi seperti ini:
  projects: [
    { 
      id: 'p1', 
      name: 'IntervU AI', 
      role: 'Fullstack Developer', 
      technologies: 'React, Flask, Supabase', 
      description: 'Platform mock interview berbasis AI.',
      links: [
        { id: 'l1', type: 'github', url: 'github.com/raihanagil/intervu' },
        { id: 'l2', type: 'website', url: 'intervu-ai.com' },
        { id: 'l3', type: 'instagram', url: '@intervu.ai' }
      ] 
    }
  ],
  workExperience: [
    { id: 'w1', position: 'Backend Developer Intern', company: 'PT. Teknologi Maju', location: 'Jakarta (Remote)', startDate: '2023-06', endDate: '2023-12', description: '• Mengembangkan REST API menggunakan Express.js.\n• Mengoptimasi query database sehingga meningkatkan performa 30%.' }
  ],
  internshipExperience: [
    { id: 'i1', position: 'Web Developer Intern', company: 'Startup ABC', location: 'Bandung', startDate: '2022-07', endDate: '2022-09', description: '• Membantu maintenance website perusahaan.\n• Membuat fitur landing page baru.' }
  ],
  organizationExperience: [
    { id: 'o1', position: 'Ketua Divisi R&D', organization: 'Himpunan Mahasiswa Informatika', period: '2022 - 2023', description: 'Memimpin tim riset teknologi dan mengadakan 3 workshop pemrograman.' }
  ],
  committeeExperience: [
    { id: 'c1', position: 'Koordinator Acara', eventName: 'ISFEST 2023', period: '2023', description: 'Mengatur rundown acara untuk 500+ peserta.' }
  ],
  education: [
    { id: 'e1', degree: 'S1 Sistem Informasi', institution: 'Universitas Indonesia', location: 'Depok', startDate: '2020-08', endDate: '2024-08', gpa: '3.75', description: 'Fokus pada Rekayasa Perangkat Lunak dan Basis Data.' }
  ],
  certifications: [
    { id: 'cert1', name: 'Belajar Membuat Aplikasi Web dengan React', issuer: 'Dicoding', date: '2023-01', link: 'dicoding.com/certificates/...' }
  ],
  projects: [
    { id: 'p1', name: 'IntervU AI', role: 'Fullstack Developer', technologies: 'React, Flask, Supabase', link: 'github.com/raihanagil/intervu', description: 'Platform mock interview berbasis AI untuk membantu mahasiswa mempersiapkan wawancara kerja.' }
  ],
  achievements: [
    { id: 'a1', title: 'Juara 2 Hackathon Nasional', event: 'Gemastik 2023', date: '2023-10', description: 'Membuat aplikasi kesehatan mental berbasis AI.' }
  ],
  languages: [
    { id: 'l1', language: 'Indonesia', proficiency: 'Native' },
    { id: 'l2', language: 'English', proficiency: 'Mahir' }
  ],
  additionalInfo: 'Hobi: Open Source Contributor, Menulis Blog Teknologi, Futsal.',
  template: 'modern',
  lastUpdated: new Date().toISOString()
};