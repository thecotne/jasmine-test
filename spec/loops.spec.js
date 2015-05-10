import * as loops from '../src/loops.entry.js';

describe('loops', () => {
	it('should not explode!', () => {
		let arr = ['ერთი', 'ორი', 'სამი'];
		expect(()=>loops.forOfAndDestructuring(arr)).not.toThrow();
	});
});



