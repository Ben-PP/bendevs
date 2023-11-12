import { useQuery } from '@tanstack/react-query'
import BlockContent from '@sanity/block-content-to-react'
import frontpageService from '../../services/frontpage'

const FrontPage = ({ content }) => {
  /*const resultContent = useQuery({
    queryKey: ['frontpage'],
    queryFn: frontpageService.getFrontpage
  })*/

  const serializers = {
    types: {
      block: (props) => {
        switch (props.node.style) {
          case 'h1':
            return <h1 className='text-3xl'>{props.children}</h1>
          default:
            return <p>{props.children}</p>
        }
      }
    }
  }

  return (
    <div className='text-center'>
      {!content ? (
        <></>
      ) : (
        <div className='bg-gray-200'>
          {content.map((frontPageBlock) => {
            return (
              <BlockContent
                key={frontPageBlock._id}
                blocks={frontPageBlock.content}
                serializers={serializers}
              />
            )
          })}
        </div>
      )}
    </div>
  )
}

export default FrontPage
