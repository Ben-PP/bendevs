import { groq } from 'next-sanity'

export const FRONT_PAGE_BLOCKS = groq`
  *[_type == "frontpage"] {
    ...,
    items[] ->
  }
`
export const ABOUT_PAGE_BLOCKS = groq`
  *[_type == "aboutpage"] {
    ...,
    items[] ->
  }
`
