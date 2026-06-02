import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css';
import SmoothScrollProvider from '@/components/providers/SmoothScrollProvider';

export const metadata: Metadata = {
  title: 'Jonathan Tubac — Full Stack Developer',
  description:
    'Building premium web applications — SaaS platforms, dashboards, and digital products from idea to production.',
  keywords: ['Full Stack Developer', 'React', 'Next.js', 'Node.js', 'TypeScript', 'Guatemala'],
  authors: [{ name: 'Jonathan Tubac' }],
  openGraph: {
    title: 'Jonathan Tubac — Full Stack Developer',
    description:
      'Building premium web applications — SaaS platforms, dashboards, and digital products from idea to production.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jonathan Tubac — Full Stack Developer',
    description: 'Building premium web applications.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="bg-bg text-white font-sans antialiased">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
