import type { ColorSchemeName } from 'react-native'

import type { Theme } from '@/types'

export type ThemeContextData = {
  theme: Theme
  set(name: ColorSchemeName | null): void
  select<T>(values: Record<Theme['name'], T>): T
}
