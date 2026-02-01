import type { Theme } from '@/types'

export const darkTheme: Theme = {
  name: 'dark',
  colors: {
    primary: '#7DAEA3',
    secondary: '#89B482',
    accent: '#E0AF68',
    neutral: '#39342F',
    alert: '#B03434',
    background: '#2C2926',
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
  }
}
