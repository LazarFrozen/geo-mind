import { url, options } from "./config.js";

// const states = document.querySelectorAll(".states-shape");

// states.forEach((state) => {
//   state.addEventListener("click", () => {
//     const dataId = state.getAttribute("data-id");
//     console.log(dataId);
//   });
// });

class View {
  content = document.querySelector(".state-content");
  button = document.querySelector(".button");
  data;

  states = document.querySelectorAll(".states-shape");

  stateHandler() {
    this.states.forEach((state) => {
      state.addEventListener("click", () => {
        const dataId = state.getAttribute("data-id");
        console.log(dataId);
      });
    });
  }

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

  startingHandler(handler) {
    this.button.addEventListener("click", (e) => {
      e.preventDefault();
      handler();
    });
  }
}

export default new View();
