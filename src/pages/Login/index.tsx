import React, { useState } from "react";
import { Text, View, Image, TextInput, Button, TouchableOpacity } from "react-native";
import { style } from "./styles";
import Logo from "../../assets/logotipo.png";
import { MaterialIcons } from '@expo/vector-icons';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

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
        
        <View style={style.inputContainer}>
          <MaterialIcons style={style.icon} name="email" size={24} color="black" />
          <TextInput style={style.boxInput} />
        </View>
        
        <Text style={style.titleInput}>Senha</Text>
        
        <View style={style.inputContainer}>
          <TextInput style={style.boxInput} secureTextEntry={!showPassword} />
          <TouchableOpacity onPress={togglePasswordVisibility} style={style.icon}>
            <MaterialIcons name={showPassword ? "lock-open" : "lock"} size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={style.boxButton}>      
        <TouchableOpacity style={style.button}>
          <Text style={style.textButton}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}