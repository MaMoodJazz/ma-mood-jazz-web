import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/app/globals.css';
import Navbar from '@/components/menu/Navbar';
import { cn } from '@/lib/tailwindUtil';

const font = Inter({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-inter',
  preload: true,
  display: 'block',
});

export const metadata: Metadata = {
  title: 'Ma Mood Jazz',
  description: 'Ma Mood Jazz',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          'min-h-screen bg-background font-serif antialiased',
          font.variable,
          'dark',
        )}
      >
        <Navbar />
        <div>{children}</div>
      </body>
    </html>
  );
}
