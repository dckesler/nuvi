import React from 'react';
import { shallow } from 'enzyme';
import { css } from 'aphrodite';
import Daily, { toProviders } from './daily.component.js';
import Provider from './provider.component.js';

describe("daily.component", () => {
	it('should correctly format activity data to providers', () => {
		const providerData = mockActivities.reduce(toProviders, {});
		expect(providerData.twitter)
			.toEqual({like: 6, share: 6, comment: 3, sentiment: -1});
		expect(providerData.tumblr)
			.toEqual({like: 3, share: 3, comment: 1, sentiment: 0});
		expect(providerData.facebook)
			.toEqual({like: 3, share: 3, comment: 1, sentiment: -2});
		expect(providerData.instagram)
			.toEqual({like: 3, share: 3, comment: 1, sentiment: 1});
	});
	it('should show loading text with no providers', () => {
		const wrapper = shallow(
			<Daily />
		);
		wrapper.setState({providers: null});
		expect(wrapper.find('div').at(1).props().children).toBe('Loading')
	});
	it('should render a Provider component for each given provider', () => {
		const wrapper = shallow(
			<Daily />
		);
		wrapper.setState({
			providers: {
				twitter: {},
				facebook: {},
				tumblr: {},
			}
		});
		expect(wrapper.find(Provider).length).toBe(3);
	})
});

const mockActivities = [
	{
		provider: "twitter",
		activity_likes: 1,
		activity_shares: 1,
		activity_comments: 0,
		activity_sentiment: 1
	},
	{
		provider: "twitter",
		activity_likes: 2,
		activity_shares: 2,
		activity_comments: 1,
		activity_sentiment: -1
	},
	{
		provider: "twitter",
		activity_likes: 3,
		activity_shares: 3,
		activity_comments: 2,
		activity_sentiment: -1
	},
	{
		provider: "tumblr",
		activity_likes: 1,
		activity_shares: 1,
		activity_comments: 0,
		activity_sentiment: 1
	},
	{
		provider: "tumblr",
		activity_likes: 2,
		activity_shares: 2,
		activity_comments: 1,
		activity_sentiment: -1
	},
	{
		provider: "facebook",
		activity_likes: 1,
		activity_shares: 1,
		activity_comments: 0,
		activity_sentiment: -1
	},
	{
		provider: "facebook",
		activity_likes: 2,
		activity_shares: 2,
		activity_comments: 1,
		activity_sentiment: -1
	},
	{
		provider: "instagram",
		activity_likes: 1,
		activity_shares: 1,
		activity_comments: 0,
		activity_sentiment: 1
	},
	{
		provider: "instagram",
		activity_likes: 2,
		activity_shares: 2,
		activity_comments: 1,
		activity_sentiment: 0
	},
]
