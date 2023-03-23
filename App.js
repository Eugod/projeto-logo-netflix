import { View, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  const logoNetflix = 'https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png';

  return (
    <View style={styles.container}>
      <Image 
      style={styles.logo}
      source={{uri: logoNetflix}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black'
  },

  logo: {
    width: 200,
    height: 110
  }
});
