import React from 'react';

export default function GlassPanel({ children, className = "" }) {
  return (
    <div className={`glass-card rounded-3xl p-6 md:p-10 shadow-xl transition-all duration-300 hover:shadow-2xl ${className}`}>
      {children}
    </div>
  );
}
