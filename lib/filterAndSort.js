import { sortByLength } from "./sortByLength.js";
import { regExpFilter } from "./regExpFilter.js";

/** @param {RegExp} regExp */
export const filterAndSort =
	regExp =>
	/** @param {ReadonlyArray<string>} strings */
	strings =>
		strings.filter(regExpFilter(regExp)).sort(sortByLength);