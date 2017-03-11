const fakeObs = {
	subscribe() {
	},
	map() {
		return fakeObs;
	},
	filter() {
		return fakeObs;
	}
}
export default {
	Observable: {
		fromPromise(promise) {
			return {
				...fakeObs,
				subscribe(cb) {
					promise.then(cb);
				},
			};
		},
		create() {
			return fakeObs;
		}
	}
}
