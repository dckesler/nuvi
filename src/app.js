import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRedirect, hashHistory } from 'react-router';
import { activitiesStream, getStream } from './activities.resource.js';
import { css, StyleSheet } from 'aphrodite';

import NavBar from './navbar.js';
import Dashboard from './dashboard/dashboard.component.js';
import Daily from './daily/daily.component.js';
import NotFound from './not-found.component.js';

export default class App extends React.Component {
	render() {
		return (
			<div className={`${css(styles.app)}`}>
				<NavBar />
				<div className={`${css(styles.routes)}`}>
					<Router history={hashHistory}>
						<Route path='dashboard' component={Dashboard} />
						<Route path='daily/:day' component={Daily} />
						<Route path="*" component={NotFound} />
					</Router>
				</div>
			</div>
		)
	}
}
const styles = StyleSheet.create({
	app: {
		fontFamily: 'Gill Sans, sans-serif',
		marginTop: '112px',
		display: 'flex',
		justifyContent: 'center',
	},
	routes: {
		padding: '16px',
		margin: '0px auto',
	}
})

ReactDOM.render(<App/>, document.getElementById('app'));

