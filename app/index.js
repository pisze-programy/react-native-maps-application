import React, { Component } from "react";
import configureStore from "./store";
import { Provider } from "react-redux";
import MainLayout from "./layout/Main";

const store = configureStore();

export class Main extends Component {
  constructor() {
    super();
  }

  render () {
    return (
      <Provider store={store}>
        <MainLayout/>
      </Provider>
    )
  }
}