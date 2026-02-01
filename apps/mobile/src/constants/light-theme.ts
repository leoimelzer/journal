import type { Theme } from '@/types'

export const lightTheme: Theme = {
  name: 'light',
  colors: {
    primary: '#7DAEA3',
    secondary: '#8CBF8C',
    accent: '#E6B450',
    neutral: '#ECE3CF',
    alert: '#CC5C5C',
    background: '#F5EFE5',
    card: '#FAF7F0',
    border: '#DDD5C3',
    text: {
      primary: '#4A433C',
      secondary: '#6F665C',
      placeholder: '#9A8F7A'
    },
    error: {
      background: '#F6DDD9',
      text: '#B84444',
      border: '#DA9A9A'
    },
    success: {
      background: '#E0EED2',
      text: '#557433',
      border: '#A9C67A'
    },
    warning: {
      background: '#F8E7BF',
      text: '#976B14',
      border: '#DBB35F'
    },
    info: {
      background: '#E1EDF3',
      text: '#557F90',
      border: '#A8C9D6'
    },
    note: {
      background: '#F1E8D3',
      text: '#61584E',
      border: '#CCC1A8'
    }
  }
}
