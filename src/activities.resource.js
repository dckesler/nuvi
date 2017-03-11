import { Observable } from 'rx';
import axios from 'axios';

const streams = {
	activities: null,
};

export function activitiesStream() {
	return Observable.create(observer => {
		getActivities().subscribe(response => {
			observer.onNext(response);
			setInterval(() => {
				getActivities().subscribe(response => {
					observer.onNext(response);
				});
			}, 60000);
		}, error => {
			throw new Error(error);
		});
	});
}

export function getActivities() {
	return Observable.fromPromise(axios.get(`https://nuvi-challenge.herokuapp.com/activities`))
		.map(response => response.data)
}
