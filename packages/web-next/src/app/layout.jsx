import './globals.css'
import Navbar from '../components/navigation/Navbar'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Bendevs',
  description: 'Homepage of Karel Parkkola'
}

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
      <body>
        <div className='flex flex-col min-h-screen'>
          <Navbar />
          <div className='flex-1 bg-gray-900 pt-2'>{children}</div>
        </div>
        <Footer />
      </body>
    </html>
  )
}

export default RootLayout
