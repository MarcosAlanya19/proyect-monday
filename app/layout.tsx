import '@/styles/globals.css';
import { Metadata, Viewport } from 'next';
import { siteConfig } from '@/config/site';
import { fontSans } from '@/config/fonts';
import { Providers } from './providers';
import { Navbar } from '@/components/navbar';
import { Link } from '@nextui-org/link';
import clsx from 'clsx';

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: '/favicon.ico',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head />
      <body className={clsx('min-h-screen bg-background font-sans antialiased', fontSans.variable)}>
        <Providers themeProps={{ attribute: 'class', defaultTheme: 'dark' }}>
          <div className='relative flex flex-col min-h-screen'>
            <Navbar />
            <main className='container mx-auto px-8 flex-grow'>{children}</main>
            <footer className='w-full flex items-center justify-center py-3 pt-6'>
              <Link isExternal className='flex items-center gap-1 text-current' href='https://nextui-docs-v2.vercel.app?utm_source=next-app-template' title='nextui.org homepage'>
                <span className='text-default-600'>Creado por </span>
                <p className='text-primary'>ESTRELLITAS</p>
              </Link>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
