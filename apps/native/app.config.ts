import { ExpoConfig, ConfigContext } from 'expo/config';

export default (context: ConfigContext): ExpoConfig => {
  const { config } = context

  return {
    ...config,
    name: config.name!,
    slug: config.slug!
  }
}
