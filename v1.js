import { badLettersV1Filter } from "./lib/badLettersV1Filter.js";
import { fetchWords } from "./lib/fetchWords.js";
import { letters } from "./lib/letters.js";
import { stringTo7Segment } from "./lib/stringTo7Segment.js";

void fetchWords()
	.then(badLettersV1Filter)
	.then(filteredWords =>
		filteredWords.slice(0, 5).map(stringTo7Segment(letters)).join("\n\n"),
	)
	// eslint-disable-next-line no-console
	.then(console.log);
