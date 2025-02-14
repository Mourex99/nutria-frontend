// Importações necessárias para o componente Menu
import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { style } from './styles';
import { themas } from "../../global/themes";

// Componente principal da tela de Menu
export default function Menu() {
  const navigation = useNavigation();

  return (
    // Container principal
    <View style={style.container}>
      {/* Cabeçalho com informações do usuário */}
      <View style={style.header}>
        <View style={style.userInfo}>
          <View style={style.userAvatar}>
            <MaterialIcons name="person" size={30} color={themas.colors.seaGreen} />
          </View>
          <View>
            <Text style={style.userName}>Olá, Usuário</Text>
            <Text style={style.userRole}>Bem-vindo(a) de volta!</Text>
          </View>
        </View>
      </View>

      {/* Grid de opções do menu */}
      <ScrollView style={style.menuGrid}>
        {/* Primeira linha de opções */}
        <View style={style.menuRow}>
          {/* Botão de Avaliações */}
          <TouchableOpacity style={style.menuItem}>
            <View style={style.menuIcon}>
              <MaterialIcons name="assessment" size={30} color={themas.colors.seaGreen} />
            </View>
            <Text style={style.menuText}>Avaliações</Text>
          </TouchableOpacity>

          {/* Botão de Cardápios */}
          <TouchableOpacity style={style.menuItem}>
            <View style={style.menuIcon}>
              <MaterialIcons name="restaurant-menu" size={30} color={themas.colors.seaGreen} />
            </View>
            <Text style={style.menuText}>Cardápios</Text>
          </TouchableOpacity>
        </View>

        {/* Segunda linha de opções */}
        <View style={style.menuRow}>
          {/* Botão de Consultas */}
          <TouchableOpacity style={style.menuItem}>
            <View style={style.menuIcon}>
              <MaterialIcons name="calendar-today" size={30} color={themas.colors.seaGreen} />
            </View>
            <Text style={style.menuText}>Consultas</Text>
          </TouchableOpacity>

          {/* Botão de Configurações */}
          <TouchableOpacity style={style.menuItem}>
            <View style={style.menuIcon}>
              <MaterialIcons name="settings" size={30} color={themas.colors.seaGreen} />
            </View>
            <Text style={style.menuText}>Configurações</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Botão de logout */}
      <TouchableOpacity 
        style={style.logoutButton}
        onPress={() => navigation.navigate('Login')}
      >
        <MaterialIcons name="logout" size={24} color={themas.colors.white} />
        <Text style={style.logoutButtonText}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}
