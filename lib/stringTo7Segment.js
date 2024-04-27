/**
 * @typedef {readonly [top: string, middle: string, bottom: string]} Segment
 */

/**
 * @template {Record<string, Segment>} Letters
 * @param {Letters} letters
 */
export const stringTo7Segment =
	letters =>
	/** @param {string} string */
	string =>
		[...string]
			.map(
				letter =>
					/** @type {Segment} */ (
						letters[letter.toLocaleLowerCase()]
					),
			)
			.reduce(
				([outTop, outMiddle, outBottom], [top, middle, bottom]) =>
					/**
					 * @type {[
					 * 	tops: ReadonlyArray<string>,
					 * 	middles: ReadonlyArray<string>,
					 * 	bottoms: ReadonlyArray<string>
					 * ]}
					 */ ([
						[...outTop, top],
						[...outMiddle, middle],
						[...outBottom, bottom],
					]),
				/**
				 * @type {[
				 * 	tops: ReadonlyArray<string>,
				 * 	middles: ReadonlyArray<string>,
				 * 	bottoms: ReadonlyArray<string>
				 * ]}
				 */ ([[], [], []]),
			)
			.map(line => line.join(" "))
			.join("\n");
