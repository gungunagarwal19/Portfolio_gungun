import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Caveat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"], variable: '--font-sans' });
const _geistMono = Geist_Mono({ subsets: ["latin"], variable: '--font-mono' });
const _caveat = Caveat({ subsets: ["latin"], weight: '400', variable: '--font-handwriting' });

export const metadata: Metadata = {
  title: 'Gungun - Full Stack Developer',
  description: 'Full Stack Developer | MERN | DSA Enthusiast | IIITV Student',
  generator: 'v0.app',
  keywords: ['Full Stack', 'Developer', 'MERN', 'React', 'Node.js', 'MongoDB'],
  authors: [{ name: 'Gungun' }],
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#7c3aed',
  colorScheme: 'dark',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${_geist.variable} ${_geistMono.variable} ${_caveat.variable} font-sans antialiased bg-background text-foreground`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
