import "react-native";
import React from "react";
import { MainLayout } from "./Main.js";
import renderer from "react-test-renderer";

test('renders correctly', () => {
  const tree = renderer.create(
    <MainLayout />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});