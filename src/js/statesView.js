import View from "./view.js";

class StatesView extends View {
  states = document.querySelectorAll(".states-shape");
  clickedStateDataId;

  stateHandler() {
    this.states.forEach((state) => {
      state.addEventListener("click", () => {
        this.clickedStateDataId = state.getAttribute("data-id");
        console.log(this.clickedStateDataId);
      });
    });
  }

  getClickedStateData() {
    return this.clickedStateDataId;
  }

  hoverEffectHandler() {
    this.states.forEach((state) => {
      state.addEventListener("mouseover", () => {
        state.style.fill = "#EDEDED";
      });
    });
  }

  mouseLeaveHandler() {
    this.states.forEach((state) => {
      state.addEventListener("mouseleave", () => {
        state.style.fill = "#ffffff";
      });
    });
  }
}

export default new StatesView();
