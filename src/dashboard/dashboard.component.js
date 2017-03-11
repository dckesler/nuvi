import React from 'react';
import { activitiesStream } from 'src/activities.resource.js';
import { css, StyleSheet } from 'aphrodite';
import { texts } from 'styles';
import { chunk } from 'lodash';

import Activity from './activity.component.js';

export default class Dashboard extends React.Component {
	constructor() {
		super();
		this.state = {};
	}
	componentWillMount() {
		this.activityStream = activitiesStream().subscribe(activities => {
			this.setState({
				chunks: chunk(activities, Math.ceil(activities.length / 3))
			})
		});
	}
	componentWillUnmount() {
		this.activityStream.dispose();
	}
	render() {
		return (
			<div>
				<div className={`${css(styles.activities)}`}>
					{!this.state.chunks
						? <div style={texts.subheader}>Loading...</div>
						: this.state.chunks.map((chunk, index) => {
							return (
								<div
									key={index}
									className={`${css(styles.chunk)}`}>
									{chunk.map(activity => {
											return (
												<Activity
													key={activity.id}
													activity={activity}/>
											)
										})
									}
								</div>
							)
						})
					}
				</div>
			</div>
		)
	}
}

export const styles = StyleSheet.create({
	activities: {
		display: 'flex',
	},
	chunk: {
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'wrap',
	}
})
