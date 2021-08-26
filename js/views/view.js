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

	renderError(msg = this._errorMessage) {
		const htmlError = `
    <div class="main__error-box">
    <h2 class="main__error-title">Error</h2>
    <p class="main__error-desc">
     ${msg}
    </p>
  </div>`;
		this._parentElement.insertAdjacentHTML('beforeend', htmlError);
	}

	removeError() {
		const errorElement = this._parentElement.querySelector('.main__error-box');

		errorElement.remove();
	}
}
