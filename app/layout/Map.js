import React, { Component } from "react";
import { connect } from "react-redux";
import { styles } from "../styles.android";

import MapView from "react-native-maps";
import { View } from "react-native";
import { bindActionCreators } from "redux";
import * as drawerActionsCreators from "../actions/drawerActions";
import BurgerMenuButton from "../components/BurgerMenu";

export class MapLayout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      region: {
        latitude: 52.2300,
        longitude: 21.0000,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
      drawer: {
        visible: false,
      },
    };

    this.showDrawer = this.showDrawer.bind(this);
  }

  showDrawer() {
    const prepare = Object.assign({}, this.state.drawer, { visible: true });

    this.props.drawerActions.showDrawer(prepare);
  }

  render() {
    return (
      <View style={styles.mapLayout}>
        <MapView
          style={styles.map}
          initialRegion={this.state.region}/>

        <View style={styles.mapOverLayer}>
          <BurgerMenuButton onPress={this.showDrawer} />
        </View>
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
    drawerActions: bindActionCreators(drawerActionsCreators, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MapLayout)
