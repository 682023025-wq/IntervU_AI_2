import React from 'react';

/**
 * Button component dengan responsive design
 * @param {string} variant - 'primary' | 'secondary' | 'ghost'
 * @param {string} size - 'sm' | 'md' | 'lg'
 * @param {boolean} loading - Show loading state
 * @param {boolean} disabled - Disabled state
 * @param {string} className - Additional Tailwind classes
 * @param {ReactNode} children - Button content
 * @param {...object} props - Other props (onClick, etc)
 */
export const Button = ({
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  className = '',
  children,
  ...props
}) => {
  const baseClasses = 'font-semibold rounded-lg transition-all duration-200 flex items-center justify-center gap-2 whitespace-nowrap focus:ring-2 focus:ring-primary outline-none';

  const variantClasses = {
    primary: 'bg-primary text-ink hover:bg-primary-deep shadow-md hover:shadow-lg disabled:opacity-50',
    secondary: 'bg-bg-secondary border border-border-light text-primary-dark hover:bg-primary-light hover:border-primary-bright disabled:opacity-50',
    ghost: 'text-primary-dark hover:bg-bg-secondary disabled:opacity-50'
  };

  const sizeClasses = {
    sm: 'px-3 py-2 text-sm min-h-10',
    md: 'px-5 py-3 text-base min-h-12',
    lg: 'px-6 py-4 text-lg min-h-14 md:px-8'
  };

  const finalClassName = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`.trim();

  return (
    <button
      className={finalClassName}
      disabled={disabled || loading}
      {...props}
    >
      {loading && <LoaderSpinner />}
      {children}
    </button>
  );
};

const LoaderSpinner = () => (
  <svg 
    width="18" 
    height="18" 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className="animate-spin"
  >
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" opacity="0.3"/>
    <path d="M12 2C6.48 2 2 6.48 2 12" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round"/>
  </svg>
);
