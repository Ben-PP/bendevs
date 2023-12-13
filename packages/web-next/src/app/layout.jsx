import './globals.css'
import Navbar from '../components/navigation/Navbar'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Bendevs',
  description: 'Homepage of Karel Parkkola'
}

const RootLayout = ({ children }) => {
  const navbarHeight = 'h-16'
  return (
    <html lang='en'>
      <body className='flex flex-col'>
        <div className='min-h-screen flex-grow flex flex-col'>
          <Navbar height={navbarHeight} />

          <div className={navbarHeight}></div>
          <div className={` flex-grow flex flex-col w-screen`}>{children}</div>
        </div>
        <Footer />
      </body>
    </html>
  )
}

export default RootLayout
