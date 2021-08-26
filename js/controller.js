import mainView from './views/mainView.js';
import gameView from './views/gameView.js';
import resultView from './views/resultView.js';
import { gameState, getData, resetGameState } from './model.js';
import { TIME_TO_NEXT_QUESTION } from './config.js';
import { wait } from './helpers.js';

import { testOBJ } from './model.js';
// https://quizapi.io/docs/1.0/overview#request-parameters

// if (module.hot) {
// 	module.hot.accept();
// }

const controlActive = (e, categoryList, categoryParent) => {
	const cat = e.target.closest('.main__item');

	// Guard class
	if (!cat) return;

	// Remove active calss from all category elements
	mainView.removeActiveClass(categoryList);

	// Set active class
	cat.classList.add('active');

	// Set current category in game object
	gameState.category = cat.dataset.cat;
};

const controlStart = async (questionAmount) => {
	try {
		gameState.questionAmount = questionAmount;

		// LOAD SPINNER
		mainView.renderSpinner();

		const { ok: status } = await getData();
		if (!status) throw new Error('Cannot load questions from server');
		// gameState.questionData = [testOBJ];

		gameView.render(gameState);

		refreshGameHandler();
	} catch (err) {
		mainView.removeSpinner();
		mainView.renderError(err.message);

		await wait(4000);
		mainView.removeError();
	}
};

const controlBack = () => {
	resetGameState();
	mainView.render();
	init();
};

const controlselectAnswers = function (clickedAnswer) {
	// Add / remove selected class on answer
	gameView.toggleSelectedClass(clickedAnswer);

	// Add or remove answer from array
	if (gameState.selectedAnswers.includes(clickedAnswer)) {
		// Find index of proper answer
		const index = gameState.selectedAnswers.findIndex(
			(el) => el === clickedAnswer,
		);

		// remove
		gameState.selectedAnswers.splice(index, 1);
	} else gameState.selectedAnswers.push(clickedAnswer);
};

const controlCheckButton = () => {
	controllAnswer(gameState.selectedAnswers, true);
};

const controllAnswer = async (clickedAnswer, multi = false) => {
	const correctAnswers = [];
	const currentQuestion = gameState.questionData[gameState.currentQuestion - 1];

	// Push correct answers to the array
	Object.entries(currentQuestion.correct_answers).forEach((el, i) => {
		if (el[1] === 'true') {
			correctAnswers.push(el[0].slice(7, 8).toUpperCase());
		}
	});

	if (multi) {
		correctAnswers.sort();
		clickedAnswer.sort();
	}
	if (correctAnswers.join('') === clickedAnswer.join('')) {
		// Add correct flag to the question object
		currentQuestion.correct = true;
		gameState.correctAnsCounter++;
		// Set the color of the element to green
	} else {
		currentQuestion.correct = false;
	}
	gameView.setAnswersColor(correctAnswers);

	// Add player answer to questionData

	const playerAns = clickedAnswer.flatMap((el) => {
		const output = `answer_${el.toLowerCase()}`;
		return output;
	});

	gameState.questionData[gameState.currentQuestion - 1].playerAnswer =
		playerAns;

	gameState.currentQuestion++;

	// Wait and reneder another question.
	if (gameState.currentQuestion <= gameState.questionAmount) {
		await wait(TIME_TO_NEXT_QUESTION);
		gameView.render(gameState);
		refreshGameHandler();
	} else {
		resultView.render(gameState);
		resultView.addHanlderBack(controlBack);
		// RESULT VIEW
	}
};

const refreshGameHandler = () => {
	gameView.addHandlerAnswer(controllAnswer, controlselectAnswers);
	gameView.addHandlerButton(controlCheckButton);
	gameView.addHanlderBack(controlBack);
	gameState.selectedAnswers = [];
};

const init = () => {
	mainView.addHandlerActive(controlActive);
	mainView.addHandlerStart(controlStart);
};

init();
