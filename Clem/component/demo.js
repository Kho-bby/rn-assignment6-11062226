import { View, Text, Image, ScrollView, StyleSheet} from "react-native";

const Body = () => {

    const[task, setTask] = useState([
        {name: 'Algorithm Class', key:'1'},

    ]);

    return(
        <View style={styles.container}>
            <ScrollView>
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
                <View>
                        {/* <TextInput editable={false} selectTextOnFocus={false} style={styles.categoryBox}/> */}
                        {/* <Text style={{fontWeight: 'bold', marginTop: -180, marginLeft: 12}}>Exercise</Text> */}
                        {/* <Text style={{marginLeft: 12}}>19 Tasks</Text> */}
                        {/* <Image style={{ marginLeft: 25}} source = {require('../assets/add_circle.png')}/> */}
                    </View>
                </View>
            </ScrollView>            
        </View>
    );
}

const styles=StyleSheet.create({
    container:{
        // margin: 10,
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