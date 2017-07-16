import "react-native";
import React from "react";

import renderer from "react-test-renderer";
import { MapLayout } from "./Map";

test('renders correctly', () => {
  const tree = renderer.create(
    <MapLayout />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});