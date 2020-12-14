import { shallow } from "enzyme";
import { render } from "@testing-library/react";
import ErrorMessage from "./ErrorMessage";

describe("ErrorComponent", () => {
  it("should render Error Component", () => {
    const component = shallow(
      <ErrorMessage errorText="No repositories found." />
    );
    expect(component.getElements()).toMatchSnapshot();
  });

  it("should have text passed in the props", () => {
    const { getByText } = render(
      <ErrorMessage errorText="No repositories found." />
    );
    expect(getByText("No repositories found.")).toBeDefined();
  });
});
