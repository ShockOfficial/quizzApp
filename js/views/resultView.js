import View from './view';

class ResultView extends View {
	_parentElement = document.querySelector('.main');
	_data;

	render(data) {
		this._data = data;
		this._parentElement.innerHTML = '';
		this._parentElement.insertAdjacentHTML('beforeend', this._generateMarkup());
	}

	_generateMarkup() {
		let html = `
    	<div class="main__result-box">
          <button class="main__btn-back btn">
            <i class="icofont-caret-left main__back-icon"></i>
          </button>
          <h2 class="main__result-title">${this._data.correctAnsCounter} CORRECT ANSWERS</h2>
       `;

		for (let i = 0; i < this._data.questionAmount; i++) {
			html += this._generateQuestion(i);
		}
		html += '</div>';

		return html;
	}

	_generateQuestion(index) {
		const playerAnswer = this._data.questionData[index].playerAnswer;

		const correctAnswers = Object.entries(
			this._data.questionData[index].correct_answers,
		);

		let baseHtml = `
    <div class="main__question-box main__question-box--small">
      <p class="main__question main__question--small">${this._data.questionData[index].question}</p>
    </div>
    <div class="main__answers-box main__answers-box--small">
      
      
      `;

		let playerHtml = '<p class ="main__result-correct"> Your answer: </p>';
		let gameAnsHtml = '';

		playerAnswer.forEach((el) => {
			const category = el.slice(-1).toUpperCase();
			const answerText = this._data.questionData[index].answers[el];
			const playerCorrect = this._data.questionData[index].correct;

			const correctAnsTag = [];
			correctAnswers.forEach((el) => {
				if (el[1] === 'true') {
					correctAnsTag.push(el[0].slice(7, 8).toUpperCase());
				}
			});

			playerHtml += this._generateAnswerMarkup(
				answerText,
				category,
				playerCorrect,
				false,
				correctAnsTag,
			);
		});

		baseHtml += playerHtml;

		baseHtml += '<p class ="main__result-correct"> Answer: </p>';

		correctAnswers.forEach((el) => {
			if (el[1] === 'true') {
				const answerTag = el[0].slice(0, 8);
				const category = answerTag.slice(-1).toUpperCase();
				const answerText = this._data.questionData[index].answers[answerTag];

				gameAnsHtml += this._generateAnswerMarkup(answerText, category, true);
			}
		});
		baseHtml += `${gameAnsHtml}</div>`;

		return baseHtml;
	}

	_generateAnswerMarkup(
		answer,
		ansOption,
		playerCorrect,
		correctAns = false,
		correctAnsArr,
	) {
		return `
      <div class="main__option main__option--small ${
				playerCorrect || correctAns || correctAnsArr.includes(ansOption)
					? 'correct'
					: 'wrong'
			}" data-ans="${ansOption}">
        <span class="main__answer-opt"> ${ansOption}.</span>
        <span class="main__answer">${answer
					.replace(/</g, '&lt;')
					.replace(/>/g, '&gt;')}</span>
      </div>`;
	}

	addHanlderBack(handler) {
		const btnBack = document.querySelector('.main__btn-back ');
		btnBack.addEventListener('click', handler);
	}
}

export default new ResultView();
