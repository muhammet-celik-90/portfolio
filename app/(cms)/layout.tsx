import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Studio | Muhammet ÇELİK',
  description: "Frontend Developer Muhammet ÇELİK'e ait portfolio/tanıtım sitesinin admin panelidir.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="forest">
      <body className={montserrat.className}>
        {children}
      </body>
    </html>
  )
}
