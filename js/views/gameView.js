class GameView {
	_parentElement = document.querySelector('.main');
	_colorsArray = ['one', 'two', 'three', 'four', 'five', 'six', 'seven'];
	_data;
	_clickedAnswer;

	render(data) {
		this._data = data;
		this._parentElement.innerHTML = '';
		this._parentElement.insertAdjacentHTML(
			'afterbegin',
			this._generateMarkup(),
		);
	}

	_shuffleArray(array) {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			const temp = array[i];
			array[i] = array[j];
			array[j] = temp;
		}
	}

	_generateMarkup() {
		// Randomize colors
		this._shuffleArray(this._colorsArray);

		const answers = Object.entries(
			this._data.questionData[this._data.currentQuestion - 1].answers,
		);

		const baseHTML = `	<div class="main__game-box">
    <button class="main__btn-back btn">
      <i class="icofont-caret-left main__back-icon"></i>
    </button>
    <p class="main__category">${this._data.category}</p>
    <p class="main__stats">${this._data.currentQuestion} of ${
			this._data.questionAmount
		}</p>
    <div class="main__question-box">
      <p class="main__question">
      ${this._data.questionData[this._data.currentQuestion - 1].question
				.replace(/</g, '&lt;')
				.replace(/>/g, '&gt;')}
      </p>
    </div>
    <div class="main__answers-box">
   `;

		let answerHTML = ``;

		answers.forEach((el, i) => {
			answerHTML += this._generateAnswerMarkup(el, i);
		});

		answerHTML += `</div> </div>`;

		return baseHTML + answerHTML;
	}

	_generateAnswerMarkup(answer, index) {
		const ansOption = answer[0].slice(-1).toUpperCase();

		if (!answer[1]) return '';

		return `
      <div class="main__option main__option--${
				this._colorsArray[index]
			}" data-ans="${ansOption}">
        <span class="main__answer-opt"> ${ansOption}.</span>
        <span class="main__answer">${answer[1]
					.replace(/</g, '&lt;')
					.replace(/>/g, '&gt;')}</span>
      </div>`;
	}

	setAnswersColor(correctData) {
		const correctEl = document.querySelector(`[data-ans="${correctData}"]`);
		const answers = document.querySelectorAll('.main__option');

		answers.forEach((el) => el.classList.add('wrong'));
		correctEl.classList.remove('wrong');
		correctEl.classList.add('correct');
	}

	addHanlderBack(handler) {
		const btnBack = document.querySelector('.main__btn-back ');
		btnBack.addEventListener('click', handler);
	}

	addHandlerAnswer(handler) {
		const answerBox = document.querySelector('.main__answers-box');

		answerBox.addEventListener('click', function (e) {
			const answer = e.target.closest('.main__option');
			this._clickedAnswer = answer;

			if (!answer) return;

			handler(answer.dataset.ans);

			// Way to delete event listener
			answerBox.replaceWith(answerBox.cloneNode(true));
		});
	}
}

export default new GameView();
