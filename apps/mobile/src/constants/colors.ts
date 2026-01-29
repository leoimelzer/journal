import type { Colors, ThemeName } from '@/types'

export const colors: Record<ThemeName, Colors> = {
  dark: {
    primary: '#7DAEA3',
    secondary: '#89B482',
    accent: '#E0AF68',
    neutral: '#3F3A35',
    alert: '#B03434',
    background: '#2B2A28',
    card: '#242320',
    border: '#3A3632',
    text: {
      primary: '#E6D5AE',
      secondary: '#BDAE93',
      placeholder: '#7C6F64'
    },
    error: {
      background: '#3C1F1F',
      text: '#FB4934',
      border: '#5A2B2B'
    },
    success: {
      background: '#223322',
      text: '#B8BB26',
      border: '#4E5F2A'
    },
    warning: {
      background: '#3C2F1F',
      text: '#FABD2F',
      border: '#6B5A2A'
    },
    info: {
      background: '#1F2A33',
      text: '#83A598',
      border: '#3F5A63'
    },
    note: {
      background: '#2A2520',
      text: '#D5C4A1',
      border: '#5A5248'
    }
  },
  light: {
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
