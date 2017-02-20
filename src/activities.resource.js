import { Observable } from 'rx';

const streams = {
	activities: null,
};

export function getStream(stream) {
	return streams[stream];
}

export function activitiesStream() {
	streams.activities = Observable.create(observer => {
		getActivities().subscribe(response => {
			observer.onNext(response);
			setInterval(() => {
				getActivities().subscribe(response => {
					observer.onNext(response);
				});
			}, 60000);
		});
	});
}

export function getActivities() {
	return Observable
		.create(observer => {
			const options = {
				method: 'GET',
			};
			fetch(`https://nuvi-challenge.herokuapp.com/activities`, options)
				.then(response => {
					if (response.ok) {
						response.json()
							.then(json => {
								observer.onNext(json);
								observer.onCompleted();
							})
					} else {
						observer.onError(response.statusText);
					}
				})
		})	
}
