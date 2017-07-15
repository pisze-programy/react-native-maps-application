import React, { Component } from "react";
import { Text, View } from "react-native";
import MapView from 'react-native-maps';

import { connect } from "react-redux";
import { styles } from "../styles.android";

export class MainLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: 52.2300,
        longitude: 21.0000,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }
    }
  }

  render() {
    return (
      <View style={styles.mainLayout}>
        <Text>Main Layout</Text>

        <MapView
          style={styles.map}
          initialRegion={this.state.region}
        />
      </View>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {}
}
/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainLayout);
