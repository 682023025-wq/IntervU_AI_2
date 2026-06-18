export function Button({ children, customStyle, className = '', disabled, ...props }) {
  return (
    <button
      disabled={disabled}
      style={customStyle} // Terima style dari luar
      className={`transition-all ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}