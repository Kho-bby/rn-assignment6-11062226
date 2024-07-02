import { View, Image, Text, StyleSheet} from "react-native";

const Checkout = () => {
    return(
        <View style={styles.container}>
            <View style={styles.head}>
                <Image source={require('../assets/Logo.png')}/>
                <Image source={require('../assets/Search.png')}/>
            </View>
            <View>
                <Text>
                    Checkout
                </Text>
            </View>
            <View style={StyleSheet.checklist}>
                <View>
                    <Image source={require('../assets/dress1.png')}/>
                    <View>
                        <Text style={{ marginTop: 5, marginLeft: 0}}>Office Wear</Text>
                        <Text style={{opacity:0.5, marginTop: 5}}>reversible angona cardigan</Text>
                        <Text style={{color:'gold',marginTop: 5}}>$120</Text>
                    </View>
                </View>
                <View>
                    <Image source={require('../assets/dress4.png')}/>
                    <View>
                        <Text style={{ marginTop: 5, marginLeft: 0}}>Black</Text>
                        <Text style={{opacity:0.5, marginTop: 5}}>reversible angona cardigan</Text>
                        <Text style={{color:'gold',marginTop: 5}}>$120</Text>
                    </View>
                </View>
                <View>
                    <Image source={require('../assets/dress3.png')}/>
                    <View>
                        <Text style={{ marginTop: 5, marginLeft: 0}}>Office Wear</Text>
                        <Text style={{opacity:0.5, marginTop: 5}}>reversible angona cardigan</Text>
                        <Text style={{color:'gold',marginTop: 5}}>$120</Text>
                    </View>
                </View>

            </View>
        </View>
    );
}

const styles=StyleSheet.create({
    container:{
        flex: 1,
        marginTop: 60,

    },

    head:{
        
        

    }


});

export default Checkout;