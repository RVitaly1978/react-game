import React from 'react';

interface IErrorMessageProps {
  error: string | null;
  classes?: string | undefined;
};

const ErrorMessage: React.FC<IErrorMessageProps> = ({ error, classes }) => {
  if (error) {
    return (
      <div className={classes}>
        {error}
      </div>
    );
  }

  return null;
};

export default ErrorMessage;
