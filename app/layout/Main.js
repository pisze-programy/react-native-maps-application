import React, { Component } from "react";
import { Dimensions, DrawerLayoutAndroid, Text, View } from "react-native";

import { connect } from "react-redux";
import { styles } from "../styles.android";
import MenuLayout from "./Menu";
import MapLayout from "./Map";

const { width } = Dimensions.get('window');

export class MainLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerReducer: {
        instance: null,
        visible: false,
      }
    };

    this.showDrawer = this.showDrawer.bind(this);
    this.hideDrawer = this.hideDrawer.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.drawerReducer && nextProps.drawerReducer !== this.state.drawerReducer) {
      this.setState({
        drawer: Object.assign({}, this.state.drawerReducer, nextProps.drawerReducer),
      });

      if (nextProps.drawerReducer.visible) {
        this.showDrawer();
      } else {
        this.hideDrawer();
      }
    }
  }

  showDrawer() {
    this.state.drawerReducer.instance.openDrawer();
  }

  hideDrawer() {
    this.state.drawerReducer.instance.closeDrawer();
  }

  render() {
    return (
      <View style={styles.mainLayout}>
        <DrawerLayoutAndroid
          style={styles.AppContainer}
          ref={(drawer) => this.state.drawerReducer.instance = drawer}
          drawerWidth={width - (width / 5)}
          renderNavigationView={() => <MenuLayout/>}>
          <View style={{flex: 1, alignItems: 'center'}}>
            <MapLayout />
          </View>
        </DrawerLayoutAndroid>
      </View>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    drawerReducer: state.drawerReducer,
  }
}
/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {

  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainLayout);
