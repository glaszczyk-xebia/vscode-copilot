import React from 'react';

interface ErrorDisplayProps {
  error: string;
  onRetry?: () => void;
}

/**
 * Component for displaying error messages with retry functionality
 * Provides accessible error handling with clear user feedback
 */
export const ErrorDisplay: React.FC<ErrorDisplayProps> = ({ error, onRetry }) => {
  return (
    <section
      className="bg-red-50 border border-red-200 rounded-lg p-6 text-center"
      role="alert"
      aria-live="assertive"
    >
      <div className="flex flex-col items-center">
        <svg
          className="w-12 h-12 text-red-500 mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>

        <h2 className="text-xl font-semibold text-red-800 mb-2">Wystąpił błąd</h2>

        <p className="text-red-700 mb-4 max-w-md">{error}</p>

        {onRetry && (
          <button
            onClick={onRetry}
            className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors duration-200"
            type="button"
          >
            Spróbuj ponownie
          </button>
        )}
      </div>
    </section>
  );
};
