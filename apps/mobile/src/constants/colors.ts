import type { Colors } from '@/types/theme'

export const colors: Colors = {
  dark: {
    primary: {
      light: '#A78BFA',
      main: '#7C3AED',
      dark: '#6B21A8'
    },
    secondary: {
      light: '#6EE7B7',
      main: '#34D399',
      dark: '#059669'
    },
    accent: {
      light: '#FDE68A',
      main: '#FBBF24',
      dark: '#D97706'
    },
    background: '#1F1B24',
    surface: '#2A2433',
    border: '#3A2D4E',
    shadow: 'rgba(0,0,0,0.5)',
    text: {
      primary: '#F5F5F5',
      secondary: '#CFCFCF',
      on_background: '#1F1B24',
      placeholder: '#A3A3A3'
    },
    semantic: {
      error: '#F28B82',
      success: '#A7E8BD',
      warning: '#FFE29A'
    }
  },
  light: {
    primary: {
      light: '#C4B5FD',
      main: '#7C3AED',
      dark: '#5B21B6'
    },
    secondary: {
      light: '#6EE7B7',
      main: '#10B981',
      dark: '#047857'
    },
    accent: {
      light: '#FEF3C7',
      main: '#F59E0B',
      dark: '#B45309'
    },
    background: '#FFF8F2',
    surface: '#FFFFFF',
    border: '#E6E1E5',
    shadow: 'rgba(0,0,0,0.1)',
    text: {
      primary: '#1F1B24',
      secondary: '#6B6174',
      on_background: '#FFFFFF',
      placeholder: '#A3A3A3'
    },
    semantic: {
      error: '#EF4444',
      success: '#22C55E',
      warning: '#FBBF24'
    }
  }
}
