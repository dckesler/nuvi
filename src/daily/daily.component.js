import React from 'react';
import { css, StyleSheet } from 'aphrodite';
import { getStream } from 'src/activities.resource.js';
import { texts } from 'styles';
import { map } from 'lodash';

import Provider from './provider.component.js';

export default class Daily extends React.Component {
	constructor() {
		super();
		this.state = {};
	}
	componentWillMount() {
		this.activityStream = getStream('activities')
			.filter(({activity_date}) => activity_date === this.props.day)
			.map(activities => {
				return activities.reduce(toProviders, {});
			})
			.subscribe(providers => {
				this.setState({
					providers
				});
			})
	}
	componentWillUnmount() {
		this.activityStream.dispose();
	}
	render() {
		return (
			<div>
				{!this.state.providers
					? <div style={texts.subheader}>Loading</div>
					: map(this.state.providers, (stats, provider) => {
							return (
								<Provider
									key={provider}
									provider={provider}
									stats={stats}/>
							)
						})
					}
			</div>
		)
	}
}

function toProviders(total, curr) {
	const provider = total[curr.provider] || {};
	provider.like = curr.activity_likes + (provider.likes || 0);
	provider.share = curr.activity_shares + (provider.shares || 0);
	provider.comment = curr.activity_comments + (provider.comments || 0);
	provider.sentiment = curr.activity_sentiment + (provider.sentiment || 0);
	return {...total, [curr.provider]: provider};
}
