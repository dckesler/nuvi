import React from 'react';
import { boxes, colors, texts } from 'styles';
import { css, StyleSheet } from 'aphrodite';
import { getAddress } from 'src/location.resource.js';

export default class ActivityLocation extends React.Component {
	constructor() {
		super();
		this.state = {
			hover: false,
		}
	}
	render() {
		return (
			<div
				className={`${css(styles.location)}`}
				onMouseOver={this.mouseOver.bind(this)}
				onMouseLeave={() => {
					this.setState({
						hover: false,
					})
				}}>
				<i className={`icon-location ${css(styles.icon)}`}/>
				{this.state.hover &&
					<div className={`${css(styles.popUp)}`}>
						{this.showContent.call(this)}
					</div>
				}
			</div>
		)
	}
	mouseOver() {
		if (this.state.location || this.state.error || this.state.fetching) {
			this.setState({
				hover: true,
			})
		} else {
			this.setState({
				fetching: true,
				hover: true,
			});
			return getAddress(this.props.latitude, this.props.longitude)
				.subscribe(response => {
					this.setState({
						fetching: false,
						location: response,
					});

				}, error => {
					this.setState({
						error: true,
					})
				})
		}
	}
	showContent() {
		if (this.state.error)
			return (
				<div className={`${styles.error}`}>
					Unable to display location for this activity.
				</div>
			)
		if (this.state.location) {
			return (
				<div className={`${styles.locationText}`}>
					{this.state.location.state}, {this.state.location.country}
				</div>
			)
		}
		return (
			<div>Searching for location</div>
		)
	}
}

const styles = StyleSheet.create({
	location: {
		position: 'relative',
	},
	icon: {
		color: colors.red,
		float: 'right',
	},
	popUp: {
		...boxes.card,
		position: 'absolute',
		background: 'white',
		top: '100%',
	},
	error: {
		...colors.red,
		...texts.caption,
	},
	locationText: {
		...texts.caption,
	}
});
