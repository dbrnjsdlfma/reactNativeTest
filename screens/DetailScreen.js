import React from "react";
import { View , Text, SafeAreaView, StyleSheet, Image} from 'react-native'

function DetailScreen({ route ,navigation , friend}) {
    const { name , email, area, favorite } = route.params
    return (
        <SafeAreaView style={styles.block}>
            <View style={styles.profile}>
                <View style={styles.profileImage}>
                    <Image style={{ width : 150, height : 150, borderRadius : 75}}
                        source={require('../Image/profilImage.jpg')}></Image>
                </View>
                <View style={styles.profileBody}>
                    <View style={styles.profileName}>
                        <Text style={styles.profileNameText}>이름</Text>
                        <Text style={styles.profileTextDescription}>{name}</Text>
                    </View>
                    <View style={styles.profileName}>
                        <Text style={styles.profileNameText}>이메일</Text>
                        <Text style={styles.profileTextDescription}>{email}</Text>
                    </View>
                    <View style={styles.profileName}>
                        <Text style={styles.profileNameText}>거주지</Text>
                        <Text style={styles.profileTextDescription}>{area}</Text>
                    </View>
                    <View style={styles.profileName}>
                        <Text style={styles.profileNameText}>관심사</Text>
                        <Text style={styles.profileTextDescription}>{favorite}</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default DetailScreen

const styles = StyleSheet.create({
    block : {
        flex : 1 ,
    } ,
    profile : {
        padding : 30 ,
        justifyContent : 'center' ,
        alignItems : 'center' ,
    } ,
    profileImage : {
        justifyContent : 'center' ,
        alignItems : 'center' ,
        marginBottom : 20 ,
        marginTop : 20 ,
    } ,
    profileName : {
        flexDirection : 'row' ,
        justifyContent : 'flex-start' , 
        marginBottom : 30 ,
    } ,
    profileNameText : {
        fontSize : 20 , 
        fontWeight : 'bold' ,
        marginRight : 30 ,
    } ,
    profileTextDescription : {
        fontSize : 20 , 
        fontWeight : 'bold' ,
    } ,
})