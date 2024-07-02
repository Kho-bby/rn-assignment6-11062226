import { View, Image, Text, StyleSheet} from "react-native";


const Checkout = () => {
    return(
        <View style={styles.container}>
            <View style={styles.head}>
                <Image source={require('../../assets/Logo.png')}/>
                <Image source={require('../../assets/Search.png')}/>
            </View>
            <View style={styles.Title}>
                <Text style={styles.name}>
                    Checkout
                </Text>
            </View>

            <View style={styles.checklist}>
                <View style={styles.Box}>
                    <Image source={require('../../assets/dress1.png')}/>
                    <View>
                        <Text style={{ marginTop: 5, marginLeft: 0}}>Office Wear</Text>
                        <Text style={{opacity:0.5, marginTop: 5}}>reversible angona cardigan</Text>
                        <Text style={{color:'gold',marginTop: 5}}>$120</Text>
                    </View>
                </View>
                <View style={styles.Box}>
                    <Image source={require('../../assets/dress4.png')}/>
                    <View>
                        <Text style={{ marginTop: 5, marginLeft: 0}}>Black</Text>
                        <Text style={{opacity:0.5, marginTop: 5}}>reversible angona cardigan</Text>
                        <Text style={{color:'gold',marginTop: 5}}>$120</Text>
                    </View>
                </View>
                <View style={styles.Box}>
                    <Image source={require('../../assets/dress3.png')}/>
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
        marginTop: 3,
        
    },

    head:{
        flex: 1,
        marginTop: 50,
        paddingLeft: 100,
        flexDirection: 'row',
        gap: 130,       

    },
    Title:{
        justifyContent: 'center',
        alignContent: 'center',
        marginBottom: 60,
    },
    name:{
        fontSize:30,
    },
    checklist: {
        marginTop: 20,
        // marginBottom: 50,
        // flexDirection: 'column',
        // marginLeft: 5,
        // paddingLeft: 10,
    },
    Box: {
        flexDirection: 'row',

    },



});

export default Checkout;