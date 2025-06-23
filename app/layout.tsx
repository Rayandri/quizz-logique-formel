import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Révision Exam - Quiz EPITA',
  description: 'Quiz de révision pour les examens EPITA : Logique Formelle, Droit, Gestion des Risques',
  generator: 'Next.js',
  keywords: ['EPITA', 'révision', 'examen', 'logique formelle', 'droit', 'gestion des risques', 'quiz', 'QCM'],
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', type: 'image/x-icon' }
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="dark">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
