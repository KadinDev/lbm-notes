import { StyleSheet } from "react-native"
import { RFValue } from 'react-native-responsive-fontsize'

export const styles = StyleSheet.create({
    container: {
        marginRight: RFValue(5),
        marginLeft: RFValue(5),
        marginVertical: RFValue(20),
        backgroundColor: '#16171E',
        height: RFValue(150),
        width: '47%',
        padding: RFValue(10),
        borderRadius: RFValue(5),
        elevation: 10,
    }, 
    note: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: '#F1F1F1',
        fontSize: RFValue(14),
        fontFamily: 'Roboto_400Regular',
        textAlign: 'justify',
        position: 'absolute',
        top: 0
    },
    text: {
        color: '#F1F1F1',
        fontSize: RFValue(14),
        fontFamily: 'Roboto_400Regular',
        textAlign: 'justify',
    },
    backgroundModal: {
        height: '10%',
        backgroundColor: 'rgba(0, 0, 0, 0.7);',
    },
    modal: {
        flex: 1,
        backgroundColor: '#16171E',
        paddingVertical: RFValue(40),
        paddingHorizontal: RFValue(20),
    },
    closeModal: {
        position: 'absolute',
        top: -20,
        right: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        height: RFValue(50),
        width: RFValue(50),
        alignItems: 'center',
        borderRadius: RFValue(10),
        zIndex: 99
    },
    contenteModal: {
        color: '#888',
        fontSize: RFValue(16),
        lineHeight: RFValue(18),
        fontFamily: 'Roboto_400Regular',
        textAlignVertical: 'top',
        marginBottom: RFValue(20)
    },
    titleModal: {
        color: '#ddd',
        fontSize: RFValue(16),
        lineHeight: RFValue(18),
        fontFamily: 'Roboto_400Regular',
        textAlign: 'left',
        position: 'absolute',
        top: RFValue(10),
        width: '100%',
        paddingBottom: 5,
        marginLeft: RFValue(20)
    },
    image: {
        width: '100%',
        height: RFValue(150),
    }
})