import { badLettersBonusFilter } from "./lib/badLettersBonusFilter.js";
import { fetchWords } from "./lib/fetchWords.js";
import { numberLetters } from "./lib/numberLetters.js";
import { stringTo7Segment } from "./lib/stringTo7Segment.js";

void fetchWords()
	.then(badLettersBonusFilter)
	.then(filteredWords =>
		filteredWords
			.slice(0, 5)
			.map(stringTo7Segment(numberLetters))
			.join("\n\n"),
	)
	// eslint-disable-next-line no-console
	.then(console.log);
