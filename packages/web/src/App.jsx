import { Routes, Route } from 'react-router-dom'
import Navbar from './components/navigation/Navbar'
import FrontPage from './components/pages/FrontPage'

const App = () => {
  return (
    <div>
      <Navbar />
      <div className=''>
        <Routes>
          <Route path='/' element={<FrontPage />}></Route>
        </Routes>
      </div>
    </div>
  )
}

export default App
