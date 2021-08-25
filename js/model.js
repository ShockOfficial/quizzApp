import { API_KEY, URL } from './config';

export const gameState = {
	difficulty: 'easy',
	category: 'linux',
	questionAmount: 1,
	currentQuestion: 1,
};

export const getData = async function () {
	try {
		const res = await fetch(
			`${URL}?apiKey=${API_KEY}&difficulty=${gameState.difficulty}&category=${gameState.category}&limit=${gameState.questionAmount}`,
		);
		const [data] = await res.json();
		gameState.questionData = data;
		console.log(data);
		return res;
	} catch (err) {
		throw err;
	}
};
