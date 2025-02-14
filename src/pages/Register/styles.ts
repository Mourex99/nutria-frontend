import { Dimensions, StyleSheet } from "react-native";
import { themas } from "../../global/themes";

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
        justifyContent: 'flex-start',
        paddingTop: 20,
    },
    logo: {
        height: 180,
        width: 180,
    },
    text: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#2e765e',
        textShadowColor: '#000',
        textShadowOffset: { width: 1, height: 1 },
        marginTop: 10,
    },
    titleInput: {
        marginLeft: 5,
        color: themas.colors.seaGreen,
        marginTop: 15,
        fontSize: 16,
    },
    inputContainer: {
        width: '100%',
        height: 45,
        marginTop: 8,
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
    },
    boxInput: {
        flex: 1,
        height: '100%',
        borderWidth: 1,
        borderRadius: 17,
        paddingLeft: 45,
        paddingRight: 40,
        borderColor: themas.colors.seaGreen,
        backgroundColor: themas.colors.CinzaClaro,
        fontSize: 16,
    },
    icon: {
        position: 'absolute',
        left: 10,
        zIndex: 1,
    },
    iconRight: {
        position: 'absolute',
        right: 10,
        zIndex: 1,
    },
    button: {
        width: 220,
        height: 55,
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
    textButton: {
        color: themas.colors.white,
        fontSize: 20,
        fontWeight: 'bold',
    },
    backButton: {
        position: 'absolute',
        top: 40,
        left: 20, // Mudando de 'right' para 'left'
        flexDirection: 'row',
        alignItems: 'center',
        zIndex: 1,
    },
    backText: {
        color: themas.colors.seaGreen,
        fontSize: 16,
        fontWeight: 'bold',
        marginRight: 5,
    }
});
