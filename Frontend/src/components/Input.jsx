import React, { useState } from 'react';

/**
 * Input component dengan responsive design
 * @param {string} type - Input type (text, email, password, etc)
 * @param {string} placeholder - Placeholder text
 * @param {string} label - Label text
 * @param {string} value - Input value
 * @param {function} onChange - Change handler
 * @param {boolean} error - Error state
 * @param {string} errorMessage - Error message
 * @param {string} className - Additional Tailwind classes
 * @param {ReactNode} icon - Icon component
 * @param {ReactNode} rightIcon - Right side icon
 */
export const Input = ({
  type = 'text',
  placeholder = '',
  label = '',
  value = '',
  onChange,
  error = false,
  errorMessage = '',
  className = '',
  icon: Icon = null,
  rightIcon: RightIcon = null,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const containerClasses = 'w-full';
  
  const inputClasses = `
    w-full h-12 md:h-11 px-4 py-3 
    bg-bg-secondary border border-border-light rounded-lg
    text-text-primary placeholder-text-muted
    focus:outline-none focus:ring-2 focus:ring-primary-bright focus:border-primary-dark
    transition-all duration-200
    ${error ? 'border-red-500 focus:ring-red-200' : ''}
    ${Icon ? 'pl-10' : ''}
    ${RightIcon ? 'pr-10' : ''}
    ${className}
  `.trim();

  return (
    <div className={containerClasses}>
      {label && (
        <label className="block text-sm font-semibold text-text-secondary mb-2">
          {label}
        </label>
      )}
      
      <div className="relative">
        {Icon && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-muted">
            {Icon}
          </div>
        )}
        
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={inputClasses}
          {...props}
        />
        
        {RightIcon && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-text-muted cursor-pointer">
            {RightIcon}
          </div>
        )}
      </div>
      
      {error && errorMessage && (
        <p className="text-sm text-red-600 mt-1 flex items-center gap-1">
          <span>⚠</span> {errorMessage}
        </p>
      )}
    </div>
  );
};

/**
 * Password input dengan show/hide toggle
 */
export const PasswordInput = ({
  label = 'Password',
  placeholder = 'Masukkan password',
  value = '',
  onChange,
  error = false,
  errorMessage = '',
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-semibold text-text-secondary mb-2">
          {label}
        </label>
      )}
      
      <div className="relative">
        <LockIcon />
        
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`
            w-full h-12 md:h-11 px-4 pl-10 py-3
            bg-bg-secondary border border-border-light rounded-lg
            text-text-primary placeholder-text-muted
            focus:outline-none focus:ring-2 focus:ring-primary-bright focus:border-primary-dark
            transition-all duration-200
            ${error ? 'border-red-500 focus:ring-red-200' : ''}
          `.trim()}
          {...props}
        />
        
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-text-muted hover:text-text-primary transition-colors"
        >
          {showPassword ? <EyeOffIcon /> : <EyeIcon />}
        </button>
      </div>
      
      {error && errorMessage && (
        <p className="text-sm text-red-600 mt-1">⚠ {errorMessage}</p>
      )}
    </div>
  );
};

// Icon imports
const LockIcon = () => (
  <svg width="20" height="20" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-muted" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="11" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M7 11V7C7 4.24 8.5 2 12 2C15.5 2 17 4.24 17 7V11" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
  </svg>
);

const EyeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M2 12C2 12 5 6 12 6C19 6 22 12 22 12C22 12 19 18 12 18C5 18 2 12 2 12Z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
  </svg>
);

const EyeOffIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 3L21 21" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10.5 7.5C9 8.5 8 10 8 12C8 15.3 10.3 18 12.5 18M20 12C20 12 17.5 16 12.5 18M4 12C4 12 6.5 8 12 6C15 5 17.5 6 19.5 8" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
