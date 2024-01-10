import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import './globals.css'
import Navbar from './ui/navbar/navbar'
import { sharedMetadata } from './lib/metadata/sharedMetadata'

const inter = Inter({ subsets: ['latin'] })
const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: `%s | ${sharedMetadata.title}`,
    default: sharedMetadata.title, // a default is required when creating a template
  },
  //metadataBase: new URL(sharedMetadata.baseURL),
  robots: sharedMetadata.robots,
  authors: {name: sharedMetadata.author},
  description: sharedMetadata.description,
  openGraph: {
    title: sharedMetadata.title,
    description: sharedMetadata.description,
    type: "website",
    //url: sharedMetadata.baseURL,
    images: [{url: sharedMetadata.ogImageURL}],
    siteName: sharedMetadata.siteName
  },
};


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
