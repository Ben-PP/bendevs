import PropTypes from 'prop-types'

const ProjectCard = ({ project }) => {
  return (
    <div className='border'>
      <h2>{project.name}</h2>
      <p>{project.shortDescription}</p>
    </div>
  )
}

ProjectCard.propTypes = {
  project: PropTypes.object.isRequired
}

export default ProjectCard
