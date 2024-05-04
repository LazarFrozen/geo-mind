export default class View {
  content = document.querySelector(".state-content");
  button = document.querySelector(".button");
  data;
  abb;
  randomData;
  markup;

  render(data) {
    this.data = data;
    this.markup = this.generateStateContent();
    this.clear();
    this.content.insertAdjacentHTML("afterbegin", this.markup);
  }

  abbreviation(data, randomData) {
    this.data = data;
    this.randomData = randomData;
    this.abb = this.displayStateAbbreviation();
    console.log(this.abb);
    return this.abb;
  }

  displayStateAbbreviation() {
    return this.data[this.randomData].abbreviation;
  }

  comparingStates(newState) {
    console.log(this.abb);
    console.log(this.clickedStateDataId);
    const clickedState = document.querySelector(
      `[data-id='${this.clickedStateDataId}']`
    );
    if (this.abb === this.clickedStateDataId) {
      console.log("BRAVO BURAZ");
      clickedState.style.fill = "#90EE90";
      clickedState.classList.add("guessed");
      newState();
    }
  }

  clear() {
    this.content.innerHTML = "";
  }

  startingHandler(handler) {
    this.button.addEventListener("click", (e) => {
      e.preventDefault();
      handler();
    });
  }
}
