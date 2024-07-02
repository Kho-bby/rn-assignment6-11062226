import { View, ScrollView, Text, Image, StyleSheet, ImageBackground } from "react-native";

const Body = () => {

    return(
        <View style={styles.container}>
            
            <View style={styles.head}>
                <Text style={styles.headname}>
                    OUR STORY
                </Text>
                <View style={{flexDirection:'row', gap:14}}>
                    <Image  style={styles.listView} source={require('../../assets/Listview.png')}/>
                    <Image  style={styles.filter} source={require('../../assets/Filter.png')}/>
                </View>
            </View>

            <ScrollView style={styles.dressbox}>
                <View style={styles.Main}>
                    <View style={styles.Box}>
                        <ImageBackground
                            source={require('../../assets/dress1.png')}
                            style={styles.backgroundImage}
                            >
                            <Image
                            style={styles.overlayImage} 
                            source={require('../../assets/add_circle.png')}/>
                        </ImageBackground>
                        <Text style={{ marginTop: 5, marginLeft: 0}}>Office Wear</Text>
                        <Text style={{opacity:0.5, marginTop: 5}}>reversible angona cardigan</Text>
                        <Text style={{color:'gold',marginTop: 5}}>$120</Text>
                    </View>
                    <View style={styles.Box}>
                        <ImageBackground
                            source={require('../../assets/dress2.png')}
                            style={styles.backgroundImage}
                            >
                            <Image
                            style={styles.overlayImage} 
                            source={require('../../assets/add_circle.png')}/>
                        </ImageBackground>
                        <Text style={{ marginTop: 5, marginLeft: 0}}>Black</Text>
                        <Text style={{opacity:0.5, marginTop: 5}}>reversible angona cardigan</Text>
                        <Text style={{color:'gold',marginTop: 5}}>$120</Text>
                    </View>
                </View>
                    
                <View style={styles.Main}>
                    <View style={styles.Box}>
                        <ImageBackground
                            source={require('../../assets/dress3.png')}
                            style={styles.backgroundImage}
                            >
                            <Image
                            style={styles.overlayImage} 
                            source={require('../../assets/add_circle.png')}/>
                        </ImageBackground>
                        <Text style={{ marginTop: 5, marginLeft: 0}}>Office Wear</Text>
                        <Text style={{opacity:0.5, marginTop: 5}}>reversible angona cardigan</Text>
                        <Text style={{color:'gold',marginTop: 5}}>$120</Text>
                    </View>
                    <View style={styles.Box}>
                        <ImageBackground
                            source={require('../../assets/dress4.png')}
                            style={styles.backgroundImage}
                            >
                            <Image
                            style={styles.overlayImage} 
                            source={require('../../assets/add_circle.png')}/>
                        </ImageBackground>
                        <Text style={{ marginTop: 5, marginLeft: 0}}>Black</Text>
                        <Text style={{opacity:0.5, marginTop: 5}}>reversible angona cardigan</Text>
                        <Text style={{color:'gold',marginTop: 5}}>$120</Text>
                    </View>
                </View>

                <View style={styles.Main}>
                    <View style={styles.Box}>
                        <ImageBackground
                            source={require('../../assets/dress2.png')}
                            style={styles.backgroundImage}
                            >
                            <Image
                            style={styles.overlayImage} 
                            source={require('../../assets/add_circle.png')}/>
                        </ImageBackground>
                        <Text style={{ marginTop: 5, marginLeft: 0}}>Office Wear</Text>
                        <Text style={{opacity:0.5, marginTop: 5}}>reversible angona cardigan</Text>                        
                        <Text style={{color:'gold',marginTop: 5}}>$120</Text>
                    </View>
                    <View style={styles.Box}>
                        <ImageBackground
                            source={require('../../assets/dress6.png')}
                            style={styles.backgroundImage}
                            >
                            <Image
                            style={styles.overlayImage} 
                            source={require('../../assets/add_circle.png')}/>
                        </ImageBackground>
                        <Text style={{ marginTop: 5, marginLeft: 0}}>Black</Text>
                        <Text style={{opacity:0.5, marginTop: 5}}>reversible angona cardigan</Text>
                        <Text style={{color:'gold',marginTop: 5}}>$120</Text>                     
                    </View>
                </View>

                <View style={styles.Main}>
                    <View style={styles.Box}>
                        <ImageBackground
                            source={require('../../assets/dress7.png')}
                            style={styles.backgroundImage}
                            >
                            <Image
                            style={styles.overlayImage} 
                            source={require('../../assets/add_circle.png')}/>
                        </ImageBackground>
                        <Text style={{ marginTop: 5, marginLeft: 0}}>Office Wear</Text>
                        <Text style={{opacity:0.5, marginTop: 5}}>reversible angona cardigan</Text>
                        <Text style={{color:'gold',marginTop: 5}}>$120</Text>
                    </View>
                    <View style={styles.Box}>
                        <ImageBackground
                            source={require('../../assets/dress3.png')}
                            style={styles.backgroundImage}
                            >
                            <Image
                            style={styles.overlayImage} 
                            source={require('../../assets/add_circle.png')}/>
                        </ImageBackground>
                        <Text style={{ marginTop: 5, marginLeft: 0}}>Black</Text>
                        <Text style={{opacity:0.5, marginTop: 5}}>reversible angona cardigan</Text>
                        <Text style={{color:'gold',marginTop: 5}}>$120</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const styles=StyleSheet.create({
    container:{
        flexDirection: 'column',
        padding: 10,
        flex: 1,
    },

    head:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap:150,
        marginTop: -630,
        height:60
    },
    headname:{
        fontSize: 27,
        fontFamily: 'Arial',

    },

    dressbox:{
        flexDirection:'column',

    },

    listView:{
        backgroundColor: '#1111',
        borderRadius: 20,
        width: 35,
        height: 35,
        marginTop: -8,
        
    },

    filter:{
        backgroundColor: '#1111',
        borderRadius: 20,
        width: 35,
        height: 35,
        marginTop: -8,
        
        
    },
    Box:{
        backgroundColor: '#FFFFFF',
        padding: 1,
        width: 175,
        height: 240,
    },
    Main:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 100,
    },

    backgroundImage:{
        width: 170,
        height: 260,
        justifyContent: 'center',
        alignItems: 'center',
    },

    overlayImage:{
    position: 'absolute',
    bottom: 10,
    right: 5,
    },
   
});


export default Body;