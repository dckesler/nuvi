import React from 'react';
import { shallow } from 'enzyme';
import { css } from 'aphrodite';
import ActivityLocation, { styles } from './activity-location.component.js';

describe('activity-location.component', () => {
	describe("mouse events", () => {
		it("should switch to hovered on a mouseover event", () => {
			const wrapper = shallow(
				<ActivityLocation
					latitude={1}
					longitude={1}/>
			);
			wrapper.find(`.${css(styles.location)}`).simulate("mouseover");
			expect(wrapper.find(`.${css(styles.popUp)}`).length).toBe(1);
		});
		it("should remove popup after the mouse leaves", () => {
			const wrapper = shallow(
				<ActivityLocation
					latitude={1}
					longitude={1}/>
			);
			wrapper.find(`.${css(styles.location)}`).simulate("mouseover");
			expect(wrapper.find(`.${css(styles.popUp)}`).length).toBe(1);
			wrapper.find(`.${css(styles.location)}`).simulate("mouseleave");
			expect(wrapper.find(`.${css(styles.popUp)}`).length).toBe(0);
		});
	})
	describe('location rendering', () => {
		it("should show error state on error", () => {
			const wrapper = shallow(
				<ActivityLocation
					latitude={1}
					longitude={1}/>
			);
			wrapper.setState({hover: true, error: true});
			expect(wrapper.find(`.${css(styles.error)}`).length).toBe(1);
		});
		it("should show location when there is one", () => {
			const wrapper = shallow(
				<ActivityLocation
					latitude={1}
					longitude={1}/>
			);
			wrapper.setState({hover: true, location: {state: 'UT', country: 'US'}});
			expect(wrapper.find(`.${css(styles.locationText)}`).props().children.join("")).toBe('UT, US');
		});
	})
})
