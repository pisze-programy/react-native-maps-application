import "react-native";
import React from "react";
import { MenuLayout } from "./Menu";

import renderer from "react-test-renderer";

test('renders correctly', () => {
  const tree = renderer.create(
    <MenuLayout />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});