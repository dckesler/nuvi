import React from 'react';
import { shallow } from 'enzyme';
import { css } from 'aphrodite';
import Activity, { styles } from './activity.component.js';
import ActivityLocation from './activity-location.component.js';
import { colors } from 'styles';

describe("activity.component", () => {
	describe("icon rendering", () => {
		const supportedIcons = ['twitter', 'instagram', 'tumblr', 'facebook'];
		supportedIcons.forEach(provider => {
			it(`should render ${provider} icon` ,() => {
				const wrapper = shallow(
					<Activity activity={{provider}}/>
				);
				expect(wrapper.find(`.icon-${provider}`).props().style.color).toBe(colors[provider]);
			});
		})
	})
	it('should render location component if activity has location', () => {
		const wrapper = shallow(
			<Activity activity={{activity_longitude: 1, activity_latitude: 2}}/>
		);
		expect(wrapper.find(ActivityLocation).length).toBe(1);
	});
})
