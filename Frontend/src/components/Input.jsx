export function Input({ label, customStyle, className = '', ...props }) {
  return (
    <div className="space-y-1">
      {label && <label className="text-xs font-semibold text-slate-700">{label}</label>}
      <input 
        style={customStyle} // Terima style dari luar
        className={`w-full border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all ${className}`}
        {...props}
      />
    </div>
  );
}