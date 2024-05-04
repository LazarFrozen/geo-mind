import * as model from "./model.js";
import GenerateStatesView from "./generateStatesView.js";
import StatesView from "./statesView.js";

const controlStates = async function () {
  try {
    // Loading random number
    const randomNumber = await model.randomState();

    // Sending random number
    GenerateStatesView.acceptRandomNumber(randomNumber);

    // Loading Data from API
    await model.statesApi();

    // Rendering Data
    GenerateStatesView.render(model.informations.data);

    // Abbreviation
    GenerateStatesView.abbreviation(model.informations.data);
  } catch (err) {
    console.log(err);
  }
};

const initialization = function () {
  GenerateStatesView.startingHandler(controlStates);
  StatesView.stateHandler(controlStates);
  StatesView.hoverEffectHandler(controlStates);
  StatesView.mouseLeaveHandler(controlStates);
};
initialization();
