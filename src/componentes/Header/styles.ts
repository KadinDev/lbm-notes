import { StyleSheet } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1F212A',
    },
    header: {
        width: '100%',
        minHeight: RFValue(110),
        backgroundColor: '#16171E',
        padding: RFValue(20),
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between'
    },
    title: {
        fontSize: RFValue(18),
        color: '#FEFEFE',
        fontFamily: 'Roboto_700Bold',
    },
    avatar: {
        width: RFValue(40),
        height: RFValue(40),
        borderRadius: RFValue(20),
        borderWidth: 2,
        borderColor: '#16171E'
    }
})