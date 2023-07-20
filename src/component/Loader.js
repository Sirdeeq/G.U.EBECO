import React from 'react';

export default function Loader({ size = 'small' }) {
  const getSizeClassName = () => {
    switch (size) {
      case 'small':
        return 'w-4 h-4';
      case 'medium':
        return 'w-6 h-6';
      case 'large':
        return 'w-8 h-8';
      default:
        return 'w-4 h-4';
    }
  };

  return (
    <div>
      <div className="flex items-center justify-center space-x-2">
        <div className={`rounded-full animate-pulse dark:bg-violet-400 ${getSizeClassName()}`}></div>
        <div className={`rounded-full animate-pulse dark:bg-violet-400 ${getSizeClassName()}`}></div>
        <div className={`rounded-full animate-pulse dark:bg-violet-400 ${getSizeClassName()}`}></div>
      </div>
    </div>
  );
}
