import React from 'react';
import { Loader2 } from 'lucide-react';

const LoadingSpinner = ({ size = 'md', text = 'Loading...' }) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  return (
    <div className="flex flex-col items-center justify-center py-12" role="status" aria-live="polite">
      <Loader2 
        className={`${sizeClasses[size]} text-pink-600 animate-spin`} 
        aria-hidden="true"
      />
      <span className="sr-only">{text}</span>
      <p className="mt-4 text-gray-500 text-sm">{text}</p>
    </div>
  );
};

export default LoadingSpinner;
