import PropTypes from 'prop-types'
import BlockContent from '@sanity/block-content-to-react'

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
