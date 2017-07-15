import React, { Component } from "react";
import { AppRegistry } from "react-native";
import { Main } from "./app/index";

export default class reactNativeMapsApplication extends Component {
  render() {
    return (
      <Main/>
    );
  }
}

AppRegistry.registerComponent('reactNativeMapsApplication', () => reactNativeMapsApplication);
