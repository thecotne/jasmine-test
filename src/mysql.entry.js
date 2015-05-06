/**
 * Escapes special characters in a string for use in an SQL statement
 * @param  {String} str The string that is to be escaped.
 * @return {String} Returns the escaped string
 */
export function escape (str) {
	return str.replace(/[\0\x08\x09\x1a\n\r"'\\\%]/g, char => {
		switch (char) {
			case "\0":
				return "\\0";
			case "\x08":
				return "\\b";
			case "\x09":
				return "\\t";
			case "\x1a":
				return "\\z";
			case "\n":
				return "\\n";
			case "\r":
				return "\\r";
			case "\"":
			case "'":
			case "\\":
			case "%":
				return "\\"+char;
		}
	})
}

/**
 * escape values from query
 * @param {Array} strings
 * @param {...Array} values
 * @return {String}
 */
export function query(strings, ...values) {
	var _strings = strings.slice(0);
	for (let i in values) {
		_strings[i] += `"${escape(values[i])}"`
	}
	return _strings.join('');
}
