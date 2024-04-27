export const fetchWords = () =>
	fetch(
		"https://raw.githubusercontent.com/dwyl/english-words/master/words.txt",
	)
		.then(words => words.text())
		.then(words =>
			words.split("\n").filter(word => /^[a-zA-Z]+$/gu.test(word)),
		);
