import View from "./view.js";
import country from "url:/img/country.png";
import capital from "url:/img/capital.png";
import population from "url:/img/population.png";
import created from "url:/img/created.png";
import error from "url:/img/error.png";
import spinner from "url:/img/spinner.png";

class GenerateStatesView extends View {
  acceptRandomNumber(randomNumber) {
    this.randomData = randomNumber;
  }

  generateStateContent() {
    return `
          <div class="state-flag">
            <img class="flag-size" src="${this.data[this.randomData].flag}" />
          </div>
          <div class="state-informations">
            <div class="state-style">
              <div class="state-name">
                <img src=${country} alt="State name" class="state-svg-size" />
                <p class="text-center">Country: ${
                  this.data[this.randomData].country
                }</p>
              </div>
            </div>
            <div class="state-style">
              <div class="state-name">
                <img src=${capital} alt="Capital of a state" class="state-svg-size" />
                <p class="text-center">Capital: ${
                  this.data[this.randomData].capital
                }</p>
              </div>
            </div>
            <div class="state-style">
              <div class="state-name">
                <img src=${population} alt="Population of a state" class="state-svg-size" />
                <p class="text-center">Population: ${
                  this.data[this.randomData].population
                }</p>
              </div>
            </div>
            <div class="state-style">
              <div class="state-name">
                <img src=${created} alt="Admission of a state" class="state-svg-size" />
                <p class="text-center">Admission: ${
                  this.data[this.randomData].admission
                }</p>
              </div>
            </div>
          </div>
  `;
  }

  renderSpinner() {
    this.spiner = `
    <div class="spinner">
      <img src=${spinner} alt="Loader" />
    </div>
    `;
    this.clear();
    this.content.insertAdjacentHTML("afterbegin", this.spiner);
  }

  renderError(message) {
    this.markup = `
    <div class="error">
      <div>
        <img src=${error} alt="Error sign" class="error-img" />
      </div>
      <p>${message}</p>
    </div>
    `;

    this.clear();
    this.content.insertAdjacentHTML("afterbegin", this.markup);
  }
}

export default new GenerateStatesView();
