import React from 'react';
import { css, StyleSheet } from 'aphrodite';
import { texts, colors, boxes, toClass } from 'styles';

import ActivityMessage from './activity-message.component.js';
import ActivityStats from './activity-stats.component.js';
import ActivityLocation from './activity-location.component.js';

export default class Activity extends React.Component {
	constructor() {
		super();
		this.state = {};
	}
	render() {
		const { activity } = this.props;
		return (
			<div
				style={{
					...boxes[activity.provider]
				}}
				className={`${css(styles.activity)}`}>
				<div className={`${css(styles.userInfo)}`}>
					<a
						href={activity.actor_url}
						className={`${css(styles.socialLink)}`}>
						<i
							style={{
								marginTop: '3px',
								marginLeft: '1px',
								color: colors[activity.provider]
							}}
							className={`icon-${activity.provider} `}/>
					</a>
					<span>{activity.actor_name}</span>
					{activity.activity_longitude && activity.activity_latitude
						? <ActivityLocation
								longitude={activity.activity_longitude}
								latitude={activity.activity_latitude}/>
						: <div></div>
					}
				</div>
				<div className={`${css(styles.activityInfo)}`}>
					<a
						onClick={() => {
							window.location.hash = `#/daily/${activity.activity_date}`
						}}
						className={`${css(styles.date)}`}>
						{activity.activity_date}
					</a>
					<ActivityMessage
						message={activity.activity_message} />
					<ActivityStats
						id={activity.id}
						likes={activity.activity_likes}
						shares={activity.activity_shares}
						comments={activity.activity_comments}/>
				</div>
			</div>
		)
	}
}

export const styles = StyleSheet.create({
	activity: {
		...boxes.card,
		display: 'inline-block',
		margin: '16px',
		maxWidth: '300px',
	},
	userInfo: {
		padding: '8px',
		background: 'white',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		borderRadius: '4px',
		marginBottom: '16px',
	},
	socialLink: {
		...texts.link,
		padding: '1px 4px',
		cursor: 'pointer',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		marginRight: '4px',
	},
	activityInfo: {
		background: 'white',
		padding: '8px',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	date: {
		...texts.link,
		display: 'inline-block',
		marginBottom: '8px',
	}
})
