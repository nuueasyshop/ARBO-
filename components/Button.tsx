import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-bold px-8 py-4 transition-colors duration-200 text-sm md:text-base uppercase tracking-wider rounded-full";
  
  const variants = {
    primary: "bg-hi-vis-orange text-white hover:bg-orange-600 active:bg-orange-700 shadow-sm",
    secondary: "bg-deep-forest text-white hover:bg-green-900 active:bg-green-950",
    outline: "border-2 border-deep-forest text-deep-forest hover:bg-deep-forest hover:text-white"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};