import React from "react";
import { shallow } from "enzyme";
import ExampleComponent from "../ExampleComponent";
import ExampleComponents from "../ExampleComponents";
import ExampleStateComponent from "../ExampleStateComponent";

describe('ExampleComponents', () => {
    it('is rendered correctly', () => {
        const component = shallow(<ExampleComponents />);
        expect(component.contains(
          <ExampleComponent>
            This is the example component
          </ExampleComponent>,
          <ExampleStateComponent />
        )).toBe(true);
    });
});
