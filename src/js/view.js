import { url, options } from "./config.js";
import { Api } from "./api.js";

class View {
  content = document.querySelector(".state-content");
  button = document.querySelector(".button");
  data;

  render(data) {
    this.data = data;
    const markup = this.generateStateContent();
    console.log(markup);
    this.clear();
    this.content.insertAdjacentHTML("afterbegin", markup);
  }

  clear() {
    this.content.innerHTML = "";
  }

  generateStateContent() {
    return `
          <div class="state-flag">
            <img class="flag-size" src="${this.data[1].flag}" />
          </div>
          <div class="state-informations">
            <div class="state-style">
              <div class="state-name">
                <img src="img/country.png" class="state-svg-size" />
                <p class="text-center">Country: ${this.data[1].country}</p>
              </div>
            </div>
            <div class="state-style">
              <div class="state-name">
                <img src="img/capital.png" class="state-svg-size" />
                <p class="text-center">Capital: ${this.data[1].capital}</p>
              </div>
            </div>
            <div class="state-style">
              <div class="state-name">
                <img src="img/population.png" class="state-svg-size" />
                <p class="text-center">Population: ${this.data[1].population}</p>
              </div>
            </div>
            <div class="state-style">
              <div class="state-name">
                <img src="img/created.png" class="state-svg-size" />
                <p class="text-center">Admission: ${this.data[1].admission}</p>
              </div>
            </div>
          </div>
  `;
  }

  onClickStates() {
    this.button.addEventListener("click", () => {
      this.generateStateContent();
    });
  }
}

export default new View();
