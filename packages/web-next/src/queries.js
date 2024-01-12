import { groq } from 'next-sanity'

export const FRONT_PAGE_BLOCKS = groq`
  *[_type == "frontpage"][0] {
    items[] ->
  }.items[]
`
export const ABOUT_PAGE_BLOCKS = groq`
  *[_type == "aboutpage"][0] {
    items[] ->
  }.items[]
`
export const PROJECTS_LIST_ITEMS = groq`
  *[_type == "projectsList"][0] {
    items[] ->
  }.items
`
export const JOBS_LIST_ITEMS = groq`
  *[_type == "jobsList"][0] {
    items[] ->
  }.items
`
export const SOCIAL_LINKS = groq`
  *[_type == "socialLinkList"][0] {
    items[] ->
  }.items
`
export const PROFILE_IMAGE_URL = groq`
  *[_type == "mainSettings"][0].profileImage.asset -> url
`
export const PROFILE = groq`
  *[_type == "mainSettings"][0] {
    name,
    bio,
    skills,
    linkedin,
    github
  }
`
