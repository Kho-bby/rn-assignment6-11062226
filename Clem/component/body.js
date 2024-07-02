import { View, Text, Image, StyleSheet} from "react-native";

const Body = () => {
    return(
        <View style={styles.container}>
            <View style={styles.head}>
                <Text style={styles.headname}>
                    OUR STORY
                </Text> 
                <View style={{flexDirection:'row', gap:14}}>
                    <Image  style={styles.listView} source={require('../assets/Listview.png')}/>
                    <Image  style={styles.filter} source={require('../assets/Filter.png')}/>
                </View>
            </View>
            <View style={styles.dress}>
                
            </View>
            
        </View>
    );
}

const styles=StyleSheet.create({
    container:{
        margin: 10,
    },

    head:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap:150,
        marginTop: -630,
    },
    headname:{
        // fontWeight: 'bold',
        fontSize: 27,

    },

    listView:{
    backgroundColor: '#1111',
    // padding: 5,
    borderRadius: 19,
    width: 45,
    height: 42,
    // marginTop: -10,
    // marginLeft: 215,
    },

    filter:{
    backgroundColor: '#1111',
    // padding: 5,
    borderRadius: 19,
    width: 45,
    height: 42,
    // marginTop: -10,
    // marginLeft: 215,
    }
});

export default Body;