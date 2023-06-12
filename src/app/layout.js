import Header from '@/components/Header'
import './globals.css'
import { Figtree } from "next/font/google";

const font = Figtree({ subsets: ["latin"] });

export const metadata = {
  title: 'Alex Information',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        {children}
      </body>
    </html>
  )
}
