import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './../styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mis Proyectos - Portafolio',
  description: 'Explora mi trabajo y descarga lo que necesites',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}