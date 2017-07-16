import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  mainLayout: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  AppContainer: {
  },
  AppDrawer: {
    backgroundColor: '#eeeeee'
  },
  mapLayout: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignSelf: 'stretch',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flex: 1,
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
  },
  mapOverLayer: {
    zIndex: 2,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  mapBurgerButton: {
    height: 30,
    width: 30,
    position: 'absolute',
    zIndex: 3,
    top: 25,
    left: 25,
    backgroundColor: '#000',
  }
});
