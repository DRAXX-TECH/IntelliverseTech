'use client';

import { useTheme } from '@/app/theme-provider';
import { FaSun, FaMoon } from 'react-icons/fa';

export default function ThemeToggle() {
  const { theme, toggleTheme, mounted } = useTheme();

  const handleClick = () => {
    console.log('Current theme before toggle:', theme);
    toggleTheme();
    // Check after state update
    setTimeout(() => {
      console.log('Theme after toggle (delayed):', theme);
      console.log('HTML data-theme:', document.documentElement.getAttribute('data-theme'));
    }, 100);
  };

  if (!mounted) {
    return <div className="theme-toggle-placeholder"></div>;
  }

  console.log('Render - theme:', theme); // Add this to see renders

  return (
    <button 
      onClick={handleClick}
      className="theme-toggle"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      title={`Current: ${theme} mode`}
    >
      <div className="toggle-track">
        <div 
          className="toggle-thumb"
          style={{ 
            left: theme === 'light' ? '2px' : 'calc(100% - 24px)',
            transform: theme === 'light' ? 'translateX(0)' : 'translateX(0)'
          }}
        >
          {theme === 'light' ? (
            <FaSun size={14} color="" />
          ) : (
            <FaMoon size={14} color="#fff" />
          )}
        </div>
      </div>
      {/* Debug text */}
    </button>
  );
}