// SVG Icon Components
// All icons are custom SVG with blue palette from StyleGuide

export const LogoIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="20" r="18" stroke="#0F4C75" strokeWidth="2" fill="#E0F2FE"/>
    <path d="M20 12V28M12 20H28" stroke="#0F4C75" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const MailIcon = ({ active = true }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M3 6C3 4.89543 3.89543 4 5 4H19C20.1046 4 21 4.89543 21 6V18C21 19.1046 20.1046 20 19 20H5C3.89543 20 3 19.1046 3 18V6Z" 
      stroke={active ? "#0F4C75" : "#94A3B8"} 
      strokeWidth="2" 
      fill="none"
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <path 
      d="M3 6.5L12 13L21 6.5" 
      stroke={active ? "#0F4C75" : "#94A3B8"} 
      strokeWidth="2" 
      fill="none"
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

export const LockIcon = ({ active = true }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect 
      x="5" 
      y="11" 
      width="14" 
      height="10" 
      rx="2" 
      stroke={active ? "#0F4C75" : "#94A3B8"} 
      strokeWidth="2"
      fill="none"
    />
    <path 
      d="M7 11V7C7 4.24 8.5 2 12 2C15.5 2 17 4.24 17 7V11" 
      stroke={active ? "#0F4C75" : "#94A3B8"} 
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
    />
  </svg>
);

export const EyeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="3" stroke="#0F4C75" strokeWidth="2" fill="none"/>
    <path 
      d="M2 12C2 12 5 6 12 6C19 6 22 12 22 12C22 12 19 18 12 18C5 18 2 12 2 12Z" 
      stroke="#0F4C75" 
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
    />
  </svg>
);

export const EyeOffIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M3 3L21 21" 
      stroke="#0F4C75" 
      strokeWidth="2" 
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path 
      d="M10.5 7.5C9 8.5 8 10 8 12C8 15.3 10.3 18 12.5 18M20 12C20 12 17.5 16 12.5 18M4 12C4 12 6.5 8 12 6C15 5 17.5 6 19.5 8" 
      stroke="#0F4C75" 
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ArrowRightIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M5 12H19M19 12L12 5M19 12L12 19" 
      stroke="#FFFFFF" 
      strokeWidth="2" 
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const LoaderIcon = () => (
  <svg 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className="animate-spin"
  >
    <circle 
      cx="12" 
      cy="12" 
      r="10" 
      stroke="#E0F2FE" 
      strokeWidth="4" 
      fill="none"
    />
    <path 
      d="M12 2C6.48 2 2 6.48 2 12" 
      stroke="#0F4C75" 
      strokeWidth="4" 
      fill="none"
      strokeLinecap="round"
    />
  </svg>
);

export const CheckIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M3 12L9 18L21 6" 
      stroke="#16A34A" 
      strokeWidth="2" 
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const WarningIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M12 2L2 20H22L12 2Z" 
      stroke="#F59E0B" 
      strokeWidth="2" 
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="16" r="1" fill="#F59E0B"/>
    <line x1="12" y1="9" x2="12" y2="14" stroke="#F59E0B" strokeWidth="2"/>
  </svg>
);

export const ErrorIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="#EF4444" strokeWidth="2" fill="none"/>
    <path 
      d="M9 9L15 15M15 9L9 15" 
      stroke="#EF4444" 
      strokeWidth="2" 
      fill="none"
      strokeLinecap="round"
    />
  </svg>
);
