import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Internet Money Media | Digital Content Creation & Media Services',
  description: 'Professional digital content creation, social media management, and media production services.',
  icons: {
    icon: '/images/internetmoneymedia.ico',
    shortcut: '/images/internetmoneymedia.ico',
    apple: '/images/internetmoneymedia.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
} 