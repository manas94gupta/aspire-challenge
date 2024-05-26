import type { Metadata } from 'next';

// Fonts
import { Open_Sans } from 'next/font/google';

// Styles
import '~/styles/globals.css';

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Aspire Challenge',
  description: 'Aspire app cards view',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.variable} font-sans`}>{children}</body>
    </html>
  );
}
