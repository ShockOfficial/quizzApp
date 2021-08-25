import mainView from './views/mainView.js';
import gameView from './views/gameView.js';
import { gameState, getData } from './model.js';

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

		const { ok: status } = await getData();
		if (!status) throw new Error('Cannot load questions from server');

		gameView.render(gameState);
		gameView.addHanlderBack(controlBack);
	} catch (err) {
		// TEMP ERROR
		console.error(err);
	}
};

const controlBack = () => {
	mainView.render();
	init();
};

const init = () => {
	mainView.addHandlerActive(controlActive);
	mainView.addHandlerStart(controlStart);
};

init();
