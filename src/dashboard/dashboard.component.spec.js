import React from 'react';
import { shallow } from 'enzyme';
import { css } from 'aphrodite';
import Dashboard, { styles } from './dashboard.component.js';
import Activity from './activity.component.js';

describe('dashboard.component', () => {
	it("should render a chunk for each set of activities", () => {
		const wrapper = shallow(
			<Dashboard />
		);
		wrapper.setState({
			chunks: [
				[{id: 1}],
				[{id: 2}],
				[{id: 3}],
			]
		});
		expect(wrapper.find(`.${css(styles.chunk)}`).length).toBe(3)
	});
	it("should render an activity for each activity in each chunk", () => {
		const wrapper = shallow(
			<Dashboard />
		);
		wrapper.setState({
			chunks: [
				[{id: 1}, {id: 2}],
				[{id: 3}, {id: 4}],
				[{id: 5}, {id: 6}],
			]
		});
		expect(wrapper.find(Activity).length).toBe(6);
	})
})
