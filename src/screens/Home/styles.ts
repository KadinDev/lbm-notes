import { StyleSheet } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1F212A',
    },
    input: {
        backgroundColor: '#16171E',
        flexDirection: 'row',
        margin: RFValue(20),
        paddingTop: RFValue(10),
        paddingLeft: RFValue(10),
        paddingBottom: RFValue(10),
        height: RFValue(40),
        color: '#FEFEFE',
        borderRadius: 5,
        fontFamily: 'Roboto_400Regular',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    button: {
        height: RFValue(40),
        width: RFValue(40),
        alignItems: 'center',
        justifyContent: 'center',
    },
    listEmptyText: {
        color: '#FFF',
        fontSize: RFValue(14),
        textAlign: 'center'
    }
})