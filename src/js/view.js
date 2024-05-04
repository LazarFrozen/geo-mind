export default class View {
  content = document.querySelector(".state-content");
  button = document.querySelector(".button");
  data;
  abb;

  render(data) {
    this.data = data;
    const markup = this.generateStateContent();
    this.clear();
    this.content.insertAdjacentHTML("afterbegin", markup);
  }

  abbreviation(data) {
    this.data = data;
    this.abb = this.displayStateAbbreviation();
    console.log(this.abb);
  }

  comparingStates() {
    if (this.abb === this.clickedStateDataId) {
      console.log("BRAVO BURAZ");
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
