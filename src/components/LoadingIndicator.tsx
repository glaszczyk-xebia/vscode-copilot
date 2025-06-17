import React from 'react';
import { LOADING_MESSAGES, ACCESSIBILITY_LABELS } from '../constants/api.constants';

interface LoadingIndicatorProps {
  message?: string;
  size?: 'small' | 'medium' | 'large';
}

/**
 * Accessible loading indicator component
 * Provides visual and screen reader feedback during loading states
 */
export const LoadingIndicator: React.FC<LoadingIndicatorProps> = ({
  message = LOADING_MESSAGES.LOADING_ARTWORKS,
  size = 'medium',
}) => {
  const sizeClasses = {
    small: 'w-4 h-4',
    medium: 'w-8 h-8',
    large: 'w-12 h-12',
  };

  return (
    <div
      className="flex flex-col items-center justify-center p-8"
      role="status"
      aria-label={ACCESSIBILITY_LABELS.LOADING_INDICATOR}
    >
      <div
        className={`${sizeClasses[size]} border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin`}
        aria-hidden="true"
      />
      <p className="mt-4 text-gray-600 text-center" aria-live="polite">
        {message}
      </p>
    </div>
  );
};
