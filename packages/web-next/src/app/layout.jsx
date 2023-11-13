import './globals.css'
import Navbar from '../components/navigation/Navbar'

export const metadata = {
  title: 'Bendevs',
  description: 'Homepage of Karel Parkkola'
}

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}

export default RootLayout
