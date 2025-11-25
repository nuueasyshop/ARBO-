import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`flex items-center tracking-tight select-none ${className}`}>
      <span className="font-black text-3xl md:text-4xl text-deep-forest">Ar</span>
      <span className="font-black text-3xl md:text-4xl text-deep-forest tracking-tighter">bo</span>
      <div className="ml-2 px-2 py-0.5 bg-hi-vis-orange rounded-md transform -skew-x-6">
        <span className="font-bold text-white text-sm md:text-base tracking-wide transform skew-x-6 uppercase">
          Cut-Safe
        </span>
      </div>
    </div>
  );
};