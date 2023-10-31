import React , {useEffect, useState} from "react";
import { View , Text, TextInput, Image , StatusBar, Modal, Pressable,
    Button, StyleSheet, SafeAreaView, Keyboard} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { addData } from "../apis/firebase";

import Default from "../components/Default"
import FriendsList from '../components/FriendsList'

function HomeScreen({navigation, friends}) {
    const [modalOpen, setModalOpen] = useState(false)
    const [ inputs, setInputs ] =useState({
        name : '' ,
        email : '' ,
        area : '' ,
        favorite : '' ,
    })
    const { name , email , area , favorite } = inputs

    const homeTouchKeboradDown = () => {
        Keyboard.dismiss()
    }
    const modalshow = () => {
        setModalOpen(true)
    }
    const modalClose = () => {
        onReset()
        setModalOpen(false)
    }
    const onChange = (keyvalue , e) => {
        console.log(e.nativeEvent)
        const { text } = e.nativeEvent
        setInputs({
            ...inputs ,
            [keyvalue] : text
        })
    }
    const onReset = () => {
        setInputs({
            name : '' ,
            email : '' ,
            area : '' ,
            favorite : '' ,
        })
    }
    const detailMove = (friend) => {
        console.log(friend)
        navigation.navigate('Detail', friend)
    }
    const InsertFriends = async() => {
        const newFriedns = {
            name : inputs.name ,
            email : inputs.email ,
            area : inputs.area ,
            favorite : inputs.favorite ,
        }
        await addData('friends' , newFriedns)
        Keyboard.dismiss()
        modalClose()
    }

    return (
        <SafeAreaView style={styles.block} onTouchStart={homeTouchKeboradDown}>
            <StatusBar backgroundColor='#a8c8ffff'></StatusBar>
            <View style={styles.searchBox}>
                <Icon.Button name="saved-search" size={30} color='black' 
                style={{backgroundColor : '#ddd' }}/>
                <TextInput style={styles.input} placeholder="친구를 검색해 보세요" 
                onTouchStart={homeTouchKeboradDown}></TextInput>
            </View>
            {friends.length === 0 ? <Default/> : <FriendsList friends={friends} detailMove={detailMove}/>}
            <Icon name='control-point' onTouchStart={modalshow} style={styles.addBtn} size={40}/>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalOpen}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalInputContainer}>
                        <View style={styles.InputArea}>
                            <Text style={styles.InputText}>이름</Text>
                            <TextInput style={styles.modalTextInput} 
                            placeholder="이름을 입력해주세요"
                            value={name}
                            onChange={(e) => onChange("name" , e)}></TextInput>
                        </View>
                        <View style={styles.InputArea}>
                            <Text style={styles.InputText}>이메일</Text>
                            <TextInput style={styles.modalTextInput} 
                            placeholder="이메일을 입력해주세요"
                            value={email}
                            onChange={(e) => onChange("email" , e)}></TextInput>
                        </View>
                        <View style={styles.InputArea}>
                            <Text style={styles.InputText}>거주지</Text>
                            <TextInput style={styles.modalTextInput} 
                            placeholder="거주지을 입력해주세요"
                            value={area}
                            onChange={(e) => onChange("area" , e)}></TextInput>
                        </View>
                        <View style={styles.InputArea}>
                            <Text style={styles.InputText}>관심사</Text>
                            <TextInput style={styles.modalTextInput} 
                            placeholder="관심사을 입력해주세요"
                            value={favorite}
                            onChange={(e) => onChange("favorite" , e)}></TextInput>
                        </View>
                    </View>
                    <View style={styles.modalButtonContainer}>
                        <Pressable style={styles.closeBtn} onPress={modalClose}>
                            <Text style={styles.modalBtnText}>취소</Text>
                        </Pressable>
                        <Pressable style={styles.summitBtn} onPress={InsertFriends}>
                            <Text style={styles.modalBtnText}>등록</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    block : {
        flex : 1 , 
    } , 
    searchBox : {
        flexDirection : 'row' ,
        // justifyContent : 'center' ,
        alignItems : 'center' ,
        height : 50 ,
        marginTop : 20 ,
        borderWidth : 1,
        borderColor : 'black' ,
        borderRadius : 5 , 
    } , 
    addBtn : {
        position : 'absolute' ,
        right : 20 , bottom : 20 ,
    } ,
    modalContainer :{
        position : 'absolute' ,
        left : 0 , top : 0 ,
        margin : 50 ,
        marginTop : 150 ,
        backgroundColor : '#eee' ,
        shadowColor : '#000' ,
        shadowOffset : {
            width : 0 ,
            height : 2 , 
        } ,
        shadowOpacity : 0.25 ,
        shadowRadius : 4 ,
        elevation : 5 ,
        borderRadius : 10 ,
    } , 
    modalInputContainer : {
        padding : 20 ,
        // alignItems : 'flex-start' ,
    } , 
    InputArea :{
        flexDirection : 'row' ,
        justifyContent : 'space-between' ,
        // alignItems : 'center' ,
        marginTop : 10 ,
    } ,
    InputAreaText : {

    }, 
    InputText : {
        fontWeight : 'bold' ,
        fontSize : 20 ,
    } ,
    modalTextInput : {
        backgroundColor : 'white' ,
        borderColor : '#ddd' ,
        borderWidth : 1 ,
        borderRadius : 10 , 
        width : 200 , 
        height : 40 , 
        marginLeft : 20 ,
    } ,
    modalButtonContainer : {
        flexDirection : 'row' ,
        justifyContent : 'space-evenly' ,
        alignItems : 'center' ,
        padding : 20 ,
    } , 
    closeBtn : {
        width : 140 ,
        height : 50 ,
        marginHorizontal : 20 ,
        backgroundColor : '#ccc' ,
        borderRadius : 10 ,
        borderWidth : 1 ,
        borderColor : '#eee' ,
        justifyContent : 'center' ,
        alignItems : 'center' ,
    } ,
    modalBtnText :{
        fontSize : 20 ,
        fontWeight : 'bold' ,
        color : 'white' ,
    } ,
    summitBtn : {
        width : 140 ,
        height : 50 ,
        marginHorizontal : 20 ,
        backgroundColor : 'lightblue' ,
        borderRadius : 10 ,
        borderWidth : 1 ,
        borderColor : '#eee' ,
        justifyContent : 'center' ,
        alignItems : 'center' ,
        marginHorizontal : 20 ,
    } ,
})