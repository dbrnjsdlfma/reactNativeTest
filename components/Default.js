import React from "react"
import { View ,
    Text,
    Image ,
    StyleSheet
} from 'react-native'
function Default() {
    const styles = StyleSheet.create({
        container : {
            flex : 1 ,
            alignItems : 'center' ,
            justifyContent : 'center' , 
            backgroundColor : '#fff' ,
        } ,
        guideText : {
            fontSize : 20 ,
            marginTop : 30 , 
        }
    })
    return (
        <View style={styles.container}>
            <Text style={styles.guideText}>현재 친구목록이 비어있습니다.</Text>
        </View>
    )
}

export default Default