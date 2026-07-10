import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-display' });

export const metadata: Metadata = {
  title: 'AllJobAssam Pro | Premium Job Portal',
  description: 'Latest Govt, Private, and Assam Jobs',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans bg-slate-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 min-h-screen flex flex-col selection:bg-blue-500 selection:text-white">
        
          <Header />
          <main className="flex-1 w-full">
            {children}
          </main>
          <Footer />
        
      </body>
    </html>
  );
}
