import { Dimensions, StyleSheet } from "react-native";
import { themas } from '../../global/themes';

export const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    boxTop: {
        height: Dimensions.get('window').height / 3,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#cbded0'
    },
    form: {
        height: Dimensions.get('window').height / 3,
        width: '100%',
        backgroundColor: '#cbded0',
        paddingHorizontal: 37,
    },
    boxButton: {
        height: Dimensions.get('window').height / 3,
        width: '100%',
        backgroundColor: '#cbded0',
        alignItems: 'center',
    },
    logo: {
        height: 200,
        width: 200,
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#2e765e',
        textShadowColor: '#000',
        textShadowOffset: { width: 1, height: 1 },
    },
    titleInput: {
        marginLeft: 5,
        color: themas.colors.seaGreen,
        marginTop: 20,
    },
    inputContainer: {
        width: '100%',
        height: 40,
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
    },
    boxInput: {
        flex: 1,
        height: '100%',
        borderWidth: 1,
        borderRadius: 17,
        paddingRight: 40,
        borderColor: themas.colors.seaGreen,
        backgroundColor: themas.colors.CinzaClaro,
    },
    icon: {
        position: 'absolute',
        right: 10,
        zIndex: 1,
    },
    button:{
        width: 200,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: themas.colors.seaGreen,
        borderRadius: 40,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5, 
    },
    textButton:{
        color: themas.colors.white,
        fontSize: 18,
        fontWeight: 'bold',
    }
});