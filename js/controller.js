import mainView from './views/mainView.js';
import gameView from './views/gameView.js';
import { gameState, getData } from './model.js';
import { TIME_TO_NEXT_QUESTION } from './config.js';

// https://quizapi.io/docs/1.0/overview#request-parameters

// if (module.hot) {
// 	module.hot.accept();
// }

const wait = async function (ms) {
	return new Promise((resolve) => {
		setTimeout(resolve, ms);
	});
};

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

		const { ok: status } = await getData();
		if (!status) throw new Error('Cannot load questions from server');

		gameView.render(gameState);
		console.log(gameState);
		refreshGameHandler();
	} catch (err) {
		// TEMP ERROR
		console.error(err);
	}
};

const controlBack = () => {
	mainView.render();
	init();
};

const controllAnswer = async (clickedAnswer) => {
	let correctAnswer;
	const currentQuestion = gameState.questionData[gameState.currentQuestion - 1];

	Object.entries(currentQuestion.correct_answers).forEach((el, i) => {
		if (el[1] === 'true') {
			correctAnswer = el[0].slice(7, 8).toUpperCase();
		}
	});
	if (correctAnswer === clickedAnswer) {
		// Add correct flag to the question object
		gameState.questionData[gameState.currentQuestion - 1].correct = true;

		// Set the color of the element to green
	} else {
		gameState.questionData[gameState.currentQuestion - 1].correct = false;
		console.log('NIEPOPRAWNIE');
	}
	gameView.setAnswersColor(correctAnswer);
	gameState.currentQuestion++;

	// Wait and reneder another question.
	if (gameState.currentQuestion <= gameState.questionAmount) {
		await wait(TIME_TO_NEXT_QUESTION);
		gameView.render(gameState);
		refreshGameHandler();
	} else {
		// RESULT VIEW
	}
};

const refreshGameHandler = () => {
	gameView.addHandlerAnswer(controllAnswer);
	gameView.addHanlderBack(controlBack);
};

const init = () => {
	mainView.addHandlerActive(controlActive);
	mainView.addHandlerStart(controlStart);
};

init();
