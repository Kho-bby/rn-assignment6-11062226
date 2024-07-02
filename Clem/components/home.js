import { StatusBar } from "react-native";
import { View, StyleSheet } from "react-native";
import Header from "./header";
import Body from "./body";


const Home = () => {
    return(
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


export default Home;