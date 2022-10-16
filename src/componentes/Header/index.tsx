import React, { useState, useEffect } from 'react'
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    FlatList,
    Image,
    Alert,
    Keyboard,
} from 'react-native'

import {
    styles
} from './styles'

import logo from '../../assets/lbm.png'

export function Header(){
    const [hello, setHello] = useState('')

    useEffect(() => {
        const currentHour = new Date().getHours()
        if(currentHour < 12){
            setHello('Bom dia')
        }
        else if(currentHour >= 12 && currentHour < 18){
            setHello('Boa tarde')
        } else {
            setHello('Boa noite')
        }
    },[])

    return (
        <View style={styles.header}>
            <View>
                <Text style={{color: '#58585E'}}>{hello}</Text>
                <Text style={styles.title}> Lar Bonito Móveis </Text>
            </View>
            <Image 
                style={styles.avatar} 
                source={logo}
            />
        </View>
    )
}