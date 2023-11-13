const ProjectCard = ({ project }) => {
  return (
    <div>
      <h2>{project.name}</h2>
      <p>{project.shortDescription}</p>
    </div>
  )
}

export default ProjectCard
