import React from 'react';
import { css, StyleSheet } from 'aphrodite';
import { texts } from 'styles';

export default class ActivityMessage extends React.Component {
	render() {
		const { message } = this.props;
		const isMedia = message.includes('https://');
		return (
			<div className={`${css(styles.message)}`}>
				{isMedia
					? <img
							className={`${css(styles.img)}`}
							src={message.trim()} />
					: message
				}
			</div>
		);
	}
}

export const styles = StyleSheet.create({
	message: {
		borderRadius: '4px',
		border: '1px solid #666',
		padding: '4px',
	},
	img: {
		maxHeight: '200px',
		maxWidth: '200px',
	}
})
