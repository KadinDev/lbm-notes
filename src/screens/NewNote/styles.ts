import { StyleSheet } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1F212A',
    },
    title: {
        color: '#999',
        textTransform: 'uppercase',
        marginLeft: RFValue(20),
        marginBottom: RFValue(-5),
        marginTop: RFValue(10),
    },
    viewHeaderDown: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#16171E',
        marginTop: RFValue(10),
        marginRight: RFValue(20),
        marginLeft: RFValue(20),
        marginBottom: RFValue(10),
        padding: RFValue(10)
    },
    name: {
        fontSize: 18,
        color: '#FFF'
    },
    content: {
        padding: RFValue(20),
        flexDirection: 'column',
        marginTop: RFValue(-15)
    },
    button: {
        width: '100%',
        height: RFValue(40),
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    containerImage: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'center',
        marginBottom: RFValue(15),
        position: 'relative'
    },
    image: {
        width: RFValue(100),
        height: RFValue(100),
        borderRadius: RFValue(10)
    },
    deleteImage: {
        position: 'absolute',
        bottom: 0,
        right: 0
    },
    input: {
        backgroundColor: '#16171E',
        borderRadius: 4,
        padding: RFValue(10),
        height: RFValue(300),
        textAlignVertical: 'top',
        paddingBottom: RFValue(40),
        color: '#FFF'
    },
    buttonSend: {
        height: RFValue(40),
        backgroundColor: '#1F212A',
        position: 'absolute',
        bottom: RFValue(10),
        right: RFValue(20),
        padding: RFValue(2)
    },
    camera: {
        position: 'absolute',
        top: RFValue(80),
        bottom: 0,
        left: 0,
        right: 0
    }
})