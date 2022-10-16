import React, { useState, useRef, useEffect } from 'react'
import {
    View,
    Text,
    KeyboardAvoidingView,
    TouchableOpacity,
    Image,
    Platform,
    Keyboard,
    TouchableWithoutFeedback,
    ScrollView,
    Modal,
} from 'react-native'

import {
    styles
} from './styles'


import { MaterialIcons } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { useNavigation, useRoute } from '@react-navigation/native';

import { Camera } from 'expo-camera'
import * as ImagePicker from 'expo-image-picker';

import { Header } from '../../componentes/Header'
import { Input } from '../../componentes/Input'

const notesKey = '@notes'

// Limpando todo o app
// const dataKey = '@gofinances:transactions';
// AsyncStorage.removeItem(dataKey);

interface Params {
    name: string
}

export function NewNote(){
    const navigation = useNavigation()
    const camRef = useRef(null)
    const [openModal, setOpenModal] = useState(false)
    
    const route = useRoute()
    const { name } = route.params as Params
    
    const [content, setContent] = useState('')
    const [image, setImage] = useState('')

    const contentEmpty = content.length < 3
    
    async function handleOpenModel(){
        setOpenModal(!openModal)
    }

    async function handleAddNewNote(){

        const myNewNote = {
            // tem que ser os mesmos nomes que na interface (id, title, name)
            id: String(new Date().getTime()),
            name: name,
            content: content,
            image: image
        }

        const response = await AsyncStorage.getItem(notesKey)
        // pegar notas já salvas
        const savedNotes = response ? JSON.parse(response) : []
        
        const savedNewNotaAsync = [
            ...savedNotes, // notas que já estão salvas
            myNewNote, // adiciona a nota nota à elas
        ]
        
        await AsyncStorage.setItem(notesKey, JSON.stringify(savedNewNotaAsync))
        //setNotes(prevState => [...prevState, data ])
        
        //setClient('')
        setContent('')
        Keyboard.dismiss()
        navigation.goBack()
    }

    async function handlePickerImage(){
        const { status } = await ImagePicker.requestCameraPermissionsAsync();

        if( status === 'granted' ) {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                aspect: [4,4]
            });

            if(!result.cancelled){
                setImage(result.uri);
            }
        };

        setOpenModal(false)
    }

    function handleDeletePhoto(){
        setImage('')
    }

    function handleGoBack(){
        navigation.goBack()
    }

    return (
        <View style={styles.container}>

            <Header/>

            <Text style={styles.title}>CLiente</Text>
            <View style={styles.viewHeaderDown}>
                
                <Text style={styles.name}> {name} </Text>

                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={handleGoBack}
                >
                    <MaterialIcons name='keyboard-backspace' size={25} color='#FEFEFE' />
                </TouchableOpacity>
            </View>

            <TouchableWithoutFeedback
            onPress={() => Keyboard.dismiss()}
            >   
                <ScrollView
                    showsVerticalScrollIndicator={false}
                >
                    <KeyboardAvoidingView
                        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                    >
                        
                        <View style={styles.content}>
                            <TouchableOpacity 
                                style={styles.button}
                                activeOpacity={0.4}
                                //onPress={handleOpenModel}
                                onPress={handlePickerImage}
                            >
                                <MaterialIcons
                                    size={25}
                                    color='#FFF'
                                    name='camera-enhance'
                                />
                            </TouchableOpacity>
                            
                            { image && (
                                <View style={styles.containerImage}>
                                    <Image
                                        style={styles.image}
                                        source={{ uri: image }}
                                        resizeMode='cover'
                                    />
                                    <TouchableOpacity 
                                        onPress={handleDeletePhoto}
                                        style={styles.deleteImage}
                                    >
                                        <MaterialIcons 
                                            size={25} 
                                            color='#FFF' 
                                            name='delete' 
                                        />
                                    </TouchableOpacity>
                                </View>
                            ) }

                            <Input
                                style={styles.input}
                                placeholder='Descrição'
                                placeholderTextColor='#58585E'
                                multiline
                                value={content}
                                onChangeText={setContent}
                            />

                            <TouchableOpacity 
                                style={styles.buttonSend}
                                activeOpacity={0.4}
                                onPress={handleAddNewNote}
                                disabled={contentEmpty}
                            >
                                {
                                    contentEmpty ? (
                                        <MaterialIcons
                                            name='not-interested'
                                            size={20}
                                            color='#FEFEFE'
                                        />        
                                    ) : (
                                        <MaterialIcons
                                            size={30}
                                            color='#FFF'
                                            name='add-box'
                                        />
                                    )
                                }
                            </TouchableOpacity>

                        </View>
                    </KeyboardAvoidingView>
                </ScrollView>
            </TouchableWithoutFeedback>
            
            
            {/* 
            <Modal
                visible={openModal}
                animationType='fade'
                transparent={true}
                              
            >
                <Camera
                    style={styles.camera}
                    ref={camRef}
                >
                    <View
                        style={{position: 'absolute', bottom: RFValue(40), flexDirection: 'row', alignItems: 'center',
                        justifyContent: 'space-evenly', width: '100%'}}
                    >
                        <TouchableOpacity
                            onPress={handleOpenModel}
                        >
                            <MaterialIcons
                                size={30}
                                color='#FFF'
                                name='close-fullscreen'
                            />
                        </TouchableOpacity>

                        <TouchableOpacity
                            //onPress={takePicture}
                        >
                            <MaterialIcons
                                size={30}
                                color='#FFF'
                                name='photo-camera'
                            />
                        </TouchableOpacity>
                    </View>

                </Camera>
            </Modal>
            */}
        </View>
    )
}