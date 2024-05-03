import * as model from "./model.js";
import View from "./view.js";
// import StatesView from "./statesView.js";

const controlStates = async function () {
  try {
    // Loading random number
    const randomNumber = await model.randomState();

    // Sending random number
    View.acceptRandomNumber(randomNumber);

    // Loading Data from API
    await model.statesApi();

    // Rendering Data
    View.render(model.informations.data);
  } catch (err) {
    console.log(err);
  }
};

const initialization = function () {
  View.startingHandler(controlStates);
  View.stateHandler(controlStates);
};
initialization();
