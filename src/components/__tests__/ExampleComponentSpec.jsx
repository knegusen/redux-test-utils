import React from "react";
import { shallow } from "enzyme";
import ExampleComponent from "../ExampleComponent";

describe('ExampleComponent', () => {
    describe('label', () => {
        describe('when not defined', () => {
            it('renders default label', () => {
                const component = shallow(<ExampleComponent />);
                expect(component.contains('No label')).toBe(true);
            });
        });

        describe('when defined', () => {
            it('should write label', () => {
                const label = 'Label';
                const component = shallow(<ExampleComponent>{label}</ExampleComponent>);
                expect(component.contains(label)).toBe(true);
            });
        });
    });
});
