import { wait } from '../helpers';
import { TIME_ERROR } from '../config';

export default class View {
	renderSpinner() {
		this._parentElement.insertAdjacentHTML(
			'beforeend',
			'<div class="main__loader">Loading...</div>',
		);
	}

	removeSpinner() {
		const spinner = this._parentElement.querySelector('.main__loader');
		spinner.remove();
	}

	async renderError(msg = this._errorMessage, title = 'Error') {
		const htmlError = `
    <div class="main__error-box">
    <div class="main__error-top">
    <h2 class="main__error-title">${title}</h2>
    <button class="main__error-exit btn">
      <i class="icofont-close-line main__flag-icon"></i>
    </button>
  </div>
    <p class="main__error-desc">
    ${msg}
    </p>
    </div>`;
		this._parentElement.insertAdjacentHTML('beforeend', htmlError);

		const { promise, timeoutId } = await wait(TIME_ERROR);

		const errorBtn = document.querySelector('.main__error-exit');

		errorBtn.addEventListener('click', () => {
			clearTimeout(timeoutId);
			this._removeError();
		});

		await promise;
		this._removeError();
	}

	_removeError() {
		const errorElement = document.querySelector('.main__error-box');
		errorElement.remove();
	}
}
