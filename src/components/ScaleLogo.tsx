import React from 'react';

interface ScaleLogoProps {
  className?: string;
  variant?: 'icon' | 'full';
}

const ScaleLogo: React.FC<ScaleLogoProps> = ({ className = '', variant = 'full' }) => {
  // Icon only version
  if (variant === 'icon') {
    return (
      <img 
        src="/scale-icon.svg" 
        alt="Scale Logo" 
        className={`h-12 w-auto ${className}`}
      />
    );
  }
  
  // Full logo version
  return (
    <img 
      src="/scale-logo.svg" 
      alt="Scale Logo" 
      className={`h-12 w-auto ${className}`}
    />
  );
};

export default ScaleLogo;
