import type { Theme } from '@/types'

export const lightTheme: Theme = {
  name: 'light',
  colors: {
    primary: '#6FC2B1',
    secondary: '#7CB57E',
    accent: '#E0B467',
    neutral: '#DCD6C9',
    alert: '#D05B5B',
    background: '#F5F3EE',
    card: '#E8E3D7',
    border: '#D0C9BD',
    text: {
      primary: '#2A2A2A',
      secondary: '#5C5C53',
      placeholder: '#7C6F64'
    },
    error: {
      background: '#FDE8E6',
      text: '#C14444',
      border: '#D9534F'
    },
    success: {
      background: '#ECF4E1',
      text: '#4E5F2A',
      border: '#8FBF3F'
    },
    warning: {
      background: '#FFF4E1',
      text: '#B2781F',
      border: '#D9A441'
    },
    info: {
      background: '#E7F0FA',
      text: '#3F7D79',
      border: '#6AA0A0'
    },
    note: {
      background: '#E9E4D9',
      text: '#7C6F64',
      border: '#BDAE93'
    }
  }
}
