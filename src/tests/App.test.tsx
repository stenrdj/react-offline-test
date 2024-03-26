import React from "react";
import renderer from "react-test-renderer";
import App from "../app";
import { data } from "./utils.test";

it("app renders", async () => {
  const component = await renderer.create(<App />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
