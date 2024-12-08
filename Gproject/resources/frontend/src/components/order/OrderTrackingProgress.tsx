import React from 'react';

interface OrderTrackingProgressProps {
  progress: number;
}

export default function OrderTrackingProgress({ progress }: OrderTrackingProgressProps) {
  return (
    <div className="absolute top-5 left-5 right-5 h-0.5 bg-gray-200 dark:bg-gray-700">
      <div 
        className="h-full bg-green-500 transition-all duration-500"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}