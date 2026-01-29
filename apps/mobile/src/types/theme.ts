import type { Colors } from './colors'
import type { ThemeName } from './theme-name'

export interface Theme {
  name: ThemeName
  colors: Colors
  select<T extends unknown>(params: Record<ThemeName, T>): T
}
