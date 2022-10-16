import React, {useState} from 'react'

import {
    View,
    Text,
    TouchableOpacity,
    Modal,
    ImageBackground,
    Image
} from 'react-native'

import { styles } from './styles'

import { Feather } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize'

export interface NoteProps {
    id: string;
    name: String;
    content: string;
    image?: string;
}

type Props = {
    data: NoteProps;
    handleRemove: () => void;
}

const logo = 'https://jkmadeiras.com.br/wp-content/uploads/2020/06/os-melhores-aplicativos-para-sua-marcenaria.jpg'

export function Note( { data, handleRemove } : Props ){

    const [openModal, setOpenModal] = useState(false)
    
    function handleModal(){
        setOpenModal(!openModal)
    }

    return (
        <View style={styles.container}>
           
            <ImageBackground
                source={{ uri: data.image ? data.image : logo }}
                resizeMode='stretch'
                imageStyle={{
                    opacity: 0.2,
                    borderRadius: 20,
                    backgroundColor: '#000'
                }}
            >   
                <TouchableOpacity
                    activeOpacity={0.8} 
                    onPress={handleModal}
                    onLongPress={handleRemove}
                >
                    <View style={styles.note}>
                        <Text style={styles.title}> {data.name} </Text>
                        <Text numberOfLines={2} style={styles.text}>{data.content}</Text>
                    </View>
                </TouchableOpacity>

            </ImageBackground>

            <Modal
            visible={openModal}
            animationType='slide'
            transparent={true}
            >
                <View style={styles.backgroundModal}/>
                <View style={styles.modal}>
                    <TouchableOpacity 
                        style={styles.closeModal}
                        onPress={handleModal}
                    >
                        <Feather 
                            name='arrow-down' 
                            size={20} 
                            color='#FEFEFE'
                            style={{marginTop: RFValue(15)}}
                        />
                    </TouchableOpacity>

                    <Text style={styles.titleModal}>{data.name}</Text>
                    <View
                        style={{height: 1, width: '100%', backgroundColor: '#444', marginBottom: 10}}
                    />
                    <Text style={styles.contenteModal}>
                        {data.content}
                    </Text>

                    {
                        data.image && (
                            <Image
                                source={{ uri: data.image }}
                                resizeMode='cover'
                                style={styles.image}
                            />
                        ) 
                    }
                    
                </View>
            </Modal>
        </View>
    )
}