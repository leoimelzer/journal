type Shade = 'light' | 'main' | 'dark'

export interface Theme {
  primary: Record<Shade, string>
  secondary: Record<Shade, string>
  accent: Record<Shade, string>

  background: string
  surface: string
  border: string
  shadow: string

  text: Record<
    'primary' | 'secondary' | 'on_background' | 'placeholder',
    string
  >
  semantic: Record<'error' | 'success' | 'warning', string>
}

export interface Colors {
  light: Theme
  dark: Theme
}
