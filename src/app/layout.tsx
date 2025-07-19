

import { Inter } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import './globals.css';
import StarryBubblesBg from '@/components/StarryBubblesBg';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <StarryBubblesBg />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
