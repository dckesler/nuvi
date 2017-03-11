import React from 'react';
import { css, StyleSheet } from 'aphrodite';
import { texts, boxes, colors } from 'styles';
import { map } from 'lodash';


export default class Provider extends React.Component {
	render() {
		const sentiment = this.props.stats.sentiment;
		return (
			<div
				className={`${css(styles.provider)}`}
				style={boxes[this.props.provider]}>
				<div className={`${css(styles.content)}`}>
					<i
						style={{color: colors[this.props.provider]}}
						className={`icon-${this.props.provider} ${css(styles.providerIcon)}`}/>
					<div
						className={`${css(styles.sentiment)}`}>
						Sentiment:&nbsp;
						<span style={{color: sentiment < 0
							? colors.red
							: sentiment ? colors.green : colors.inactive
						}}>
							{sentiment}
						</span>
					</div>
					<div className={`${css(styles.stats)}`}>
						{map(this.props.stats, (value, key) => {
							if (key === 'sentiment') return null;
							return (
								<div
									className={`${css(styles.statBox)}`}
									key={key}>
									<div className={`${css(styles.stat)}`}>{value}</div>
									<i className={`icon-${key} ${css(styles.statIcon)}`}/>
								</div>
							)
						})}
					</div>
				</div>
			</div>
		)
	}
}

export const styles = StyleSheet.create({
	provider: {
		...boxes.card,
		marginBottom: '16px',
	},
	content: {
		borderRadius: '4px',
		background: 'white',
		padding: '8px',
		display: 'flex',
		alignItems: 'center',
	},
	providerIcon: {
		...texts.header,
		marginRight: '24px',
		marginTop: '4px',
	},
	sentiment: {
		...texts.subheader,
		marginRight: '16px',
	},
	stats: {
		...texts.body,
		display: 'flex',
	},
	statBox: {
		display: 'flex',
		alignItems: 'center',
	},
	stat: {
		marginRight: '8px',
	},
	statIcon: {
		marginRight: '16px',
	}
});
