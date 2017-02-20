import { Observable } from 'rx';

export function getAddress(lat, lon) {
	return Observable.create(observer => {
		fetch(`http://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json&zoom=10`, {method: 'GET'})
			.then(response => {
				if (response.ok) {
					response.json().then(json => {
						if (!json.address) {
							observer.onError();
						} else {
							observer.onNext({
								country: json.address.country,
								state: json.address.state,
							});
						}
					})
				} else {
					observer.onError();
				}
			})
	})
}
