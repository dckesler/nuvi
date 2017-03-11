import React from 'react';
import { shallow } from 'enzyme';
import { css } from 'aphrodite';
import NavBar, { styles } from './navbar.js';

describe("navbar", () => {
	it("should underline the right tab based on hash", () => {
		const wrapper = shallow(
			<NavBar />
		);
		wrapper.setState({
			currentHash: "#/daily",
		});
		expect(wrapper.find(`.${css(styles.tab)}`).at(1).props().style.textDecoration).toBe('underline');
	})
});
