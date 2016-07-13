import React from "react";
import { shallow } from "enzyme";
import ExampleStateComponent from "../ExampleStateComponent";

describe('ExampleStateComponent', () => {
    it('is rendered', () => {
        const component = shallow(<ExampleStateComponent />);
        expect(component.find('p').text()).toBe('example text');
    });

    describe('button', () => {
        it('is rendered', () => {
            const component = shallow(<ExampleStateComponent />);
            expect(component.find('button').length).toBe(1);
        });

        it('has class name button', () => {
            const component = shallow(<ExampleStateComponent />);
            expect(component.find('button').hasClass('textChangeButton')).toBe(true);
        });

        it('updates text after click', () => {
            const component = shallow(<ExampleStateComponent />);
            component.find('button').simulate('click');
            expect(component.find('p').text()).toBe('new state example text');
        });
    });
});
