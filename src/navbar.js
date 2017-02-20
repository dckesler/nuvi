import React from 'react';
import { css, StyleSheet } from 'aphrodite';
import { boxes, texts } from 'styles';
import Moment from 'moment';

const routes = [
	{
		name: "Dashboard",
		url :"#/dashboard",
	},
	{
		name: "Daily",
		url :"#/daily",
	},
]
export default class NavBar extends React.Component {
	constructor() {
		super();
		this.state = {
			currentHash: window.location.hash,
		}
	}
	componentDidMount() {
		window.addEventListener('hashchange', () => {
			this.setState({
				currentHash: window.location.hash,
			})
		})
	}
	render() {
		return (
			<div className={`${css(styles.navBar)}`}>
					<img
						className={`${css(styles.logo)}`}
						src="https://www.nuvi.com/images/nuvi-logo-824fd756.png"/>
					<div className={`${css(styles.tabs)}`}>
						{routes.map(route => {
							return (
								<a
									className={`${css(styles.tab)}`}
									onClick={() => {
										window.location.hash = `${route.url}${route.name === "Daily" ? `/${Moment().format("YYYY-MM-DD")}` : ''}`;
									}}
									style={{
										textDecoration: this.state.currentHash.includes(route.url) ? "underline" : "none",
									}}
									key={route.url}>
									{route.name}
								</a>
							)
						})}
					</div>
			</div>
		)
	}
}

export const styles = StyleSheet.create({
	navBar: {
		...texts.header,
		...boxes.nuvi,
		color: "black",
		position: "fixed",
		display: "flex",
		top: 0,
		left: 0,
		right: 0,
		alignItems: "center",
	},
	logo: {
		padding: "16px",
		background: "black",
	},
	tabs: {
		flexGrow: 1,
		display: "flex",
		justifyContent: "space-around",
		alignItems: "center",
	},
	tab: {
		color: "black",
		cursor: "pointer",
	}
})
