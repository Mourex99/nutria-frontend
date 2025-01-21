import { Dimensions, StyleSheet } from "react-native";
import {themas} from '../../global/themes';

export const style = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    boxTop:{
        height: Dimensions.get('window').height/3,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    form:{
        height: Dimensions.get('window').height/3,
        width: '100%',
        backgroundColor: '#cbded0',
        paddingHorizontal: 37,
    },
    button:{
        height: Dimensions.get('window').height/3,
        width: '100%',
        backgroundColor: '#cbded0',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo:{
        height: 200,
        width:  200,
    },
    text:{
        fontSize: 35,
        fontWeight: 'bold',
        color: '#2e765e',
        textShadowColor: '#000',
        textShadowOffset: {width: 1, height: 1},
        textShadowRadius: 1,
    },
    titleInput:{
        marginLeft: 5,
        color:themas.colors.seaGreen,
        marginTop: 20,
    },
    boxInput:{
        width: '100%',
        height: 40,
        borderWidth: 1,
        //borderRadius: 10,
        marginTop: 10,
        flexDirection: 'row',
    },
    input:{
        
    }
})