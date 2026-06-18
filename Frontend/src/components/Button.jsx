// src/components/Button.jsx
export function Button({ children, className = '', disabled, ...props }) {
  return (
    <button
      disabled={disabled}
      className={`px-4 py-2 rounded-lg font-medium transition-all 
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'} 
        ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}