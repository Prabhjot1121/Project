import './globals.css'
import Navbar from '@/Components/Navbar'
import Main from '@/Components/Main'
import About from '@/Components/About'
import { Inter } from 'next/font/google'
import Skills from '@/Components/Skills'
import Services from '@/Components/Services'
import Contact from '@/Components/Contact'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Prabhjot Singh | PortFolio',
  description: 'Created by Prabhjot Singh',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Navbar />
        <Main />
        <About />
        <Skills />
        <Services />
        <Contact />
      </body>
    </html>


  )
}
