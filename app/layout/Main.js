import React, { Component } from "react";
import { Text, View } from "react-native";
import { connect } from "react-redux";
import { styles } from "../styles.android";

export class MainLayout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.mainLayout}>
        <Text>Main Layout</Text>
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

export default MainLayout;
