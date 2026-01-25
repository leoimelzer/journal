interface Semantic {
  background: string
  text: string
  border: string
}

export interface Colors {
  primary: string
  secondary: string
  accent: string
  background: string
  surface: string
  border: string
  shadow: string
  text: {
    primary: string
    secondary: string
    placeholder: string
  }
  success: Semantic
  error: Semantic
  warning: Semantic
  info: Semantic
  note: Semantic
}
