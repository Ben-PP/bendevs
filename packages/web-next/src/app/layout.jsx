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
      <body>
        <div className='flex flex-col min-h-screen'>
          <div>
            <Navbar height={navbarHeight} />
          </div>
          <div className={navbarHeight}></div>
          <div className='flex-grow  bg-gray-900'>{children}</div>
        </div>
        <Footer />
      </body>
    </html>
  )
}

export default RootLayout
