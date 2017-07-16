import React from 'react';
import { TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

const BurgerMenuButton = ({onPress, }) => {
  return (
    <TouchableOpacity style={styles.burgerMenuContainer} onPress={onPress}>
      <Icon name="bars" size={20} color="#000" />
    </TouchableOpacity>
  );
};

const styles = {
  burgerMenuContainer: {
    padding: 20,
    position: 'absolute',
    zIndex: 2,
  }
};

export default BurgerMenuButton;
