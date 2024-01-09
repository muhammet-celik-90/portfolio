import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import './globals.css'
import Navbar from './ui/navbar/navbar'

const inter = Inter({ subsets: ['latin'] })
const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: '%s | Muhammet ÇELİK',
    default: 'Muhammet ÇELİK'
  },
  description: "Frontend Developer Muhammet ÇELİK'e ait portfolio/tanıtım sitesidir.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="forest">
      <body className={montserrat.className}>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
