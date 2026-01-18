import { getLocales } from 'expo-localization'

export const locale = getLocales().find(Boolean)!
