import type { Colors, Theme } from '@/types'

export const colors: Record<Theme, Colors> = {
  dark: {
    primary: '#D79921',
    secondary: '#689D6A',
    accent: '#B16286',
    background: '#1B1B1B',
    surface: '#2A2A2A',
    border: '#3C3836',
    shadow: 'rgba(0,0,0,0.5)',
    text: {
      primary: '#EBDBB2',
      secondary: '#A89984',
      placeholder: '#7C6F64'
    },
    error: {
      background: '#3C1F1F',
      text: '#FB4934',
      border: '#FB4934'
    },
    success: {
      background: '#223322',
      text: '#B8BB26',
      border: '#B8BB26'
    },
    warning: {
      background: '#3C2F1F',
      text: '#FABD2F',
      border: '#FABD2F'
    },
    info: {
      background: '#1F2A33',
      text: '#83A598',
      border: '#83A598'
    },
    note: {
      background: '#2A2520',
      text: '#D5C4A1',
      border: '#BDAE93'
    }
  },
  light: {
    primary: '#D65D0E',
    secondary: '#689D6A',
    accent: '#9D7D6C',
    background: '#FBF1C7',
    surface: '#F2E5BC',
    border: '#E0D9B7',
    shadow: 'rgba(0,0,0,0.1)',
    text: {
      primary: '#3C3836',
      secondary: '#7C6F64',
      placeholder: '#A89984'
    },
    error: {
      background: '#FDDDD6',
      text: '#CC241D',
      border: '#CC241D'
    },
    success: {
      background: '#ECF8DC',
      text: '#98971A',
      border: '#98971A'
    },
    warning: {
      background: '#FEF3C7',
      text: '#D79921',
      border: '#D79921'
    },
    info: {
      background: '#E8F0F2',
      text: '#458588',
      border: '#458588'
    },
    note: {
      background: '#FBF1C7',
      text: '#665C54',
      border: '#D5C4A1'
    }
  }
}
