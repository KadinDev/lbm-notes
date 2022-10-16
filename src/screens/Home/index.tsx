import React, { useState, useEffect } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    FlatList,
    Alert,
    ActivityIndicator
} from 'react-native'

import {
    styles
} from './styles'

import { useNavigation } from '@react-navigation/native'
import noteJson from '../../assets/lottie/note.json'
import { Note, NoteProps } from '../../componentes/Note'
import { MaterialIcons } from '@expo/vector-icons'
import Lottie from 'lottie-react-native'
import { RFValue } from 'react-native-responsive-fontsize'

import AsyncStorage from '@react-native-async-storage/async-storage'
const notesKey = '@notes'

import { Header } from '../../componentes/Header'
import { Input } from '../../componentes/Input'

// Limpando todo o app
// const dataKey = '@gofinances:transactions';
// AsyncStorage.removeItem(dataKey);

export function Home(){
    const navigation = useNavigation()
    const [loadedNotes, setLoadedNotes] = useState(true)
    
    const [name, setName] = useState('')
    const [notes, setNotes] = useState<NoteProps[]>([])

    const isNewNoteEmpty = name.length < 5

    async function loadNotes(){
        //await AsyncStorage.removeItem(notesKey)
        
        const response = await AsyncStorage.getItem(notesKey)
        // pegar notas já salvas
        const savedNotes = response ? JSON.parse(response) : [] 

        setNotes(savedNotes)
        setLoadedNotes(false)
    }

    useEffect(() => {
        loadNotes()
    },[notes])
    

    function handleRemoveNote(id: string, name: any){
        Alert.alert('Confirmar?', `Deseja apagar a nota ${name}?`, [
            {
                text: 'Apagar',
                onPress: () => handleConfirmRemove(id)
                /*onPress: () => setNotes(prevState => prevState.filter(
                    note => note.id !== id
                ))*/
            },
            {
                text: 'Cancelar',
                style: 'cancel'
            }
        ])
    }

    async function handleConfirmRemove(id: string){
        const response = await AsyncStorage.getItem(notesKey)
        const savedNotes = response ? JSON.parse(response) : []

        const index = await savedNotes.findIndex( (item: any) => item.id === id);
        savedNotes.splice(index, 1);

        return AsyncStorage.setItem( notesKey, JSON.stringify(savedNotes));
    }

    function handleNavigationNewNote(name: string){
        navigation.navigate('NewNote', {
            name
        })
        setName('')
    }

    return (
        <View style={styles.container} >
            
            <Header/>

            <View style={styles.input}>
                <Input
                    placeholder='Nome Cliente'
                    placeholderTextColor='#58585E'
                    value={name}
                    onChangeText={setName}
                />
                <TouchableOpacity
                    activeOpacity={0.7}
                    style={styles.button}
                    disabled={isNewNoteEmpty}

                    onPress={() => handleNavigationNewNote(name)}
                >   
                    {
                        isNewNoteEmpty ? (
                            <MaterialIcons
                                name='not-interested'
                                size={20}
                                color='#FEFEFE'
                            />        
                        ) : (
                            <MaterialIcons
                                name='keyboard-arrow-right'
                                size={20}
                                color='#FEFEFE'
                            />
                        )
                    }
                    
                </TouchableOpacity>
            </View>


            { loadedNotes ? (
                <ActivityIndicator size={40} color='#FFF' />
            ) : (
                <FlatList
                    data={notes}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => (
                        <Note
                            key={item.id}
                            data={item}
                            handleRemove={() => handleRemoveNote(item.id, item.name)}
                        />
                    )}
                    numColumns={2}
                    contentContainerStyle={{
                        paddingBottom: RFValue(50),
                        marginHorizontal: RFValue(20),
                    }}
                    showsVerticalScrollIndicator={false}
                    keyboardShouldPersistTaps='never'
                    ListEmptyComponent={() => (
                        <Text style={styles.listEmptyText}>
                            Nenhuma nota salva no momento!
                        </Text>
                    )}
                    ItemSeparatorComponent={() => (
                        <View style={{width: '100%', height: 1, backgroundColor: '#16171E'}} />
                    )}
                />
            ) }
                
        </View>
    )
}