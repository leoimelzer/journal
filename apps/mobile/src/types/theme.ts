import type { ColorSchemeName } from 'react-native'

export interface Theme {
  name: NonNullable<ColorSchemeName>
  colors: {
    primary: string
    secondary: string
    accent: string
    neutral: string
    alert: string
    background: string
    card: string
    border: string
    text: {
      primary: string
      secondary: string
      placeholder: string
    }
    success: {
      background: string
      text: string
      border: string
    }
    error: {
      background: string
      text: string
      border: string
    }
    warning: {
      background: string
      text: string
      border: string
    }
    info: {
      background: string
      text: string
      border: string
    }
    note: {
      background: string
      text: string
      border: string
    }
  }
}
