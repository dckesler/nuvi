import React from 'react';
import { shallow } from 'enzyme';
import { css } from 'aphrodite';
import Provider, { styles } from './provider.component.js';
import { colors } from 'styles';

describe("provider.component", () => {
	it("should properly render sentiment if negative", () => {
		const wrapper = shallow(
			<Provider stats={{sentiment: -1}}/>
		);
		expect(wrapper.find(`.${css(styles.sentiment)}`).at(0).find('span').props().style.color)
			.toBe(colors.red);
	});
	it("should properly render sentiment if positive", () => {
		const wrapper = shallow(
			<Provider stats={{sentiment: 1}}/>
		);
		expect(wrapper.find(`.${css(styles.sentiment)}`).at(0).find('span').props().style.color)
			.toBe(colors.green);
	});
	it("should properly map stats", () => {
		const wrapper = shallow(
			<Provider stats={{sentiment: 1, like: 1, comment: 1}}/>
		);
		expect(wrapper.find(`.${css(styles.statBox)}`).length).toBe(2);
	});
});
