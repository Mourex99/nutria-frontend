import React, { useState } from "react";
import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import type { DrawerNavigationProp } from '@react-navigation/drawer';
import { style } from "./styles";
import Logo from "../../assets/logotipo.png";
import { MaterialIcons } from '@expo/vector-icons';
import { themas } from "../../global/themes";

type RootStackParamList = {
  Login: undefined;
  Register: undefined;
};

type NavigationProp = DrawerNavigationProp<RootStackParamList, 'Register'>;

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation<NavigationProp>();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={style.container}>
      <TouchableOpacity 
        style={style.backButton}
        onPress={() => navigation.navigate('Login')}
      >
        <MaterialIcons name="arrow-back" size={24} color={themas.colors.seaGreen} />
        <Text style={style.backText}>Voltar</Text>
      </TouchableOpacity>

      <View style={style.boxTop}>
        <Image
          source={Logo}
          style={style.logo}
          resizeMode="contain"
        />
        <Text style={style.text}>Cadastro</Text>
      </View>

      <View style={style.form}>
        <Text style={style.titleInput}>Nome Completo</Text>
        <View style={style.inputContainer}>
          <MaterialIcons style={style.icon} name="person" size={24} color={themas.colors.seaGreen} />
          <TextInput style={style.boxInput} placeholder="Digite seu nome completo" />
        </View>

        <Text style={style.titleInput}>Endereço de E-mail</Text>
        <View style={style.inputContainer}>
          <MaterialIcons style={style.icon} name="email" size={24} color={themas.colors.seaGreen} />
          <TextInput 
            style={style.boxInput} 
            placeholder="Digite seu e-mail"
            keyboardType="email-address"
          />
        </View>
        
        <Text style={style.titleInput}>Senha</Text>
        <View style={style.inputContainer}>
          <MaterialIcons style={style.icon} name="lock" size={24} color={themas.colors.seaGreen} />
          <TextInput 
            style={style.boxInput} 
            secureTextEntry={!showPassword}
            placeholder="Digite sua senha"
          />
          <TouchableOpacity onPress={togglePasswordVisibility} style={style.iconRight}>
            <MaterialIcons 
              name={showPassword ? "visibility" : "visibility-off"} 
              size={24} 
              color={themas.colors.seaGreen} 
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={style.boxButton}>      
        <TouchableOpacity
          style={style.button}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={style.textButton}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}