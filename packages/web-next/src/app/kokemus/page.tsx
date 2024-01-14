import sanityClient from 'sanityClient'
import { JOBS_LIST_ITEMS } from 'queries'
import fetchOptions from 'utils/fetchOption'
import { Metadata } from 'next'
import { FilteringPage } from 'components/panels'
import { JobData } from 'types'

export const metadata: Metadata = {
  title: 'Bendevs | Työkokemus',
  description: `Tällä sivulla voit tutustua mitä Karel Parkkola on tehnyt
  työelämässä. Työkokemusta löytyy esimerkiksi webmasterina,
  palvelinylläpidosta ja ohjelmoinnin opettamisesta.`
}

const ExperienceView = async () => {
  const experiences: JobData[] = await sanityClient.fetch(
    JOBS_LIST_ITEMS,
    fetchOptions
  )
  const tags: string[] = []
  experiences.forEach((experience) => {
    if (!experience.tags) experience.tags = []
    experience.tags.forEach((tag) => {
      if (!tags.includes(tag)) {
        tags.push(tag)
      }
    })
  })

  return <FilteringPage title='Työkokemus' items={experiences} tags={tags} />
}

export default ExperienceView
