import * as email from '../src/email.entry.js';

describe('email validation', () => {
	it('should have validation function', () => {
		expect(email.validation).toBeDefined();
	});

	it('should return false if empty string is passed', () => {
		expect(email.validation('')).toBe(false);
	});

	it('should return true if valid email is passed', () => {
		expect(email.validation('cotne@itdc.ge')).toBe(true);
	});

	it('should not have spaces', () => {
		expect(email.validation('co tne@itdc.ge')).toBe(false);
	});

	it('should have dot after at symbole', () => {
		expect(email.validation('cotne@itdcge')).toBe(false);
	});

	it('should contain at symbole', () => {
		expect(email.validation('cotne.itdc.ge')).toBe(false);
	});

	it('should contain only one at symbole', () => {
		expect(email.validation('cotne@it.d@c.ge')).toBe(false);
	});

	it('should not start with at symbole', () => {
		expect(email.validation('@gmail.com')).toBe(false);
	});

});

