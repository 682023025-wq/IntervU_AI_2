// src/features/CV/forms/PersonalInfoForm.jsx
import { useState } from 'react';
import { useCV } from '../cvLogic';
import { UploadIcon, PlusIcon, TrashIcon, UserIcon, ContactTypeIcons, ExternalLinkIcon } from '../../../components/Icons';

export default function PersonalInfoForm() {
  const { state, updateProfileSummary, updatePhoto, addContact, removeContact, updateContact } = useCV();
  const { cvData } = state;
  const contactInfo = cvData.contactInfo || [];
  const profileSummary = cvData.profileSummary || '';
  const photo = cvData.photo || { url: '', publicId: '' };

  const getFixedContact = (type) => contactInfo.find(c => c.type === type)?.value || '';
  const handleFixedContact = (type, value) => {
    const exists = contactInfo.find(c => c.type === type);
    if (exists) updateContact(type, value);
    else addContact({ type, value });
  };

  const [newContact, setNewContact] = useState({ type: 'linkedin', value: '' });
  
  // Opsi Populer & Lainnya (Clean, No Emoji)
  const dynamicContactTypes = [
    { value: 'linkedin', label: 'LinkedIn', placeholder: 'linkedin.com/in/username' },
    { value: 'github', label: 'GitHub', placeholder: 'github.com/username' },
    { value: 'website', label: 'Website / Portfolio', placeholder: 'namakamu.com' },
    { value: 'instagram', label: 'Instagram', placeholder: 'instagram.com/username' },
    { value: 'twitter', label: 'Twitter / X', placeholder: 'x.com/username' },
    { value: 'youtube', label: 'YouTube', placeholder: 'youtube.com/@channel' },
    { value: 'tiktok', label: 'TikTok', placeholder: 'tiktok.com/@username' },
    { value: 'other', label: 'Lainnya (Custom)', placeholder: 'https://...' },
  ];

  const handleAddContact = () => {
    if (!newContact.value.trim()) return;
    addContact({ type: newContact.type, value: newContact.value });
    setNewContact({ type: newContact.type, value: '' });
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => updatePhoto({ url: event.target.result, publicId: `photo_${Date.now()}` });
    reader.readAsDataURL(file);
  };

  const dynamicContacts = contactInfo.filter(c => 
    !['email', 'phone', 'address'].includes(c.type)
  );

  return (
    <div className="cv-form-section">
      <div className="cv-form-section-header">
        <div className="cv-section-title-wrap">
          <div className="cv-section-icon"><UserIcon size={18} /></div>
          <div><h3 className="cv-form-section-title">Informasi Pribadi</h3><p className="cv-form-section-desc">Data dasar header CV.</p></div>
        </div>
      </div>

      <div className="cv-photo-upload">
        <label className="cv-photo-label">Foto Profil</label>
        <div className="cv-photo-container">
          {photo.url ? (
            <div className="cv-photo-preview">
              <img src={photo.url} alt="Profile" />
              <button onClick={() => updatePhoto({ url: '', publicId: '' })} className="cv-photo-remove">×</button>
            </div>
          ) : (
            <label className="cv-photo-placeholder">
              <input type="file" accept="image/*" onChange={handlePhotoUpload} hidden />
              <UploadIcon /><span>Upload Foto</span>
            </label>
          )}
        </div>
      </div>

      {/* Field Tetap */}
      <div className="cv-form-grid">
        <div className="cv-form-field">
          <label>Email *</label>
          <input type="email" value={getFixedContact('email')} onChange={(e) => handleFixedContact('email', e.target.value)} placeholder="nama@email.com" />
        </div>
        <div className="cv-form-field">
          <label>Telepon *</label>
          <input type="tel" value={getFixedContact('phone')} onChange={(e) => handleFixedContact('phone', e.target.value)} placeholder="+62 812-3456-7890" />
        </div>
        <div className="cv-form-field cv-form-field-full">
          <label>Alamat</label>
          <input type="text" value={getFixedContact('address')} onChange={(e) => handleFixedContact('address', e.target.value)} placeholder="Jakarta, Indonesia" />
        </div>
      </div>

      <div className="cv-form-field cv-form-field-full">
        <label>Ringkasan Profesional</label>
        <textarea value={profileSummary} onChange={(e) => updateProfileSummary(e.target.value)} placeholder="Tulis 2-3 kalimat tentang dirimu..." rows="4" />
      </div>

      <div className="cv-form-subsection">
        <label className="cv-subsection-title">Tautan Profesional & Media Sosial</label>
        <div className="cv-contact-add-row">
          <select value={newContact.type} onChange={(e) => setNewContact({ ...newContact, type: e.target.value })} className="cv-contact-type-select">
            {dynamicContactTypes.map(ct => <option key={ct.value} value={ct.value}>{ct.label}</option>)}
          </select>
          <input 
            type="text" 
            value={newContact.value} 
            onChange={(e) => setNewContact({ ...newContact, value: e.target.value })} 
            placeholder={dynamicContactTypes.find(ct => ct.value === newContact.type)?.placeholder} 
            onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddContact())} 
          />
          <button type="button" onClick={handleAddContact} className="cv-add-btn"><PlusIcon /></button>
        </div>
        
        {dynamicContacts.length > 0 && (
          <div className="cv-contact-list">
            {dynamicContacts.map((contact, idx) => {
              // Jika tipe 'other', pakai ikon link generik
              const ContactIcon = contact.type === 'other' ? ExternalLinkIcon : (ContactTypeIcons[contact.type] || ExternalLinkIcon);
              const typeLabel = dynamicContactTypes.find(ct => ct.value === contact.type)?.label || 'Tautan';
              
              return (
                <div key={idx} className="cv-contact-item">
                  <span className="cv-contact-icon"><ContactIcon /></span>
                  <span className="cv-contact-type-label">{typeLabel}</span>
                  <span className="cv-contact-value">{contact.value}</span>
                  <button type="button" onClick={() => removeContact(contact.value)} className="cv-contact-remove"><TrashIcon /></button>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}