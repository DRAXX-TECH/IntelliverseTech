'use client';

import { useTheme } from '@/app/theme-provider';

export default function ThemeLabel() {
  const { theme, mounted } = useTheme();
  
  if (!mounted) {
    return <span className="theme-label">Loading...</span>;
  }
  
  return (
    <span className="theme-label">
      {theme === 'dark' ? 'Dark Mode' : 'Light Mode'}
    </span>
  );
}