// app/layout.js
import './globals.css';
import Link from 'next/link';
import { Inter } from 'next/font/google';

// Example of using a Google Font (optional)
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'My Portfolio',
  description: 'Welcome to my Next.js 13 portfolio!',
};

import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <nav style={navStyle}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}

const navStyle = {
  display: 'flex',
  gap: '1rem',
  padding: '1rem',
};