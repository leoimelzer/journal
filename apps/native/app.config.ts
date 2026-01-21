import { ExpoConfig, ConfigContext } from 'expo/config';

export default (context: ConfigContext): Partial<ExpoConfig> => {
  const { config } = context
  return config
}
