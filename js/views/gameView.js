class GameView {
	_parentElement = document.querySelector('.main');
	_colorsArray = ['one', 'two', 'three', 'four', 'five'];
	_data;

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

		const answers = this.data.questionData.answers;

		return `	<div class="main__game-box">
    <button class="main__btn-back btn">
      <i class="icofont-caret-left main__back-icon"></i>
    </button>
    <p class="main__category">${this._data.category}</p>
    <p class="main__stats">${this._data.currentQuestion} of ${this._data.questionAmount}</p>
    <div class="main__question-box">
      <p class="main__question">${this._data.questionData.question}</p>
    </div>

    <div class="main__option main__option--${this._colorsArray[0]}">
      <span class="main__answer-opt"> A.</span>
      <span class="main__answer" data-odp="a">Odpowiedź jeden</span>
    </div>
    <div class="main__option main__option--${this._colorsArray[1]}">
      <span class="main__answer-opt"> B.</span>
      <span class="main__answer" data-odp="b">Odpowiedź jeden</span>
    </div>
    <div class="main__option main__option--${this._colorsArray[2]}">
      <span class="main__answer-opt"> C.</span>
      <span class="main__answer" data-odp="c">Odpowiedź jeden</span>
    </div>
    <div class="main__option main__option--${this._colorsArray[3]}">
      <span class="main__answer-opt"> D.</span>
      <span class="main__answer" data-odp="d">Odpowiedź jeden</span>
    </div>
  </div>`;
	}

	_generateAnswerMarkup(answer) {
		const ansOption = answer[0].slice(-1).toUpperCase();

		return `
      <div class="main__option main__option--${this._colorsArray[0]}">
        <span class="main__answer-opt"> ${ansOption}.</span>
        <span class="main__answer" data-odp="${ansOption}">${asnwer[1]}</span>
      </div>`;
	}

	addHanlderBack(handler) {
		const btnBack = document.querySelector('.main__btn-back ');
		btnBack.addEventListener('click', handler);
	}
}

export default new GameView();
