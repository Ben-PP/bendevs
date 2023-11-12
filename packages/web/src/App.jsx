import { Routes, Route } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import Navbar from './components/navigation/Navbar'
import FrontPage from './components/pages/FrontPage'
import AboutView from './components/pages/AboutView'
import ProjectsView from './components/pages/projects/ProjectsView'
import ContactView from './components/pages/ContactView'
import ExperienceView from './components/pages/ExperienceView copy'
import frontpageService from './services/frontpage'

const App = () => {
  const resultContent = useQuery({
    queryKey: ['frontpage'],
    queryFn: frontpageService.getFrontpage
  })

  return (
    <div>
      <Navbar />
      <div>
        <Routes>
          <Route
            path='/'
            element={
              <FrontPage
                content={resultContent.isSuccess ? resultContent.data : null}
              />
            }
          ></Route>
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
