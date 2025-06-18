import React from 'react';

interface ErrorMessageProps {
  message: string;
  onRetry?: () => void;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, onRetry }) => {
  return (
    <div className="error-container">
      <div className="error-content">
        <h2 className="error-title">Wystąpił błąd</h2>
        <p className="error-message">{message}</p>
        {onRetry && (
          <button className="retry-button" onClick={onRetry}>
            Spróbuj ponownie
          </button>
        )}
      </div>
    </div>
  );
};
