import { shallow } from "enzyme";
import { render } from "@testing-library/react";
import Loading from "./Loading";

describe("LoadingComponent", () => {
  it("should render Loading Component", () => {
    const component = shallow(<Loading />);
    expect(component.getElements()).toMatchSnapshot();
  });

  it("should have text 'Loading Repositories...' in the component", () => {
    const { getByText } = render(<Loading />);
    expect(getByText("Loading Repositories...")).toBeDefined();
  });
});
