import { Routes, Route } from 'react-router-dom'
import Navbar from './components/navigation/Navbar'
import FrontPage from './components/pages/FrontPage'
import AboutView from './components/pages/AboutView'
import ProjectsView from './components/pages/projects/ProjectsView'
import ContactView from './components/pages/ContactView'
import ExperienceView from './components/pages/ExperienceView copy'

const App = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Routes>
          <Route path='/' element={<FrontPage />}></Route>
          <Route path='/about' element={<AboutView />}></Route>
          <Route path='/projects' element={<ProjectsView />}></Route>
          <Route path='/experience' element={<ExperienceView />}></Route>
          <Route path='/contact' element={<ContactView />}></Route>
        </Routes>
      </div>
    </div>
  )
}

export default App
