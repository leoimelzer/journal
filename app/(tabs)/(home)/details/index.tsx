import { View, Text, Pressable } from 'react-native';
import { styles } from './styles';
import { useCallback, useEffect } from 'react';
import { useNavigation, useRouter } from 'expo-router';

export default function DetailsScreen() {
  const navigation = useNavigation()

  const router = useRouter()

  useEffect(() => {
    navigation.setOptions({
      headerTitle: 'Details'
    });
  }, [navigation]);

  const backToFirstScreen = useCallback(() => {
    router.dismissAll()
  }, [router])

  return (
    <View style={styles.container} >
      <Text>Details </Text>

      <Pressable
        onPress={backToFirstScreen}
      >
        <Text>
          Back to first screen
        </Text>
      </Pressable>
    </View>
  );
}
