/* eslint-disable id-denylist, id-length */

export const numberLetters = /** @type {const} */ ({
	b: ["┏━┓", "┣━┫", "┗━┛"],
	e: ["┏━ ", "┣━ ", "┗━ "],
	g: ["┏━ ", "┣━┓", "┗━┛"],
	h: ["╻  ", "┣━┓", "╹ ╹"],
	i: ["╻  ", "┃  ", "╹  "],
	l: ["╻  ", "┃  ", "┗━ "],
	o: ["┏━┓", "┃ ┃", "┗━┛"],
	s: ["┏━ ", "┗━┓", " ━┛"],
	z: [" ━┓", "┏━┛", "┗━ "]
});

/** @typedef {keyof typeof numberLetters} NumberLetters */
/** @typedef {typeof numberLetters[NumberLetters]} NumberSegments */