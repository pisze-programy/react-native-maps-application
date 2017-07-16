import React, { Component } from "react";
import { connect } from "react-redux";
import { styles } from "../styles.android";

import { ScrollView, Text } from "react-native";

export class MenuLayout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      drawer: {
        visible: true,
      }
    };

    this.closeDrawer = this.closeDrawer.bind(this);
  }

  closeDrawer() {
    this.props.drawerActions.hideDrawer(this.state.drawer);
  }

  render() {
    return (
      <ScrollView style={styles.AppDrawer}>
        <Text>Menu</Text>
      </ScrollView>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {

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
)(MenuLayout)
