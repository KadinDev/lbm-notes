import React from 'react'
import { TextInput, TextInputProps } from 'react-native'

import { styles } from './styles'

type Props = TextInputProps & {
    size?: 'large' | 'medium'
}

export function Input( { size = 'large', ...rest } : Props ){
    return (
        <TextInput
            style={styles.container}
            {...rest}
        />
    )
}