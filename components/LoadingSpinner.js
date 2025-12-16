// components/LoadingSpinner.js
export default function LoadingSpinner({ size = 'md', color = 'currentColor' }) {
  const sizes = {
    sm: '16px',
    md: '24px', 
    lg: '32px',
    xl: '48px'
  };
  
  return (
    <div className="loading-spinner">
      <style jsx>{`
        .loading-spinner {
          width: ${sizes[size]};
          height: ${sizes[size]};
          border: 2px solid transparent;
          border-top-color: ${color};
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}