import React from 'react';
import { shallow } from 'enzyme';
import { css } from 'aphrodite';
import ActivityMessage, { styles } from './activity-message.component.js';

describe("activity-message.component", () => {
	it("should render an image if the message is one", () => {
		const wrapper = shallow(
			<ActivityMessage message={'https://img.com/img'}/>
		);
		expect(wrapper.find(`.${css(styles.img)}`).length).toBe(1);
	});
	it("should show text is message is text", () => {
		const wrapper = shallow(
			<ActivityMessage message={'Text'}/>
		);
		expect(wrapper.find(`.${css(styles.img)}`).length).toBe(0);
		expect(wrapper.find(`.${css(styles.message)}`).props().children).toBe('Text');
	});
});
