
export function validation(email) {
	if (email.indexOf(' ') === -1) {
		if (email.indexOf('@') > -1) {
			var pieces = email.split('@');
			if (pieces.length === 2) {
				if (pieces[0].length > 0) {
					if (pieces[1].indexOf('.') > -1) {
						return true;
					}
				}
			}
		}
	}

	return false;
}
