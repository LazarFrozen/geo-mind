export default class View {
  content = document.querySelector(".state-content");
  button = document.querySelector(".button");
  blur = document.querySelector(".blur");
  popup = document.querySelector(".popup");
  closeButton = document.querySelector(".button-done");
  data;
  abb;
  randomData;
  markup;
  spiner;

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
    if (this.abb !== this.clickedStateDataId) {
      clickedState.style.fill = "#FF2C21";
    }
    if (clickedState.classList.contains("guessed")) {
      clickedState.style.fill = "#90EE90";
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

  closePopup() {
    this.blur.classList.remove("active");
    this.popup.classList.remove("active");
  }

  modal(guessedStates) {
    console.log(guessedStates);
    if (guessedStates.size === 50) {
      this.blur.classList.toggle("active");
      this.popup.classList.toggle("active");
      if (this.closeButton) {
        this.closeButton.addEventListener("click", this.closePopup.bind(this));
      }

      document.addEventListener("click", (event) => {
        if (
          this.popup &&
          !this.popup.contains(event.target) &&
          this.blur &&
          !this.blur.contains(event.target) &&
          this.popup.classList.contains("active")
        ) {
          this.closePopup();
        }
        return;
      });
    }
  }
}
