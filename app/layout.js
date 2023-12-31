import { Inter } from 'next/font/google'
import './globals.css'

import Navigation from './components/Navigation'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Lemurian Agency',
  description: 'Creation & développement web par Lemurian Agency',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#232323] overflow-x-hidden w-full`}>
        <Navigation />
        {children}
        <Footer className="bg-[#232323] py-16 md:py-24"/>
      </body>
    </html>
  )
}
