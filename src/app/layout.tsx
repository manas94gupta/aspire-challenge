// Libraries
import type { Metadata } from 'next';

// UI Components
import { Toaster } from '~/components/ui/toaster';
import { TooltipProvider } from '~/components/ui/tooltip';

// Components
import { AppLayout } from '~/components/applayout/app-layout';

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
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${openSans.variable} font-sans`}>
        <TooltipProvider delayDuration={0}>
          <AppLayout>{children}</AppLayout>
          <Toaster />
        </TooltipProvider>
      </body>
    </html>
  );
}
