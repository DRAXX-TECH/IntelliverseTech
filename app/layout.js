import './globals.css';
import { ThemeProvider } from './theme-provider';
import ChatBox from '@/components/ChatBox';
import SpaceBackground from '@/components/SpaceBackground';

export const metadata = {
  title: 'Intelliverse Technologies | AI & Blockchain Solutions',
  description: 'Professional AI, Blockchain, and Cloud Solutions for Modern Businesses',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <SpaceBackground />
          {children}
          <ChatBox />
        </ThemeProvider>
      </body>
    </html>
  );
}
