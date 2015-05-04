/**
 * Email Validation
 * @param  {String} email
 * @return {Boolean} True if email is valid
 */
export function validation(email) {
	// email does not contains spaces
	if (email.indexOf(' ') !== -1) return false;

	// email contains at symbol
	if (email.indexOf('@') === -1) return false;

	// email contains exactly one at symbol
	let pieces = email.split('@');
	if (pieces.length !== 2) return false;
	let [username, domain] = pieces;

	// email does not start with at symbol
	if (username.length <= 0) return false;

	// domain contains dot
	if (domain.indexOf('.') === -1) return false;

	// if email passed all above tests its valid
	return true;
}
