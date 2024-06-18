import React from 'react';
import { View, TouchableOpacity, Image, Text, StyleSheet } from 'react-native';
import logomarca from "../../assets/logomenu.png"

const Header = ({ onPressMenu }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPressMenu} style={styles.menuButton}>
        <Image source={logomarca} style={styles.icon} />
      </TouchableOpacity>
      <Text style={styles.logo}>Mapa Senai</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 10,
    backgroundColor: '#f4511e', // Cor de fundo do header
  },
  menuButton: {
    padding: 10,
  },
  icon: {
    width: 30,
    height: 30,
    tintColor: '#fff', // Cor do ícone do menu
  },
  logo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default Header;