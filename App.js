import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'expo-image';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/lock-filled.svg')} style={{width: 20, height: 20}}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
