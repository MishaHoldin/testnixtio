import './globals.css'
import type { Metadata } from 'next'
import { inter, poppins, golosText } from './fonts'

export const metadata: Metadata = {
  title: 'StevensUniversal',
  description: 'Investing in Tomorrow. Today.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${golosText.variable} ${inter.variable} ${poppins.variable}`}>
      <body className="font-primary">
          {children}
      </body>
    </html>
  )
}
