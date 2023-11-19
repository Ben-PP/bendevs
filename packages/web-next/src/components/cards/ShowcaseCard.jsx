/**
 * Showcase something with a title, description and tags!
 * @param {Object} child Child with name, shortDescription and tags fields
 * @returns {ReactElement} Component showcasing the child
 */
const ShowcaseCard = ({ icon, child }) => {
  return (
    <div>
      <h2>{child.name}</h2>
      <p>{child.shortDescription}</p>
      <ul className='flex space-x-3'>
        {child.tags.map((tag) => {
          return <li key={tag}>{tag}</li>
        })}
      </ul>
    </div>
  )
}

export default ShowcaseCard
