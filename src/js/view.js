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
  setValue;
  acceptedSet;
  correctGuesses = 0;
  incorrectGuesses = 0;
  accuracy = 0;
  missedAttempts = new Map();

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
    this.missedAttempts.set(this.abb, 0);
    return this.abb;
  }

  displayStateAbbreviation() {
    return this.data[this.randomData].abbreviation;
  }

  acceptSet(set) {
    this.acceptedSet = set;
    return this.acceptedSet;
  }

  calculateAccuracy() {
    const totalGuesses = this.correctGuesses + this.incorrectGuesses;
    if (totalGuesses > 0) {
      this.accuracy = (this.correctGuesses / totalGuesses) * 100;
    } else {
      this.accuracy = 0;
    }
    console.log(`Accuracy: ${this.accuracy.toFixed(2)}%`);
  }

  comparingStates(newState) {
    console.log(this.abb);
    console.log(this.clickedStateDataId);
    const clickedState = document.querySelector(
      `[data-id='${this.clickedStateDataId}']`
    );
    if (this.abb === this.clickedStateDataId) {
      this.setValue = this.acceptedSet;
      console.log(this.setValue);
      clickedState.style.fill = "#90EE90";
      clickedState.classList.add("guessed");
      this.correctGuesses += 1;
      this.calculateAccuracy();
      if (this.setValue.size === 50) {
        this.modal();
      } else {
        newState();
      }
    } else {
      this.incorrectGuesses += 1;
      this.calculateAccuracy();
      const missedCount = (this.missedAttempts.get(this.abb) || 0) + 1;
      this.missedAttempts.set(this.abb, missedCount);
      if (missedCount >= 3) {
        const correctState = document.querySelector(`[data-id='${this.abb}']`);
        correctState.style.fill = "#fdfa72";
      }
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

  modal() {
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
