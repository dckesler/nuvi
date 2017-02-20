import React from 'react';
import { css, StyleSheet } from 'aphrodite';
import { texts, colors, boxes, toClass } from 'styles';

export default class ActivityStats extends React.Component {
	constructor() {
		super();
		this.state = {
		}
	}
	render() {
		const { likes, shares, comments, id } = this.props;
		return (
			<div className={`${css(styles.activityStats)}`}>
				<div className={`${css(styles.stat)}`}>
					{likes}
					<div
						onClick={this.interact.bind(this, id, 'like')}
						className={`${css(styles.statIcon)}`}>
						<i
							style={{
								color: this.state.like ? colors.green : colors.inactive
							}}
							className={`icon-like`}/>
					</div>
				</div>
				<div className={`${css(styles.stat)}`}>
					{shares}
					<div
						onClick={this.interact.bind(this, id, 'share')}
						className={`${css(styles.statIcon)}`}>
						<i
							style={{
								color: this.state.share ? colors.green : colors.inactive
							}}
							className={`icon-share`}/>
					</div>
				</div>
				<div className={`${css(styles.stat)}`}>
					{comments}
					<div
						onClick={this.interact.bind(this, id, 'comment')}
						className={`${css(styles.statIcon)}`}>
						<i
							style={{
								color: this.state.comment ? colors.green : colors.inactive
							}}
							className={`icon-comment`}/>
					</div>
				</div>
			</div>
		)
	}
	interact(id, type) {
		console.log('sent network request with id and type to take actual action');
		this.setState({
			[type]: true,
		})
	}
}

export const styles = StyleSheet.create({
	activityStats: {
		display: 'flex',
		justifyContent: 'space-around',
		alignItems: 'center',
		width: '200px',
	},
	stat: {
		display: 'flex',
		alignItems: 'center',
	},
	statIcon: {
		...texts.link,
		marginTop: '4px',
		marginLeft: '4px',
	}
});
