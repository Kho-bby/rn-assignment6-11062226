import { View , Text, Image, TouchableOpacity, StyleSheet} from "react-native";
import { useState } from "react";
import {  router } from 'expo-router';


const Header = () => {
    return(
        
        <View style={styles.headercontainer}>
            
            <Image  style={styles.menu} source={require('../../assets/Menu.png')}/>
            <Image style={styles.logo} source={require('../../assets/Logo.png')}/>
            
            <View style={{flexDirection:'row', gap:14}}>
                <Image style={styles.search} source={require('../../assets/Search.png')}/>

                <TouchableOpacity  onPress={() => router.push("./checkout")}>
                    <Image
                        // style={styles.image}
                        source={require('../../assets/shoppingBag.png')}
                    />
                </TouchableOpacity>
              
            </View>
            
        </View> 
        
    );
}

const styles = StyleSheet.create({
    headercontainer:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 700,
        gap: 100 ,
        
    }
});

export default Header;