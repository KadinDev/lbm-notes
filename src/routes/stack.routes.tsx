import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from '../screens/Home'
import { NewNote } from '../screens/NewNote'

const { Navigator, Group, Screen } = createNativeStackNavigator()

export function StackRoutes(){
    return (
        <Navigator>
            <Group>
                <Screen
                    name='Home'
                    component={Home}
                    options={{
                        headerShown: false
                    }}
                />

                <Screen
                    name='NewNote'
                    component={NewNote}
                    options={{
                        headerShown: false
                    }}
                />
            </Group>
        </Navigator>
    )
}