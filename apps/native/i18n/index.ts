import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { getLocales } from 'expo-localization'
import 'dayjs/locale/pt-br'

export const locale = getLocales().find(Boolean)!

dayjs.extend(relativeTime)
dayjs.locale(locale.languageTag)
