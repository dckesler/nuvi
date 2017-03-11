import React from 'react';
import { shallow } from 'enzyme';
import { css } from 'aphrodite';
import Dashboard, { styles } from './dashboard.component.js';
import ActivityStats from './activity-stats.component.js';
import { colors } from 'styles';

describe('activity-stats.component', () => {
	it('should render properly', () => {
		const wrapper = shallow(
			<ActivityStats likes={1} shares={2} comments={3} id={4} />
		);
		expect(wrapper).toMatchSnapshot();
	});
	it('should adjust icon colors based on interaction', () => {
		const wrapper = shallow(
			<ActivityStats likes={1} shares={2} comments={3} id={4} />
		);
		expect(wrapper.find(`.icon-like`).props().style.color).toBe(colors.inactive);
		expect(wrapper.find(`.icon-share`).props().style.color).toBe(colors.inactive);
		expect(wrapper.find(`.icon-comment`).props().style.color).toBe(colors.inactive);
		wrapper.setState({like: true, share: true, comment: true});
		expect(wrapper.find(`.icon-like`).props().style.color).toBe(colors.green);
		expect(wrapper.find(`.icon-share`).props().style.color).toBe(colors.green);
		expect(wrapper.find(`.icon-comment`).props().style.color).toBe(colors.green);
	});
})
