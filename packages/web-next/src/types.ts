import { PortableTextBlock } from '@portabletext/types'

declare global {
  interface Window {
    FIREBASE_APPCHECK_DEBUG_TOKEN: boolean
  }
}

export interface TextProps {
  children: React.ReactNode
  color?: string
  size?: string
  weight?: string
  margin?: string
  wrap?: boolean
}

export enum ButtonType {
  BUTTON = 'button',
  SUBMIT = 'submit',
  RESET = 'reset'
}
export enum ButtonSize {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large'
}

export enum SocialLinkIcon {
  GITHUB = 'github',
  LINKEDIN = 'linkedin'
}

interface SanityDocumentData {
  _type: string
  _createdAt: string
  _updatedAt: string
  _rev: string
  _id: string
}

export interface SocialLinkData extends SanityDocumentData {
  icon: SocialLinkIcon
  text: string
  url: string
}

export interface ExperienceData extends SanityDocumentData {
  title: string
  description: PortableTextBlock[]
  startDate?: string
  endDate?: string
  tags?: string[]
}

export interface JobData extends ExperienceData {
  company: string
  location?: string
}

export interface ProjectData extends ExperienceData {
  github?: string
  availableAt?: string
}

export type ShocaseCardChild = JobData | ProjectData

export interface PortableTextBlockData extends SanityDocumentData {
  content: PortableTextBlock[]
}
