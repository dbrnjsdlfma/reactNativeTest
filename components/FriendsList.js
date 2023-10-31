import React from 'react'
import { View , Image, TouchableOpacity , Text, StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
function FriendsList({friends, detailMove}) {
    return (
    <>
        <View style={styles.friendsList}>
        {friends.map((friend, index) => {
            return (
                <>
                <View style={styles.profileList} key={index}>
                    <View style={styles.profilImage} >
                        <Image style={{ width : 50, height : 50, borderRadius : 25}}
                        source={require('../Image/profilImage.jpg')}></Image>
                        <View style={styles.textBox}>
                            <Text style={styles.textName}>{friend.name}</Text>
                            <Text style={styles.textEmail}>{friend.email}</Text>
                        </View>
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => detailMove(friend) }>
                            <Icon name="keyboard-arrow-right" size={30} 
                            color='black' style={{backgroundColor : '#eee'}}/>
                        </TouchableOpacity >
                        {/* <Icon.Button/> */}
                    </View>
                </View>
                </>
            )
        })}
        </View>
    </>
    )
}

export default FriendsList

const styles = StyleSheet.create({
    friendsList :{
        flex : 1 ,
        // justifyContent: 'center' ,
    } ,
    profileList :{
        flexDirection : 'row', 
        justifyContent : 'space-between' ,
        alignItems : 'center' ,
        marginTop : 20 ,
        marginBottom : 20 ,
    },
    profilImage : {
        flexDirection : 'row' ,
        marginLeft : 20 , 
        marginRight : 20 ,
    } , 
    textBox : {
        marginHorizontal: 20 ,
    } ,
    textName : {
        fontStyle : 'italic' ,
        fontWeight : 'bold' ,
        fontSize : 15 ,
    } ,
    textEmail :{

    } ,
})