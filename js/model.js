import { API_KEY, URL, TIMEOUT_MS } from './config';
import { timeout } from './helpers';

export const gameState = {
	difficulty: 'easy',
	category: 'linux',
	questionAmount: 1,
	currentQuestion: 1,
	correctAnsCounter: 0,
	selectedAnswers: [],
};

export const resetGameState = () => {
	gameState.currentQuestion = 1;
	gameState.questionAmount = 1;
	gameState.category = 'linux';
	gameState.difficulty = 'easy';
	gameState.correctAnsCounter = 0;
};

const checkCorrectness = (data) => {
	let flag = false;
	data.forEach((questionData, index) => {
		let counter = 0;
		Object.values(questionData.correct_answers).forEach((el) => {
			if (el === 'true') counter++;
		});

		if (
			(counter > 1 && questionData.multiple_correct_answers === 'false') ||
			(counter === 1 && questionData.multiple_correct_answers === 'true') ||
			counter === 0
		) {
			flag = true;
			data.splice(index, 1);
		}
	});
	return { data, flag };
};

export const getData = async function () {
	try {
		const res = await Promise.race([
			fetch(
				`${URL}?apiKey=${API_KEY}&difficulty=${gameState.difficulty}&category=${gameState.category}&limit=${gameState.questionAmount}`,
			),
			timeout(TIMEOUT_MS),
		]);

		const uncheckedData = await res.json();
		const { data, flag } = checkCorrectness(uncheckedData);

		gameState.questionData = data;
		gameState.flag = flag;

		return res;
	} catch (err) {
		throw err;
	}
};
