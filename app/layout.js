// app/layout.js
import './globals.css';
import { ThemeProvider } from './theme-provider';
import ChatBox from '@/components/ChatBox';

export const metadata = {
  title: 'Intelliverse Technologies | AI & Blockchain Solutions',
  description: 'Professional AI, Blockchain, and Cloud Solutions for Modern Businesses',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          {children}
          <ChatBox />
        </ThemeProvider>
      </body>
    </html>
  );
}