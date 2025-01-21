import React from "react";
import {Text, View, Image, TextInput, Button} from "react-native";
import {style} from "./styles";
import Logo from "../../assets/logotipo.png";

export default function Login() {
  return (
    <View style={style.container}>
      <View style={style.boxTop}>
        <Image
            source={Logo}
            style={style.logo}
            resizeMode="contain"
        />
        <Text style={style.text}>Login</Text>
      </View>

      <View style={style.form}>
        <Text style={style.titleInput}>Endereço de E-mail</Text>
        
        <View>
            <TextInput style={style.boxInput}/>
            <Text style={style.input}></Text>
        </View>
        
        <Text style={style.titleInput}>Senha</Text>
        <View>
            <TextInput style={style.boxInput}/>
            <Text style={style.input}></Text>
        </View>
      </View>

      <View style={style.button}>      
        <Button title="Entrar"/>
      </View>

    </View>
    
  );
}