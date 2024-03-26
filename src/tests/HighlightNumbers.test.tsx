import React from "react";
import TestRenderer from "react-test-renderer";
import HighlightNumbers from "../components/HighlightNumbers";

it("HighlightNumbers renders", () => {
  const component = TestRenderer.create(
    <HighlightNumbers fuel="gas" perc={2.2} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it("shows the fuel and percentage on the box", async () => {
  const component = TestRenderer.create(
    <HighlightNumbers fuel="gas" perc={2.2} />
  );
  const instance = component.root;
  expect(instance).toContain("2.2");
  expect(instance).toContain("gas");
});
