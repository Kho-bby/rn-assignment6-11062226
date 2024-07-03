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
                {/* <View>
                    <line x1="0" y1="1" x2="45" y2="1" stroke="black" strokeWidth="1"/>
                </View> */}
                
            </View>

            <View style={styles.checklist}>
                <View style={styles.Box}>
                    <Image style={{height:200, marginBottom:20}} source={require('../../assets/dress1.png')}/>
                    <View style={styles.write}>
                        <Text style={{ marginTop: 5, marginLeft: 0}}>Office Wear</Text>
                        <Text style={{opacity:0.5, marginTop: 5}}>Office wear for you office</Text>
                        <Text style={{color:'gold',marginTop: 5}}>$120</Text>
                        <Image style={{marginLeft: 150}} source={require('../../assets/remove.png')}/>
                    </View>
                </View>
                <View style={styles.Box}>
                    <Image style={{height:200, marginBottom:20}} source={require('../../assets/dress4.png')}/>
                    <View style={styles.write}>
                        <Text style={{ marginTop: 5, marginLeft: 0}}>LAMEREI</Text>
                        <Text style={{opacity:0.5, marginTop: 5}}>Recycle Boucle Knit Cardigan Pink</Text>
                        <Text style={{color:'gold',marginTop: 5}}>$120</Text>
                        <Image style={{marginLeft: 150}} source={require('../../assets/remove.png')}/>
                    </View>
                </View>
                <View style={styles.Box}>
                    <Image style={{height:200, marginBottom:20}} source={require('../../assets/dress3.png')}/>
                    <View style={styles.write}>
                        <Text style={{ marginTop: 5, marginLeft: 0}}>CHURCH WEAR</Text>
                        <Text style={{opacity:0.5, marginTop: 5}}>Recycle Boucle Knit Cardigan Pink</Text>
                        <Text style={{color:'gold',marginTop: 5}}>$120</Text>
                        <Image style={{marginLeft: 150}} source={require('../../assets/remove.png')}/>
                    </View>
                </View>

            </View>
            <View style={styles.footer}>
                <View style={styles.footer1}>
                    <Text style={{fontSize:20, letterSpacing:2}}>
                        EST. TOTAL
                    </Text>
                    <Text style={{fontSize:30, color: 'gold', marginBottom: -2}}>
                        $120
                    </Text> 
                </View>
                <View style={styles.footer2}>
                    <Image  source={require('../../assets/shoppingBag.png')}/>
                    <Text style={{color: 'white', fontSize:30}}>
                      CHECKOUT
                    </Text>
                </View>
            </View>
        </View>
    );
}

const styles=StyleSheet.create({
    container:{
        flex: 1,
        margin: 10,
        
    },

    head:{
        flexDirection: 'row',
        marginBottom: 700,
        gap: 100 ,
        paddingLeft: 160,            

    },
    Title:{
        flexDirection: 'row',
        marginTop: -690,
        gap: 100 ,
        paddingLeft: 130,
        
    },
    name:{
        fontSize:30,
        letterSpacing:2,
    },
    checklist: {
        marginTop: 20,
        
    },
    Box: {
        flexDirection: 'row',
        marginBottom: -10,
        // paddingLeft: 20,
    },
    write:{
        paddingLeft: 20,
        justifyContent: 'center',
    },
    footer:{
        // flex:4,
        flexDirection: 'column',
        // backgroundColor: '#f8f8f8',
        height: 80,
        // borderTopColor: '#e7e7e7',
        alignItems: 'center',
        marginTop: 30,
        footer: 40,

    },
    footer1:{
        flexDirection: 'row',
        justifyContent: 'center',
        gap:200,
        marginBottom: 1
        
    },
    footerText:{
        gap: 100
    },
    footer2:{
        flexDirection:'row',
        justifyContent: 'center',
        gap: 15,
        backgroundColor: 'black',
        width: 500,
        height:300,
    }


});

export default Checkout;