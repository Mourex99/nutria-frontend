import { Dimensions, StyleSheet } from 'react-native';
import { themas } from '../../global/themes';

export const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#cbded0',
    },
    header: {
        height: Dimensions.get('window').height / 4,
        backgroundColor: themas.colors.seaGreen,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        padding: 20,
        justifyContent: 'flex-end',
    },
    welcomeText: {
        color: themas.colors.white,
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subtitle: {
        color: themas.colors.white,
        fontSize: 16,
        opacity: 0.8,
    },
    menuGrid: {
        padding: 20,
        marginTop: 20,
    },
    menuRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    menuItem: {
        width: '47%',
        height: 150,
        backgroundColor: themas.colors.white,
        borderRadius: 20,
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    menuIcon: {
        backgroundColor: '#cbded0',
        padding: 15,
        borderRadius: 15,
        marginBottom: 10,
    },
    menuText: {
        color: themas.colors.seaGreen,
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    userInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    userAvatar: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: themas.colors.white,
        marginRight: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    userName: {
        color: themas.colors.white,
        fontSize: 20,
        fontWeight: 'bold',
    },
    userRole: {
        color: themas.colors.white,
        fontSize: 14,
        opacity: 0.8,
    },
    logoutButton: {
        position: 'absolute',
        bottom: 20,
        left: 20,
        right: 20,
        backgroundColor: themas.colors.seaGreen,
        padding: 15,
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoutButtonText: {
        color: themas.colors.white,
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 10,
    }
});
