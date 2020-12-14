import { shallow } from "enzyme";
import { render } from "@testing-library/react";
import Button from "./Button";

describe("ButtonComponent", () => {
  it("should render Button Component", () => {
    const component = shallow(<Button />);
    expect(component.getElements()).toMatchSnapshot();
  });

  it("should have text passed for Button", () => {
    const { getByText } = render(<Button text="Search Repositories" />);
    expect(getByText(/Search/i).textContent).toBe("Search Repositories");
  });

  it("should renders with a className equal to the primary", () => {
    const { container } = render(<Button color="primary" />);
    expect(container.getElementsByClassName("primary").length).toBe(1);
  });

  it("should handle Button click event", () => {
    const mockCallBack = jest.fn();
    const button = shallow(<Button onClick={mockCallBack} text="Load More" />);
    button.find("button").simulate("click");
    expect(mockCallBack).toHaveBeenCalled();
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});
