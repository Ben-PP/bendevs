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

interface SanityDocumentData {
  _type: string
  _createdAt: string
  _updatedAt: string
  _rev: string
  _id: string
}

export interface PortableTextBlockData extends SanityDocumentData {
  content: PortableTextBlock[]
}
