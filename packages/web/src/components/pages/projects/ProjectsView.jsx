import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import projectsService from '../../../services/projects'
import ProjectCard from './ProjectCard'

const ProjectsView = () => {
  const resultProjects = useQuery({
    queryKey: ['projects'],
    queryFn: projectsService.getProjects
  })

  return (
    <div>
      <h1>My Projects</h1>
      {resultProjects.isLoading ? (
        <></>
      ) : (
        resultProjects.data.map((project) => {
          return <ProjectCard key={project._id} project={project} />
        })
      )}
    </div>
  )
}

export default ProjectsView
