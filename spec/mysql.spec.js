import {query} from '../src/mysql.entry.js';

describe('mysql library', () => {
	it('should escape strings', () => {
		var id = '" or 1=1 or 1="';
		expect(query`select * from table where id=${id}`)
			.toEqual('select * from table where id="\\\" or 1=1 or 1=\\\""');
	});
});

