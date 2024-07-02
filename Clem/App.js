import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,} from 'react-native';
import Header from '../Clem/component/header';
import Body from './component/body';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Body />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 100,
  },
});
