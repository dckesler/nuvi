import { Observable } from 'rx';
import axios from 'axios';

export function getAddress(lat, lon) {
	return Observable.fromPromise(axios.get(`http://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json&zoom=10`))
		.map(response => ({country: response.data.address.country, state: response.data.address.state}))
}
