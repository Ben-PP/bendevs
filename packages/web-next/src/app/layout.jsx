import './globals.css'
import { Roboto_Mono } from 'next/font/google'
import Navbar from '../components/navigation/Navbar'
import Footer from '../components/footer/Footer'

export const metadata = {
  title: 'Bendevs',
  description: 'Karel Parkkolan kotisivut'
}

const roboto = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono'
})

const RootLayout = ({ children }) => {
  const navbarHeight = 'h-16'
  return (
    <html lang='fi' className={`${roboto.variable}`}>
      <body className='flex flex-col bg-secondary text-primary'>
        <div className='min-h-screen flex-grow flex flex-col'>
          <Navbar height={navbarHeight} />
          <div className={navbarHeight}></div>

          <div className={`flex-grow flex flex-col w-full`}>{children}</div>
        </div>
        <Footer />
      </body>
    </html>
  )
}

export default RootLayout
