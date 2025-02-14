import { StyleSheet } from 'react-native';
import { themas } from '../../global/themes';

export const style = StyleSheet.create({
  logoutButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: themas.colors.seaGreen,
    borderRadius: 5,
    alignItems: 'center',
  },
  logoutButtonText: {
    color: themas.colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
