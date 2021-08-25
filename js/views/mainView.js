class MainView {
	_parentElement = document.querySelector('.main');
	_categoryList = document.querySelectorAll('.main__item');
	_categoryParent = document.querySelector('.main__cat-list');

	_errorMessage = 'Set amout of question between 1 and 25.';

	render() {
		this._parentElement.innerHTML = this._generateMarkup();
		this._categoryList = document.querySelectorAll('.main__item');
		this._parentElement = document.querySelector('.main');
		this._categoryParent = document.querySelector('.main__cat-list');
	}

	_renderError() {
		// Temp error;
		console.log(this._errorMessage);
	}

	_generateMarkup() {
		const html = `<div class="main__category-box">
    <h2 class="main__category-title">Chose category</h2>
    <ul class="main__cat-list">
      <li class="main__item active" data-cat="linux">
        <div class="main__item-box">
          <i class="icofont-brand-linux main__item-img"></i>
          <p class="main__item-title">Linux</p>
        </div>
      </li>
      <li class="main__item" data-cat="programming">
        <div class="main__item-box">
          <i class="icofont-code-alt main__item-img"></i>
          <p class="main__item-title">Programming</p>
        </div>
      </li>
      <li class="main__item" data-cat="devops">
        <div class="main__item-box">
          <i class="icofont-options main__item-img"></i>
          <p class="main__item-title">DevOps</p>
        </div>
      </li>
      <li class="main__item" data-cat="networking">
        <div class="main__item-box">
          <i class="icofont-network main__item-img"></i>

          <p class="main__item-title">Networing</p>
        </div>
      </li>
      <li class="main__item" data-cat="docker">
        <div class="main__item-box">
          <i class="icofont-console main__item-img"></i>
          <p class="main__item-title">Docker</p>
        </div>
      </li>
    </ul>
  </div>

  <form class="main__form">
    <label for="quantity" class="main__form-label"
      >Set amount of questions</label
    >
    <input
      class="main__input"
      type="number"
      id="quantity"
      name="quantity"
      min="1"
      max="25"
    />
    <button type="submit" class="main__btn-start btn">START</button>
  </form>`;
		return html;
	}

	removeActiveClass(elements) {
		elements.forEach((el) => {
			el.classList.remove('active');
		});
	}

	addHandlerActive(handler) {
		const that = this;

		this._categoryParent.addEventListener('click', function (e) {
			e.preventDefault();
			handler(e, that._categoryList, that._categoryParent);
		});
	}

	addHandlerStart(handler) {
		const form = document.querySelector('.main__form');

		form.addEventListener('submit', (e) => {
			e.preventDefault();
			const input = e.target.querySelector('.main__input');

			if (!input.value) {
				this._renderError();
				return;
			}

			handler(input.value);
		});
	}
}

export default new MainView();