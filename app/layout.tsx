import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'House Celestre - Coming Soon',
  description: 'Something beautiful is on the horizon',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
