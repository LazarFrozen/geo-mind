import View from "./view.js";

class StatesView extends View {
  states = document.querySelectorAll(".states-shape");

  setAbbreviation(abb) {
    this.abb = abb;
  }

  stateHandler(newState) {
    this.states.forEach((state) => {
      state.addEventListener("click", () => {
        this.clickedStateDataId = state.getAttribute("data-id");
        this.comparingStates(newState);
      });
    });
  }

  hoverEffectHandler() {
    this.states.forEach((state) => {
      state.addEventListener("mouseover", () => {
        if (!state.classList.contains("guessed")) {
          state.style.fill = "#EDEDED";
        }
      });
    });
  }

  mouseLeaveHandler() {
    this.states.forEach((state) => {
      state.addEventListener("mouseleave", () => {
        if (!state.classList.contains("guessed")) {
          state.style.fill = "#ffffff";
        }
      });
    });
  }
}

export default new StatesView();
