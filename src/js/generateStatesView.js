import View from "./view.js";

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
                <img src="img/country.png" class="state-svg-size" />
                <p class="text-center">Country: ${
                  this.data[this.randomData].country
                }</p>
              </div>
            </div>
            <div class="state-style">
              <div class="state-name">
                <img src="img/capital.png" class="state-svg-size" />
                <p class="text-center">Capital: ${
                  this.data[this.randomData].capital
                }</p>
              </div>
            </div>
            <div class="state-style">
              <div class="state-name">
                <img src="img/population.png" class="state-svg-size" />
                <p class="text-center">Population: ${
                  this.data[this.randomData].population
                }</p>
              </div>
            </div>
            <div class="state-style">
              <div class="state-name">
                <img src="img/created.png" class="state-svg-size" />
                <p class="text-center">Admission: ${
                  this.data[this.randomData].admission
                }</p>
              </div>
            </div>
          </div>
  `;
  }

  displayStateAbbreviation() {
    return this.data[this.randomData].abbreviation;
  }
}

export default new GenerateStatesView();
