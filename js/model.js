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
/////

export const testOBJ = {
	id: 1078,
	question:
		'If you see a directory with the following permissions `drwxrwxrxt`, would you be able to remove it?',
	description: null,
	answers: {
		answer_a: 'Only the owner of the folder can remove this folder',
		answer_b: 'Yes, we can remove it from any user',
		answer_c: 'We can remove it with the root user',
		answer_d: 'We can remove it only using the root user',
		answer_e: "No, this folder can't be remove.",
		answer_f: null,
	},
	multiple_correct_answers: 'true',
	correct_answers: {
		answer_a_correct: 'true',
		answer_b_correct: 'false',
		answer_c_correct: 'true',
		answer_d_correct: 'false',
		answer_e_correct: 'false',
		answer_f_correct: 'false',
	},
	correct_answer: null,
	explanation: null,
	tip: null,
	tags: [
		{
			name: 'Linux',
		},
	],
	category: 'Linux',
	difficulty: 'Easy',
};

///

export const resetGameState = () => {
	gameState.currentQuestion = 1;
	gameState.questionAmount = 1;
	gameState.category = 'linux';
	gameState.difficulty = 'easy';
	gameState.correctAnsCounter = 0;
};

export const getData = async function () {
	try {
		const res = await Promise.race([
			fetch(
				`${URL}?apiKey=${API_KEY}&difficulty=${gameState.difficulty}&category=${gameState.category}&limit=${gameState.questionAmount}`,
			),
			timeout(TIMEOUT_MS),
		]);

		const data = await res.json();
		console.log(data);
		gameState.questionData = data;
		return res;
	} catch (err) {
		throw err;
	}
};
