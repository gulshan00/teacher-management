import './globals.css'
import { ReactNode } from 'react'


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="flex">
        <main className="flex-1 bg-gray-100 min-h-screen">
          {children}
        </main>
      </body>
    </html>
  )
}
