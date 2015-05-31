import {loadData} from '../src/async.entry.js';

describe('async functions', () => {
	it('escape the callback hell!', (done) => {
		expect(async () => await loadData()).not.toThrow();
		done();
	});
});

