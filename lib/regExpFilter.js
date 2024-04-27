/** @param {RegExp} regExp */
export const regExpFilter =
	regExp =>
	/** @param {string} string */
	string =>
		regExp.test(string);