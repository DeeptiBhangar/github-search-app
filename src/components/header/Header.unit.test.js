import { shallow } from "enzyme";
import { render } from "@testing-library/react";
import Header from "./Header";

describe("HeaderComponent", () => {
  it("should render Header Component", () => {
    const component = shallow(<Header />);
    expect(component.getElements()).toMatchSnapshot();
  });

  it("should have text 'GitHub Search' in the header component", () => {
    const { getByText } = render(<Header />);
    expect(getByText("GitHub Search")).toBeDefined();
  });
});
